import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate('/baralhos');
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Navigate to the registration page
  };

  return (
    <body className="bg-cor-0 relative isolate overflow-hidden transition ease-in-out duration-75">
      <div className="flex items-center justify-center h-screen">
        <div className="w-fit border bg-cor-4/70 px-8 py-14 shadow-md sm:rounded-3xl">
          <div className="flex flex-col items-center text-center mb-8 justify-center">
            <svg className="h-auto w-16 flex-none text-cor-0" version="1.1" viewBox="0 0 1080 1080" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              {/* SVG Paths */}
            </svg>
            <p className="flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-cor-0">Login</span>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col text-sm rounded-md">
            <input
              className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" type="submit">
              Sign in
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
          <div className="mt-5 flex justify-between text-sm text-gray-600">
            <button type="button" onClick={handleRegisterRedirect} className="underline">
              Não tem uma conta? registre-se aqui!!
            </button>
            <a href="/">Forgot password?</a>
          </div>
          <div className="flex justify-center mt-5 text-sm">
            <p className="text-gray-400">or you can sign in with</p>
          </div>
          <div className="mt-5 flex justify-center gap-3">
            <img alt="Volans Logo" className="w-12 h-12" />
            <img className="h-7 grayscale cursor-pointer hover:grayscale-0 scale-105 duration-300" />
            <img className="h-7 grayscale cursor-pointer hover:grayscale-0 scale-105 duration-300" />
            <a className="bg-gray-400 h-7 w-7 rounded-3xl text-center grayscale cursor-pointer hover:grayscale-0 scale-105 duration-300">...</a>
          </div>
          <div className="mt-5 flex text-center text-sm text-gray-400">
            <p>
              This site is protected by reCAPTCHA and the Google <br />
              <a className="underline">Privacy Policy</a> and <a className="underline" href="">Terms of Service</a> apply.
            </p>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;