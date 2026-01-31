import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Categories from './components/Categories.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="App">
      {/* Navbar no topo da página */}
      <Navbar />
      <Categories />
      
      
      {/* Conteúdo principal da sua aplicação */}
      <main>
        <Home />
        {/* Outros componentes aqui */}
      </main>
      {/* Footer no final da página */}
      <Footer />
    </div>
  );
}


export default App
