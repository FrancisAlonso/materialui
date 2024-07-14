import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import coverImage from './img/cover.jpg'; // Asegúrate de tener una imagen de portada en esta ruta

const CoverImage = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '30vh', sm: '40vh', md: '50vh' }, // Altura responsiva
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: { xs: '10px', sm: '15px', md: '20px' }, // Padding responsivo
          borderRadius: '5px',
        }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' } // Tamaño de fuente responsivo
          }}
        >
          Calidad y Confianza en Cada Producto
        </Typography>
      </Box>
    </Box>
  );
};

export default CoverImage;
