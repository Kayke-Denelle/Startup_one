import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { decode as jwtDecode } from 'jwt-decode'; // Importação corrigida
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Registro from './components/Register';
import LandingPage from './components/landing-page';
import Baralho from './components/baralhos';
import Carta from './components/cartas';
import Dashboard from './components/dashboard';
import Revisao from './components/atividade';

const App = () => {
  const token = localStorage.getItem('token');
  let userId;

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      userId = decodedToken.userId; // Certifique-se de que o payload do token contém o `userId`
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      userId = null;
    }
  } else {
    console.error('Usuário não autenticado');
    userId = null;
  }

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registro />} />
          <Route path="/dashboard" element={<Dashboard userId={userId} />} />
          <Route path="/baralhos" element={<Baralho userId={userId} />} />
          <Route path="/cartas/:deckId" element={<Carta userId={userId} />} />
          <Route path="/revisao/:deckId" element={<Revisao userId={userId} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
