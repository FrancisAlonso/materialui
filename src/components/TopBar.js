import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function TopBar() {
  return (
    <AppBar position="static" color="default" sx={{ height: '40px', justifyContent: 'center' }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Button color="inherit" sx={{ margin: '0 10px' }}>Ayuda</Button>
        <Button color="inherit" sx={{ margin: '0 10px' }}>Contacto</Button>
        <Button color="inherit" sx={{ margin: '0 10px' }}>Dirección del Local</Button>
      </Toolbar>
    </AppBar>
  );
}
