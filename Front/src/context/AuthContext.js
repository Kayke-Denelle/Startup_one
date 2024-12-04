import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; // Certifique-se de ter o pacote instalado: npm install jwt-decode

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);

        // Verificar se o token expirou
        const currentTime = Date.now() / 1000; // Timestamp atual em segundos
        if (decodedToken.exp && decodedToken.exp < currentTime) {
          console.warn('Token expirado. Fazendo logout...');
          logout();
        } else {
          setUserId(decodedToken.userId || decodedToken.id); // Ajuste conforme o campo do seu token
        }
      } catch (err) {
        console.error('Erro ao decodificar o token:', err);
        logout();
      }
    } else {
      setUserId(null);
    }
  }, [token]);

  const login = async (email, password) => {
    try {
      const response = await axios.post('https://volans-api-production.up.railway.app/api/auth/login', { email, password });
      const receivedToken = response.data.token;

      // Validar o token imediatamente após recebê-lo
      const decodedToken = jwtDecode(receivedToken);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp && decodedToken.exp < currentTime) {
        throw new Error('Token recebido já está expirado.');
      }

      setToken(receivedToken);
      localStorage.setItem('token', receivedToken);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Erro ao fazer login');
      console.error('Erro durante o login:', err);
    }
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, userId, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};
