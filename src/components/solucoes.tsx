import React from 'react';
import '../styles/solucoes.css';

const Solucoes: React.FC = () => {
  return (
    <div className="container">
      <div className="imagem-1">
        <img src='./imagens/Imagem 1.png' alt="Imagem 1" width="450" height="236" /> 
        <div className="texto">
          <h1 className="h1">POUPE E INVISTA!</h1>
          <h2 className="h2">Explore Missões Financeiras</h2> 
          <p className="p">Desafie-se com missões interativas que tornam a educação financeira uma jornada divertida e envolvente!</p> 
          <button className="button">EXPLORAR</button> 
        </div>
      </div>
      <div className="imagem-2">
        <div className="texto texto-right">
          <h1 className="h1">JOGUE E APRENDA!</h1> 
          <h2 className="h2">Teste Seus Conhecimentos</h2> 
          <p className="p">Participe de quizzes divertidos que testam e expandem seu conhecimento financeiro.</p> 
          <button className="button">SAIBA MAIS</button> 
        </div>
        <img src="./imagens/Imagem 2.png" alt="Imagem 2" width="450" height="236" /> 
      </div>
    </div>
  );
};

export default Solucoes;
