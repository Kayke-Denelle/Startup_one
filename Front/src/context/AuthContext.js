import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode'; // Certifique-se de ter o pacote instalado: npm install jwt-decode

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [userId, setUserId] = useState(null); // Novo estado para armazenar o userId
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.userId || decodedToken.id); // Altere conforme o nome do campo no seu token
      } catch (err) {
        console.error('Erro ao decodificar o token:', err);
        logout(); // Se o token estiver inválido, faça logout
      }
    } else {
      setUserId(null); // Reseta o userId se não houver token
    }
  }, [token]);

  const login = async (email, password) => {
    try {
      const response = await axios.post('https://volans-api-production.up.railway.app/api/auth/login', { email, password });
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Erro ao fazer login');
    }
  };

  const logout = () => {
    setToken(null);
    setUserId(null); // Limpa o userId no logout
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, userId, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};
