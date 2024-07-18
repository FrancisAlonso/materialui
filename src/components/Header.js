import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  IconButton,
  Badge,
  Button,
  Box,
  InputBase,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Popper,
  Drawer,
  ListSubheader,
  Divider,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha, useTheme } from '@mui/material/styles';
import img from '../img/logo.png'; // Ajusta la ruta según la ubicación de tu imagen

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.mode === 'light' ? alpha(theme.palette.common.white, 0.15) : '#1976d2',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'light' ? alpha(theme.palette.common.white, 0.25) : '#2196f3',
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
      width: '30ch', // Aumentar el ancho para hacerlo más grande
    },
  },
}));

const Header = ({
  cartCount,
  handleToggleCartVisibility,
  handleCategoryClick,
  searchTerm,
  handleSearchChange,
  searchResults,
  handleCategoryClickFromSearch,
}) => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSearchFocus = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const toggleDrawer = (open) => (event) => {
    if (event && (event.type === 'keydown' || event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
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
              <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                <Button onClick={() => handleCategoryClick('Abarrotes')} sx={{ color: 'white', mx: 1 }}>
                  Abarrotes
                </Button>
                <Button onClick={() => handleCategoryClick('Frutas y Verduras')} sx={{ color: 'white', mx: 1 }}>
                  Frutas y Verduras
                </Button>
                <Button onClick={() => handleCategoryClick('Congelados')} sx={{ color: 'white', mx: 1 }}>
                  Congelados
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                position: 'relative',
                margin: 'auto', // Centra horizontalmente el buscador
              }}
            >
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
                <IconButton color="inherit" onClick={toggleDrawer(true)}>
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

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListSubheader>Categorías</ListSubheader>
          <Divider />
          <ListItem button onClick={() => handleCategoryClick('Abarrotes')}>
            <ListItemText primary="Abarrotes" />
          </ListItem>
          <ListItem button onClick={() => handleCategoryClick('Frutas y Verduras')}>
            <ListItemText primary="Frutas y Verduras" />
          </ListItem>
          <ListItem button onClick={() => handleCategoryClick('Congelados')}>
            <ListItemText primary="Congelados" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
