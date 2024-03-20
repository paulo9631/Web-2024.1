import React from 'react';
import Filho from './01Filho';
import styles from './Atividade01.module.css'; // Verifique se o caminho está correto

const Pai = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pai}>
        <h3>Pai 1</h3>
        <Filho altura={1.8} peso={90} />
      </div>
      <div className={styles.pai}>
        <h3>Pai 2</h3>
        <Filho altura={1.7} peso={40} />
      </div>
      <div className={styles.pai}>
        <h3>Pai 3</h3>
        <Filho altura={1.6} peso={50} />
      </div>
      <div className={styles.pai}>
        <h3>Pai 4</h3>
        <Filho altura={1.77} peso={85} />
      </div>
    </div>
  );
};

export default Pai;