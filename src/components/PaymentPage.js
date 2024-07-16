import React, { useState } from 'react';
import { Typography, Button, TextField, Grid, Box, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const PaymentPage = ({ cart, total, handleClose }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Lógica de manejo de pago
  };

  const iva = total * 0.19; // IVA chileno del 19%
  const totalConIva = total + iva;

  return (
    <Box className="payment-page">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="h6">Detalles de la Compra</Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Productos:</Typography>
          <Box sx={{ maxHeight: '200px', overflowY: 'auto' }}>
            {cart.map((item, index) => (
              <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0' }}>
                <Typography variant="body2">{item.name}</Typography>
                <Typography variant="body2">${item.price.toFixed(2)}</Typography>
              </Box>
            ))}
          </Box>
          <Typography variant="subtitle1" sx={{ marginTop: 2 }}>Total: ${total.toFixed(2)}</Typography>
          <Typography variant="subtitle1">IVA (19%): ${iva.toFixed(2)}</Typography>
          <Typography variant="h6">Total con IVA: ${totalConIva.toFixed(2)}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Métodos de Pago:</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {['Webpay', 'Mach', 'Efectivo'].map((method) => (
              <Button
                key={method}
                variant={selectedPaymentMethod === method ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => handlePaymentMethodSelect(method)}
                fullWidth
              >
                {method}
              </Button>
            ))}
          </Box>
          <form onSubmit={handleFormSubmit} style={{ marginTop: '16px' }}>
            <TextField
              label="Nombre Completo"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Correo Electrónico"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Realizar Pago
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentPage;
