import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove o token do localStorage ou sessionStorage
    localStorage.removeItem('authToken'); // Altere 'authToken' pelo nome do seu token
    // Redireciona para a página inicial (ou login)
    navigate('/');
  };

  return (
    <div className="bg-cor-2 overflow-hidden z-10">
      <div className="text-cor-4 w-64 min-h-screen p-5 hidden sm:hidden md:hidden lg:inline-block xl:inline-block">
        <div className="flex">
          <svg
            className="h-auto w-14 text-cor-4"
            fill="currentColor"
            version="1.1"
            viewBox="0 0 1080 1080"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Insira o SVG aqui */}
          </svg>
          <h2 className="text-2xl font-bold mb-5 pt-4 px-3">Volans</h2>
        </div>
        <ul className="space-y-2">
          <li className="text-cor-4 flex p-2 rounded hover:bg-cor-3 transition ease-in-out duration-300">
            <svg
              className="h-auto w-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              {/* SVG do ícone */}
            </svg>
            <Link to="/dashboard" className="px-3">
              Dashboard
            </Link>
          </li>
          <li className="text-cor-4 flex p-2 rounded hover:bg-cor-3 transition ease-in-out duration-300">
            <svg
              className="h-auto w-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              {/* SVG do ícone */}
            </svg>
            <Link to="/baralhos" className="px-3">
              Baralhos
            </Link>
          </li>
          <li
            className="text-cor-4 flex p-2 rounded hover:bg-cor-3 transition ease-in-out duration-300 cursor-pointer"
            onClick={handleLogout}
          >
            <svg
              className="h-auto w-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              {/* SVG do ícone */}
            </svg>
            <span className="px-3">Sair</span>
          </li>
        </ul>
      </div>
      <nav className="text-white w-full fixed lg:hidden xl:hidden top-0 left-0 z-10 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="text-xl font-semibold hover:bg-gray-700 px-4 py-2 rounded"
            >
              Dashboard
            </Link>
            <Link
              to="/baralhos"
              className="text-xl font-semibold hover:bg-gray-700 px-4 py-2 rounded"
            >
              Baralhos
            </Link>
          </div>
          <div className="flex items-center">
            <span
              className="text-xl font-semibold hover:bg-gray-700 px-4 py-2 rounded cursor-pointer"
              onClick={handleLogout}
            >
              Sair
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
