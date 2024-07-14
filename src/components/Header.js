// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Button, Box, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../img/logo.png';

const Header = ({ cartCount, handleToggleCartVisibility, handleCategoryClick }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={2} sm={4}>
            <Typography variant="h6" noWrap component="div">
              <img src={logo} alt="Logo" style={{ height: '40px' }} />
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            {/* Aquí puedes agregar la barra de búsqueda */}
          </Grid>
          <Grid item xs={4} sm={4} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <IconButton color="inherit" onClick={handleToggleCartVisibility}>
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
      <Toolbar sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', backgroundColor: 'primary.main' }}>
        <Button color="inherit" onClick={() => handleCategoryClick('Abarrotes')}>Abarrotes</Button>
        <Button color="inherit" onClick={() => handleCategoryClick('Frutas y Verduras')}>Frutas y Verduras</Button>
        <Button color="inherit" onClick={() => handleCategoryClick('Congelados')}>Congelados</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
