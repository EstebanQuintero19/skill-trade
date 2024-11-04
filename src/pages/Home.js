// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api'; // Asegúrate de tener configurado el archivo `api.js`

export default function Home() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Cargar servicios de una API al montar el componente
    const fetchServices = async () => {
      try {
        const response = await api.get('/services'); // Asegúrate de que la ruta existe en tu backend
        setServices(response.data);
      } catch (error) {
        console.error('Error al obtener los servicios:', error.message);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <header className="bg-blue-600 p-4 shadow-md">
        <nav className="flex justify-between items-center">
          <div className="text-lg font-bold text-white">Mi Sitio Web</div>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-white hover:text-blue-300">Inicio</Link></li>
            <li><Link to="/services" className="text-white hover:text-blue-300">Servicios</Link></li>
            <li><Link to="/contact" className="text-white hover:text-blue-300">Contacto</Link></li>
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
        {services.length > 0 ? (
          services.map(service => (
            <div key={service.id} className="bg-purple-500 p-4 rounded-lg shadow-lg text-center">
              <h3 className="font-bold">{service.title}</h3>
              <p className="text-sm">{service.subtitle}</p>
              <div className="mt-2">
                <img src={service.imageUrl} alt={service.title} className="bg-gray-300 h-16 w-16 mx-auto rounded-full" />
              </div>
              <h5 className="mt-2">{service.title}</h5>
              <p className="text-sm">{service.description}</p>
              <button className="mt-2 bg-green-500 text-white hover:bg-green-400 p-2 rounded">Learn More</button>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-600">Cargando servicios...</p>
        )}
      </section>
    </div>
  );
}
