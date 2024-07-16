import React from 'react';
import { Box, Paper, Typography, Grid, Button, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const CategoryMenu = ({ category, products, onClose, onAddToCart }) => {
  return (
    <Paper className="category-menu">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 1, borderBottom: '1px solid #ccc' }}>
        <Typography variant="h6" className="category-menu-title">{category}</Typography>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>
      <Grid container spacing={3} sx={{ padding: 2 }}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ padding: 2 }}>
              <img src={require(`../img/${product.name.toLowerCase()}.jpg`)} alt={product.name} style={{ width: '100%', height: 'auto' }} />
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2">{product.description}</Typography>
              <Typography variant="body1">${product.price.toFixed(2)}</Typography>
              <Button variant="contained" color="primary" onClick={() => onAddToCart(product)}>
                Añadir al carrito
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default CategoryMenu;
