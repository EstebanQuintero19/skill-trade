// src/pages/Login.js
import React, { useState } from 'react';
import api from '../api'; // Asegúrate de tener el archivo api.js configurado
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState(null); // Estado para manejar errores
  const navigate = useNavigate(); // Hook de React Router para redireccionar

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Resetear el mensaje de error

    try {
      // Llamada a la API para autenticación
      const response = await api.post('/login', { email, password });
      const { token } = response.data;

      // Guarda el token en localStorage o sessionStorage
      if (remember) {
        localStorage.setItem('token', token);
      } else {
        sessionStorage.setItem('token', token);
      }

      console.log('Usuario autenticado:', response.data);

      // Redirige al usuario a la página de inicio o a otra página
      navigate('/');
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response?.data || error.message);
      setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
        <img
          alt="profile-placeholder"
          src="/images/usuario.svg"
          className="w-24 h-24 mx-auto my-4 rounded-full border-2 border-gray-300 shadow-lg"
          />


        </div>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
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
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="remember" className="text-gray-600">Remember me</label>
            </div>
            <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg p-2 w-full hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
