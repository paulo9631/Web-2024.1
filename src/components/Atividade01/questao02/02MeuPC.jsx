import React from 'react';
import styles from './MeuPC.module.css';

const PlacaMae = ({ nome, preco }) => {
  return (
    <div className={styles.component}>
      <h3>{nome}</h3>
      <p>Preço: {preco}</p>
    </div>
  );
};

const Memoria = ({ nome, preco }) => {
  return (
    <div className={styles.component}>
      <h3>{nome}</h3>
      <p>Preço: {preco}</p>
    </div>
  );
};

const PlacaDeVideo = ({ nome, preco }) => {
  return (
    <div className={styles.component}>
      <h3>{nome}</h3>
      <p>Preço: {preco}</p>
    </div>
  );
};
export { PlacaMae, Memoria, PlacaDeVideo };