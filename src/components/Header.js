// src/components/Header.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Grid, IconButton, Badge, Button, Box, InputBase, Paper, List, ListItem, ListItemText, ListItemAvatar, Avatar, Popper } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import img from '../img/logo.png'; // Ajusta la ruta según la ubicación de tu imagen

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = ({ cartCount, handleToggleCartVisibility, handleCategoryClick, searchTerm, handleSearchChange, searchResults, handleCategoryClickFromSearch }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSearchFocus = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={2} sm={4}>
              <Typography variant="h6" noWrap component="div">
                <img src={img} alt="Logo" style={{ height: '40px' }} />
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button onClick={() => handleCategoryClick('Abarrotes')} sx={{ color: 'white' }}>
                Abarrotes
              </Button>
              <Button onClick={() => handleCategoryClick('Frutas y Verduras')} sx={{ color: 'white' }}>
                Frutas y Verduras
              </Button>
              <Button onClick={() => handleCategoryClick('Congelados')} sx={{ color: 'white' }}>
                Congelados
              </Button>
            </Grid>
            <Grid item xs={4} sm={4} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', position: 'relative' }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Buscar…"
                  inputProps={{ 'aria-label': 'search' }}
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={handleSearchFocus}
                />
              </Search>
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
              {searchTerm && (
                <Popper
                  open={Boolean(searchResults.length)}
                  anchorEl={anchorEl}
                  placement="bottom-start"
                  sx={{ zIndex: 2000, width: 'auto' }}
                >
                  <Paper className="search-results">
                    <List>
                      {searchResults.map((product, index) => (
                        <ListItem button key={index} onClick={() => handleCategoryClickFromSearch(product.category)}>
                          <ListItemAvatar>
                            <Avatar src={require(`../img/${product.name.toLowerCase()}.jpg`)} />
                          </ListItemAvatar>
                          <ListItemText primary={product.name} secondary={`$${product.price}`} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Popper>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
