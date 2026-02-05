// src/routes/index.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importe suas páginas
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
//import Register from '../pages/Register';
//import Products from '../pages/Products';
//import ProductDetail from '../pages/ProductDetail';
//import Cart from '../pages/Cart';
//import Profile from '../pages/Profile';
//import Sell from '../pages/Sell';

// Componente de rota não encontrada (opcional)
//import NotFound from '../pages/NotFound';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Rota principal */}
            <Route path="/" element={<Home />} />
            
            {/* Rotas de autenticação */}
            <Route path="/login" element={<Login />} />
            {/*<Route path="/register" element={<Register />} />*/}
            
            
        </Routes>
    );
};

export default AppRoutes;