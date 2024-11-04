// src/pages/Signup.js
import React, { useState } from 'react';
import api from '../api'; // Asegúrate de tener configurado el archivo api.js
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null); // Para manejar errores
  const [successMessage, setSuccessMessage] = useState(''); // Para mensaje de éxito
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Resetear el mensaje de error

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      // Enviar los datos de registro al backend
      const response = await api.post('/signup', { name, email, password });

      // Muestra un mensaje de éxito y redirige al usuario
      setSuccessMessage('Registro exitoso. Redirigiendo al login...');
      setTimeout(() => navigate('/login'), 2000); // Redirige al login después de 2 segundos

      console.log('Usuario registrado:', response.data);
    } catch (error) {
      console.error('Error al registrar el usuario:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'Error al registrar. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img
            alt="profile-placeholder"
            src="https://openui.fly.dev/openui/100x100.svg?text=📷"
            className="rounded-full border-2 border-gray-300"
          />
        </div>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 mb-1">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-gray-600 mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg p-2 w-full hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
