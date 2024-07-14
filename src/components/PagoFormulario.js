// PagoFormulario.js
import React, { useState } from 'react';
import axios from 'axios';

const PagoFormulario = () => {
  const [monto, setMonto] = useState('');
  const [respuesta, setRespuesta] = useState(null);

  const handlePago = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/pagar', { monto });
      setRespuesta(response.data);
    } catch (error) {
      console.error('Error al procesar el pago:', error);
    }
  };

  return (
    <div>
      <h2>Formulario de Pago</h2>
      <form onSubmit={handlePago}>
        <label>
          Monto:
          <input
            type="text"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
        </label>
        <button type="submit">Pagar</button>
      </form>
      {respuesta && (
        <div>
          <h3>Respuesta:</h3>
          <p>Token de la Transacción: {respuesta.token}</p>
          <p>Código de Autorización: {respuesta.authorizationCode}</p>
        </div>
      )}
    </div>
  );
};

export default PagoFormulario;
