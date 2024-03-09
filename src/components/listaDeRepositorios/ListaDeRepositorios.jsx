import React from "react";
import "../listaDeRepositorios/listaDeRepositorios.css";

import { useEffect, useState } from "react";

const ListaDeRepositorios = () => {
  const [repositorio, setRepositorios] = useState([]);

  useEffect(() => {
    const carregarRepositorios = async () => {
      const response = await fetch(
        "https://api.github.com/users/lucasasdev/repos"
      );

      const repositorio = await response.json();

      setRepositorios(repositorio);
    };

    carregarRepositorios();
  }, []);

  return (
    <div className="containerList">
      <ul className="repoList">
        {repositorio.map((repositorio) => (
          <li key={repositorio.id}>{repositorio.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeRepositorios;
