import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Snackbar, Alert, Typography, Container, Popper } from '@mui/material';
import TopBar from './components/TopBar';
import Header from './components/Header';
import CoverImage from './components/CoverImage';
import Cards from './components/Cards';
import Cart from './components/Cart';
import PaymentPage from './components/PaymentPage';
import CategoryMenu from './components/CategoryMenu';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

const App = () => {
  const [cart, setCart] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [addedItem, setAddedItem] = useState(null);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    setAddedItem(item);
    setOpenSnackbar(true);
    setIsCartVisible(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleToggleCartVisibility = (event) => {
    setAnchorEl(event.currentTarget);
    setIsCartVisible(!isCartVisible);
  };

  const handleHideCart = () => {
    setIsCartVisible(false);
  };

  const handleGoToPay = () => {
    setShowPaymentPage(true);
  };

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
  };

  const handleCloseCategory = () => {
    setActiveCategory(null);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const categories = [
    {
      name: 'Abarrotes', products: [
        { name: 'Arroz', price: 10, description: 'Arroz blanco de grano largo.' },
        { name: 'Fideos', price: 20, description: 'Pasta de trigo de alta calidad.' },
        { name: 'Atun', price: 30, description: 'Atun en lata tipo salmon' },
        { name: 'Aceite', price: 40, description: 'Aceite vegetal para cocinar.' },
        { name: 'Sal', price: 50, description: 'Sal de mesa.' },
        { name: 'Harina', price: 60, description: 'Harina de trigo para todo uso.' },
      ]
    },
    {
      name: 'Frutas y Verduras', products: [
        { name: 'Manzana', price: 10, description: 'Manzana roja y fresca.' },
        { name: 'Banana', price: 20, description: 'Plátano maduro.' },
        { name: 'Naranja', price: 30, description: 'Naranja jugosa.' },
        { name: 'Zanahoria', price: 40, description: 'Zanahoria fresca.' },
        { name: 'Espinaca', price: 50, description: 'Hojas de espinaca fresca.' },
        { name: 'Brócoli', price: 60, description: 'Brócoli fresco.' },
      ]
    },
    {
      name: 'Congelados', products: [
        { name: 'Helado', price: 10, description: 'Helado de vainilla.' },
        { name: 'Pizza', price: 20, description: 'Pizza congelada.' },
        { name: 'Pollo', price: 30, description: 'Piezas de pollo congelado.' },
        { name: 'Vegetales_Mixtos', price: 40, description: 'Mezcla de vegetales congelados.' },
        { name: 'Papas_Fritas', price: 50, description: 'Papas fritas congeladas.' },
        { name: 'Mariscos', price: 60, description: 'Mariscos congelados.' },
      ]
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Router basename="/materialui">
        <div className="App">
          <TopBar />
          <Header cartCount={cart.length} handleToggleCartVisibility={handleToggleCartVisibility} handleCategoryClick={handleCategoryClick} />
          <CoverImage />
          <div className="offer-banner">
            <Typography variant="h4" className="offer-title">
              Ofertas
            </Typography>
          </div>
          <Container>
            <Cards handleAddToCart={handleAddToCart} />
          </Container>

          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
              {addedItem && `${addedItem.name} ha sido añadido al carrito`}
            </Alert>
          </Snackbar>
          <Popper
            open={isCartVisible}
            anchorEl={anchorEl}
            placement="bottom-end"
            sx={{ zIndex: 1500 }} // Carrito visible sobre los menús de categoría
          >
            <Cart cart={cart} total={total} handleHideCart={handleHideCart} handleGoToPay={handleGoToPay} />
          </Popper>
          {showPaymentPage && <PaymentPage cart={cart} total={total} handleClose={() => setShowPaymentPage(false)} />}

          {activeCategory && (
            <CategoryMenu
              category={activeCategory}
              products={categories.find(cat => cat.name === activeCategory)?.products || []}
              onClose={handleCloseCategory}
              onAddToCart={handleAddToCart}
            />
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
