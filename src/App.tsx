import React from "react";
import "./App.css";

import Header from "./components/Header";
import Section from"./components/Section";
import logo from './assets/logopb.png';

const App: React.FC = () => {
  return (
      <div className="app">
        <Header />
        <Section title="Início">
          <p>Bem-vindo ao nosso site!</p>
        </Section>
        <Section title="Serviços">
          <p>Oferecemos diversos serviços para atender às suas necessidades.</p>
        </Section>
        <Section title="Aulas/Treinamentos">
          <p>
            Participe de nossas aulas e treinamentos para aprender e se
            desenvolver.
          </p>
        </Section>
        <Section title="Contato">
          <p>Entre em contato conosco para mais informações.</p>
        </Section>
      </div>
  );
};

export default App;
