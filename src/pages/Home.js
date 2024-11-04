// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <header className="bg-blue-600 p-4 shadow-md">
        <nav className="flex justify-between items-center">
          <div className="text-lg font-bold text-white">Mi Sitio Web</div>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-white hover:text-blue-300">Inicio</Link></li>
            <li><Link to="/servicios" className="text-white hover:text-blue-300">Servicios</Link></li>
            <li><Link to="/contacto" className="text-white hover:text-blue-300">Contacto</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col md:flex-row p-4">
        <div className="flex-1">
          <img src="https://placehold.co/600x400" alt="Gardening" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="flex-1 bg-purple-500 text-white p-4 rounded-lg shadow-lg ml-4">
          <h2 className="text-xl font-semibold">¿Quiénes somos?</h2>
          <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
      </main>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="bg-purple-500 p-4 rounded-lg shadow-lg text-center">
          <h3 className="font-bold">Header</h3>
          <h4 className="text-sm">Subtítulo</h4>
          <div className="mt-2">
            <div className="bg-gray-300 h-16 w-16 mx-auto rounded-full"></div>
          </div>
          <h5 className="mt-2">Título</h5>
          <p className="text-sm">Subtítulo</p>
          <button className="mt-2 bg-green-500 text-white hover:bg-green-400 p-2 rounded">Enabled</button>
        </div>
        <div className="bg-purple-500 p-4 rounded-lg shadow-lg text-center">
          <h3 className="font-bold">Header</h3>
          <h4 className="text-sm">Subtítulo</h4>
          <div className="mt-2">
            <div className="bg-gray-300 h-16 w-16 mx-auto rounded-full"></div>
          </div>
          <h5 className="mt-2">Título</h5>
          <p className="text-sm">Subtítulo</p>
          <button className="mt-2 bg-green-500 text-white hover:bg-green-400 p-2 rounded">Enabled</button>
        </div>
        <div className="bg-purple-500 p-4 rounded-lg shadow-lg text-center">
          <h3 className="font-bold">Header</h3>
          <h4 className="text-sm">Subtítulo</h4>
          <div className="mt-2">
            <div className="bg-gray-300 h-16 w-16 mx-auto rounded-full"></div>
          </div>
          <h5 className="mt-2">Título</h5>
          <p className="text-sm">Subtítulo</p>
          <button className="mt-2 bg-green-500 text-white hover:bg-green-400 p-2 rounded">Enabled</button>
        </div>
      </section>
    </div>
  );
}
