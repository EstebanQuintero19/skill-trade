// src/pages/Course.js
import React, { useState } from 'react';

export default function Course() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  
  const handleCreateCourse = (event) => {
    event.preventDefault();
    console.log('Creando curso con los siguientes datos:', {
      title,
      description,
      category,
      subcategory,
    });
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Crear curso</h1>
      
      <form onSubmit={handleCreateCourse}>
        <label className="block text-gray-600 mb-1" htmlFor="course-title">Título curso</label>
        <input
          type="text"
          id="course-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          placeholder="Ingrese el título del curso"
          required
        />

        <label className="block text-gray-600 mb-1" htmlFor="course-description">Descripción curso</label>
        <textarea
          id="course-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          placeholder="Ingrese la descripción del curso"
          required
        ></textarea>

        <label className="block text-gray-600 mb-1" htmlFor="image-upload">Subir imagen</label>
        <button type="button" className="bg-blue-500 text-white p-2 rounded-lg mb-4">Subir imagen</button>

        <label className="block text-gray-600 mb-1" htmlFor="category">Categoría</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          required
        >
          <option value="">Seleccione una categoría</option>
          <option value="category1">Categoría 1</option>
          <option value="category2">Categoría 2</option>
        </select>

        <label className="block text-gray-600 mb-1" htmlFor="subcategory">Subcategoría</label>
        <select
          id="subcategory"
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          required
        >
          <option value="">Seleccione una subcategoría</option>
          <option value="subcategory1">Subcategoría 1</option>
          <option value="subcategory2">Subcategoría 2</option>
        </select>

        <button type="submit" className="bg-green-500 text-white hover:bg-green-600 p-2 rounded-lg w-full">Crear</button>
      </form>
    </div>
  );
}
