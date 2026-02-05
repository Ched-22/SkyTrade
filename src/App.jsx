import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Categories from './components/Categories.jsx'
import Footer from './components/Footer.jsx'
import AppRoutes from './routes/index.jsx'

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar no topo da página */}
        <Navbar />
        <Categories />
        
        
        {/* Conteúdo principal da sua aplicação */}
        <main>
          <AppRoutes />
          {/* Outros componentes aqui */}
          
        </main>
        {/* Footer no final da página */}
        <Footer />
      </div>
    </Router>
  );
}


export default App
