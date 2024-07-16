import React, { useState, useEffect } from 'react';
import { Snackbar, Alert, Typography, Container, Popper, Backdrop } from '@mui/material';
import TopBar from './components/TopBar';
import Header from './components/Header';
import CoverImage from './components/CoverImage';
import Cards from './components/Cards';
import Cart from './components/Cart';
import PaymentPage from './components/PaymentPage';
import CategoryMenu from './components/CategoryMenu';
import categories from './categories'; // Importa las categorías desde el nuevo archivo
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
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchAnchorEl, setSearchAnchorEl] = useState(null);

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

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    setSearchAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    if (searchTerm === '') {
      setSearchResults([]);
    } else {
      const results = categories.flatMap(category =>
        category.products
          .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(product => ({ ...product, category: category.name }))
      );
      setSearchResults(results);
    }
  }, [searchTerm]);

  const handleCategoryClickFromSearch = (categoryName) => {
    setActiveCategory(categoryName);
    setSearchTerm('');
    setSearchResults([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopBar />
        <Header
          cartCount={cart.length}
          handleToggleCartVisibility={handleToggleCartVisibility}
          handleCategoryClick={handleCategoryClick}
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
          searchResults={searchResults}
          handleCategoryClickFromSearch={handleCategoryClickFromSearch}
        />
        <CoverImage />
        <div className="offer-banner">
          <Typography variant="h4" className="offer-title">
            Ofertas
          </Typography>
        </div>
        <Container className={(showPaymentPage || activeCategory) ? 'blur-background' : ''}>
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
        {showPaymentPage && (
          <>
            <Backdrop open={showPaymentPage} sx={{ zIndex: 1600, color: '#fff' }} />
            <PaymentPage cart={cart} total={total} handleClose={() => setShowPaymentPage(false)} />
          </>
        )}
        {activeCategory && (
          <>
            <Backdrop open={activeCategory} sx={{ zIndex: 1400, color: '#fff' }} />
            <CategoryMenu
              category={activeCategory}
              products={categories.find(cat => cat.name === activeCategory)?.products || []}
              onClose={handleCloseCategory}
              onAddToCart={handleAddToCart}
            />
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
