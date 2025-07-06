import React from 'react';
import { Router, Route, Switch } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';

// Layout Components
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';

// Pages
import Home from './pages/Home';
import Landing from './pages/Landing';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import NotFound from './pages/not-found';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Router>
          <div className="App">
            <Header />
            <main className="main-content">
              <Switch>
                <Route path="/" component={Landing} />
                <Route path="/home" component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/product/:id" component={ProductDetail} />
                <Route path="/cart" component={Cart} />
                <Route path="/profile" component={Profile} />
                <Route path="/blog" component={Blog} />
                <Route component={NotFound} />
              </Switch>
            </main>
            <Footer />
          </div>
        </Router>
        <Toaster position="top-right" />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App; 