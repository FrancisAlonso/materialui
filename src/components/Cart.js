import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Divider, Box, IconButton, Button } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const Cart = ({ cart, total, handleHideCart, handleGoToPay }) => {
  return (
    <Paper sx={{ width: 300, maxHeight: '80vh', overflowY: 'auto', backgroundColor: 'background.paper', boxShadow: 3, padding: 2, borderRadius: 2, position: 'fixed', top: 16, right: 16 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 1 }}>
        <Typography variant="h6">Carrito de Compras</Typography>
        <IconButton onClick={handleHideCart} size="small">
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {cart.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.name} secondary={`$${item.price.toFixed(2)}`} />
          </ListItem>
        ))}
        <Divider />
        <ListItem>
          <ListItemText primary="Total" secondary={`$${total.toFixed(2)}`} />
        </ListItem>
      </List>
      <Button variant="contained" color="primary" onClick={handleGoToPay} fullWidth>
        Ir a Pagar
      </Button>
    </Paper>
  );
};

export default Cart;
