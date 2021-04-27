/* Importações de modulos e bibliotecas */
import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

/* Minhas importações (do projeto) */
import history from './services/history';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
      {/*Mensagem fecham em 3 segundos*/}
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}
export default App;
