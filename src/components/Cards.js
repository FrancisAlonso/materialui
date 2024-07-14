// src/components/Cards.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import lavalozas from '../img/lavalozas.jpg';
import fideos from '../img/fideos.jpg';
import super8 from '../img/super8.jpg';
import cocaCola from '../img/coca_cola.jpg';
import azucar from '../img/azucar.jpg';
import te from '../img/te.jpg';
import arroz from '../img/arroz.jpg';
import lechuga from '../img/lechuga.jpg';
import sandia from '../img/sandia.jpg';

const items = [
  {
    image: lavalozas,
    name: 'Lavaloza',
    description: 'Producto de limpieza para lavar platos y utensilios.',
    price: 10.00
  },
  {
    image: fideos,
    name: 'Fideos',
    description: 'Pasta de trigo de alta calidad.',
    price: 20.00
  },
  {
    image: super8,
    name: 'Super8',
    description: 'Delicioso snack de chocolate.',
    price: 30.00
  },
  {
    image: cocaCola,
    name: 'Coca Cola',
    description: 'Refresco carbonatado popular.',
    price: 10.00
  },
  {
    image: azucar,
    name: 'Azúcar',
    description: 'Azúcar granulada para endulzar tus comidas y bebidas.',
    price: 20.00
  },
  {
    image: te,
    name: 'Té',
    description: 'Hojas de té de alta calidad.',
    price: 30.00
  },
  {
    image: arroz,
    name: 'Arroz',
    description: 'Arroz blanco de grano largo.',
    price: 10.00
  },
  {
    image: lechuga,
    name: 'Lechuga',
    description: 'Fresca lechuga para ensaladas.',
    price: 20.00
  },
  {
    image: sandia,
    name: 'Sandía',
    description: 'Jugosa y dulce sandía.',
    price: 30.00
  }
];

const Cards = ({ handleAddToCart }) => {
  return (
    <Grid container spacing={3}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
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
                ${item.price.toFixed(2)}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '10px' }}
                onClick={() => handleAddToCart(item)}
              >
                Añadir a Carrito
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
