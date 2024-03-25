import React, { createContext, useState } from "react";
import ComponenteFilho from "./ComponenteFilho";

export const NumeroContext = createContext();

const ComponenteAvo = () => {
  const [contador, setContador] = useState(1);

  const incrementarContador = () => {
    setContador(contador + 3); // Incrementa o contador em 3
  };

  return (
    <NumeroContext.Provider value={contador}>
      <div style={{ textAlign: "center" }}>
        <div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador}.png`}
            alt={`Pokemon ${contador}`}
          />
          <ComponenteFilho />
        </div>
        <button style={{ marginTop: "10px" }} onClick={incrementarContador}>
          Incrementar
        </button>
      </div>
    </NumeroContext.Provider>
  );
};

export default ComponenteAvo;
