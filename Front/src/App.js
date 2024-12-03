import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Registro from './components/Register';
import LandingPage from './components/landing-page';
import Baralho from './components/baralhos';
import Carta from './components/cartas';
import Dashboard from './components/dashboard'
import Revisão from './components/atividade';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Registro />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/baralhos" element={<Baralho />} />
          <Route path="/cartas/:deckId" element={<Carta />} />
          <Route path="/revisao/:deckId" element={<Revisão />} />
          
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
