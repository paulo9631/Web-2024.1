// ComponenteNeto.jsx
import React, { useContext } from "react";
import { NumeroContext } from "./ComponenteAvo";

const ComponenteNeto = () => {
  const contador = useContext(NumeroContext);

  return (
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador + 2}.png`}
      alt={`Pokemon ${contador + 2}`}
    />
  );
};

export default ComponenteNeto;
