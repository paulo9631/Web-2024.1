  import React from 'react';

  const Filho = ({ altura, peso }) => {
    const calcularImc = () => {
      const imc = peso / (altura * altura);

      if (imc < 18) {
        return <h3 style={{color: 'yellow'}}>Abaixo do peso</h3>;
      } else if (imc > 25) {
        return <h3 style={{color: 'red'}}>Acima do peso</h3>;
      } else {
        return <h3 style={{color: 'green'}}>Peso ideal</h3>;
      }
    };

    return (
      <div>
        <p>
          Altura: {altura}m - Peso: {peso}kg
        </p>
        {calcularImc()}
      </div>
    );
  };

  export default Filho;