
import React, { useState } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [userError, setUserError] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if(user.length < 5) {
      setUserError('Por favor verifique su informacion nuevamente');
    } else {
      setUserError('');
    }
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(![user,email].includes("")) {
      setMessage("Gracias " + user + " te contactaremos cuanto antes via mail");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label></label>
        <input 
          type="text" 
          placeholder="Ingrese su Nombre" 
          value={user} 
          onChange={handleUserChange} 
        />
        {userError && <div className="error">{userError}</div>}
      </div>
      <div>
        <label></label>
        <input 
          type="email" 
          placeholder="Ingrese su Correo" 
          value={email} 
          onChange={handleEmailChange} 
        />
      </div>
      <button type="submit">Enviar</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Form;
