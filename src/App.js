import React from 'react';
import './App.css';
import Pai from './components/Atividade01/questao01/01Pai';
import { PlacaMae, Memoria, PlacaDeVideo } from './components/Atividade01/questao02/02MeuPC';
import { World, Arena, Hero, Enemy } from './components/Atividade01/questao03/03Batalha';

function App() {
  const style = {
    width: '300px',
    display: 'inline-block',
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Nome: Paulo Vitor Pinheiro da Silva</h2>
        <p>Matrícula: 542156</p>
        <p>Turma: T02</p>
      </div>
      <div className="title-container">
        <h1>Atividade 01 - questao 1</h1>
      </div>
      <Pai />

      <div>
        <section className="App-section">
          <h1 className="App-section-title">Atividade 01 - questao 2</h1>
          <div className="App-card-row-4">
            <div className="App-card-column-4">
              <PlacaMae nome="Intel core i5-10300H" preco={758.0} style={style} />
            </div>
            <div className="App-card-column-4">
              <Memoria nome="Memória Husky" preco={250} style={style} />
            </div>
          </div>
          <div className="App-card-row-4">
            <div className="App-card-column-4">
              <PlacaDeVideo nome="Nvidia RTX 1650" preco={990.0} style={style} />
            </div>
          </div>
        </section>
      </div>

      <div className="App-section">
        <h1 className="App-section-title">Atividade 01 - questao 3</h1>
        <World><Arena arena="Shinjuku - Japão">
            <Hero
              name="Satoru Gojo"
              img="https://i.pinimg.com/564x/4b/5c/c4/4b5cc4ecd1b8c72b44d16d18752bad83.jpg"
            />
            <h1> VS </h1>
            <Enemy
              name="Ryomen Sukuna"
              img="https://i.pinimg.com/564x/da/28/86/da288616f7736607ea33cd8465b3b265.jpg"
            />
          </Arena>

          <Arena arena="Meio da Floresta">
            <Hero
              name="Gon Freecs"
              img="https://i.pinimg.com/564x/9e/9e/80/9e9e80318f103d5af5d7e2d3690e29e0.jpg"
            />
            <h1> VS </h1>
            <Enemy
              name="Neferpitou"
              img="https://i.pinimg.com/564x/fe/f1/95/fef195d78834f106eb1f4e3ca895aeec.jpg"
            />
          </Arena>
        </World>
      </div>
    </div>
  );
}

export default App;