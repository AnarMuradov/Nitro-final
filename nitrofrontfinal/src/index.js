import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import WishlistProvider from './context/wishlistContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WishlistProvider>
    <HelmetProvider>
   <App />
   </HelmetProvider>
    </WishlistProvider>
  </React.StrictMode>
);

