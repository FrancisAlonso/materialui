import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';

const items = [
  {
    image: 'image1.jpg', // Reemplaza con la ruta de tu imagen
    name: 'Lavalozas',
    description: 'Descripción del Producto 1',
    price: '$10.00'
  },
  {
    image: 'image2.jpg', // Reemplaza con la ruta de tu imagen
    name: 'Fideo,
    description: 'Descripción del Producto 2',
    price: '$20.00'
  },
  {
    image: 'image3.jpg', // Reemplaza con la ruta de tu imagen
    name: 'Producto 3',
    description: 'Descripción del Producto 3',
    price: '$30.00'
  }
];

const ProductCards = () => {
  return (
    <Grid container spacing={3}>
      {items.map((item, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt={item.name}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="h6" component="div">
                {item.price}
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                Añadir a Carrito
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductCards;
