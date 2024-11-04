// src/components/Profile.js
import React, { useState } from 'react';

function Profile({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    setIsEditing(false);
    // Aquí puedes agregar lógica para guardar los cambios en el backend
    console.log('Guardando perfil:', name, email);
  };

  return (
    <div className="profile">
      <h2>Perfil</h2>
      {isEditing ? (
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSave}>Guardar</button>
        </div>
      ) : (
        <div>
          <p>Nombre: {name}</p>
          <p>Email: {email}</p>
          <button onClick={() => setIsEditing(true)}>Editar Perfil</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
