// src/routes/index.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importe suas páginas
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import Chat from '../pages/Chat.jsx';
import NotFound from '../pages/NotFound.jsx';
import Products from '../pages/Products.jsx';
import Profile from '../pages/Profile.jsx';
//import ProductDetail from '../pages/ProductDetail';
//import Cart from '../pages/Cart';
//import Sell from '../pages/Sell';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Rota principal */}
            <Route path="/" element={<Home />} />
            
            {/* Rotas de autenticação */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Outras rotas */}
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
            {/* 
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            
            <Route path="/sell" element={<Sell />} /> */}

            {/* Rota para página não encontrada */}
            <Route path="*" element={<NotFound />} />
            
            
        </Routes>
    );
};

export default AppRoutes;