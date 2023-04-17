import React from 'react';
import './App.css';

import Header from './components/Header/'
import Capa from './components/Capa/'
import Produtos from './components/Produtos';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Rodape from './components/Rodape';
function App() {
  return (
    <div className="App">
      <Header />
      <Capa />
      <Produtos />
      <Sobre />
      <Contato />
      <Rodape />
    </div>
  );
}

export default App;
