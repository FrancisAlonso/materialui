import React from 'react';
import { Paper, Box, Typography, IconButton, ListItemText, Divider, Button, TextField, Grid } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const PaymentPage = ({ cart, total, handleClose }) => {
  const iva = total * 0.19;
  const totalConIva = total + iva;

  return (
    <Paper className="payment-page">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 1, borderBottom: '1px solid #ccc', mb: 2 }}>
        <Typography variant="h6">Página de pago</Typography>
        <IconButton onClick={handleClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>Detalles de la Compra</Typography>
          <Box className="cart-items-container">
            {cart.map((item, index) => (
              <Box key={index} className="cart-item">
                <ListItemText primary={item.name} secondary={`$${item.price.toFixed(2)}`} />
              </Box>
            ))}
          </Box>
          <Divider />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body1">Total</Typography>
            <Typography variant="body1">${total.toFixed(2)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body1">IVA (19%)</Typography>
            <Typography variant="body1">${iva.toFixed(2)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6">Total con IVA</Typography>
            <Typography variant="h6">${totalConIva.toFixed(2)}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>Métodos de Pago</Typography>
          <Button variant="contained" color="primary" fullWidth sx={{ mb: 1 }}>Webpay</Button>
          <Button variant="contained" color="primary" fullWidth sx={{ mb: 1 }}>Mach</Button>
          <Button variant="contained" color="primary" fullWidth>Efectivo</Button>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>Detalles del Pago</Typography>
          <TextField fullWidth label="Nombre Completo" margin="normal" />
          <TextField fullWidth label="Correo Electrónico" margin="normal" />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Pagar</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PaymentPage;
