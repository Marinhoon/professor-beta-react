import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logopb.png'

const Header: React.FC = () => {
  return (
    <header>
       <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />

      </div>
      
      <nav>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#aulas">Aulas/Treinamentos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <img src="/path/to/your/logo.png" alt="" className="" />
    </header>
  );
};

export default Header;


