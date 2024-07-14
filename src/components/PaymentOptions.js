import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Divider, Button, Box } from '@mui/material';

const PaymentOptions = ({ cart, total, handleClose }) => {
  const handlePayment = (method) => {
    // Aquí puedes implementar la lógica para procesar el pago según el método seleccionado
    console.log(`Processing payment with method: ${method}`);
    // Simplemente para el ejemplo, cerramos la ventana emergente después de procesar el pago
    handleClose();
  };

  return (
    <Paper sx={{ width: 300, padding: 2, marginTop: 4, zIndex: 1500 }}>
      <Typography variant="h6" gutterBottom>
        Opciones de Pago
      </Typography>
      <List>
        {/* Aquí puedes agregar diferentes métodos de pago */}
        <ListItem button onClick={() => handlePayment('Tarjeta de Crédito')}>
          <ListItemText primary="Tarjeta de Crédito" />
        </ListItem>
        <ListItem button onClick={() => handlePayment('PayPal')}>
          <ListItemText primary="PayPal" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary={`Total: $${total.toFixed(2)}`} />
        </ListItem>
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Cerrar
        </Button>
      </Box>
    </Paper>
  );
};

export default PaymentOptions;
