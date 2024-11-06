// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-5">Menu</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/dashboard" className="block p-2 rounded hover:bg-gray-700">Dashboard</Link>
        </li>
        <li>
          <Link to="/baralhos" className="block p-2 rounded hover:bg-gray-700">Baralhos</Link>
        </li>
        <li>
          <Link to="/" className="block p-2 rounded hover:bg-gray-700">Sair</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;