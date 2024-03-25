import React from 'react'
import FunctionContextA from "./components/Atividade02/Questão01/FunctionContextA";
import ComponenteAvo from "./components/Atividade02/02Pokemon/ComponenteAvo";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h2>Nome: Paulo Vitor Pinheiro da Silva</h2>
        <p>Matrícula: 542156</p>
        <p>Turma: T02</p>
      </div>
      <div className="title-container">
        <h1>Atividade02 - questao 1</h1>
      </div>
      <FunctionContextA />
      <div>
        <h1>Atividade02 - questão 2</h1>
      </div>
      <ComponenteAvo />
    </div>
  );
}


export default App;
