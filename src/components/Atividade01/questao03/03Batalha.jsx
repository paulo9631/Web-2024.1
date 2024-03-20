// src/components/atividade01/03Batalha.jsx
import React from 'react';
import './world.module.css';

const Hero = ({ name, img, arena }) => {
  return (
    <div className="hero-container">
      <div className="hero-name">{name}</div>
      <img className="hero-image" src={img} alt={name} />
      <div className="hero-arena">{arena}</div>
    </div>
  );
};

const Enemy = ({ name, img, arena }) => {
  return (
    <div className="enemy-container">
      <div className="enemy-name">{name}</div>
      <img className="enemy-image" src={img} alt={name} />
      <div className="enemy-arena">{arena}</div>
    </div>
  );
};

const Arena = ({ arena, children }) =>
  React.Children.map(children, (child) =>
    React.cloneElement(child, { arena })
  );

const World = ({ children }) => {
  return <div className="world-container">{children}</div>;
};

export { Hero, Enemy, Arena, World };