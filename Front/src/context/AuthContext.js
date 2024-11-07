import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [error, setError] = useState(null);

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
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};
