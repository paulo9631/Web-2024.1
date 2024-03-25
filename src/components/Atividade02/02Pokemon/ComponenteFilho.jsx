// ComponenteFilho.jsx
import React, { useContext } from "react";
import ComponenteNeto from "./ComponenteNeto";
import { NumeroContext } from "./ComponenteAvo";

const ComponenteFilho = () => {
  const contador = useContext(NumeroContext);

  return (
    <>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador + 1}.png`}
        alt={`Pokemon ${contador + 1}`}
      />
      <ComponenteNeto />
    </>
  );
};

export default ComponenteFilho;
