// src/components/Cards.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cards = () => {
    // Estado para controlar produtos curtidos
    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Tênis Nike Air Force 1",
            price: 399.90,
            originalPrice: 649.90,
            discount: 38,
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
            seller: "joaosilva",
            location: "São Paulo, SP",
            likes: 156,
            condition: "Novo",
            category: "Calçado",
            isLiked: false,
            isNew: true,
            shipping: "Grátis"
        },
        {
            id: 2,
            title: "Jaqueta de Couro Legítima",
            price: 749.50,
            originalPrice: 1499.90,
            discount: 50,
            image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
            seller: "moda_vintage",
            location: "Rio de Janeiro, RJ",
            likes: 89,
            condition: "Excelente",
            category: "Casacos",
            isLiked: true,
            isNew: false,
            shipping: "R$ 19,90"
        },
        {
            id: 3,
            title: "iPhone 13 Pro 256GB",
            price: 3999.00,
            originalPrice: 5795.00,
            discount: 31,
            image: "https://images.unsplash.com/photo-1632661674596-df8be070a6c5?w=400&h=400&fit=crop",
            seller: "techbrasil",
            location: "Porto Alegre, RS",
            likes: 342,
            condition: "Como novo",
            category: "Tecnologia",
            isLiked: false,
            isNew: false,
            shipping: "Grátis"
        },
        {
            id: 4,
            title: "Mochila North Face",
            price: 325.00,
            originalPrice: 600.00,
            discount: 46,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
            seller: "outdoor_lover",
            location: "Florianópolis, SC",
            likes: 67,
            condition: "Bom estado",
            category: "Acessórios",
            isLiked: false,
            isNew: true,
            shipping: "R$ 14,90"
        },
        {
            id: 5,
            title: "Relógio Casio Vintage 1980",
            price: 600.00,
            originalPrice: 1250.00,
            discount: 52,
            image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop",
            seller: "vintage_collector",
            location: "Belo Horizonte, MG",
            likes: 234,
            condition: "Vintage",
            category: "Acessórios",
            isLiked: true,
            isNew: false,
            shipping: "Grátis"
        },
        {
            id: 6,
            title: "Vestido Floral de Verão Zara",
            price: 124.95,
            originalPrice: 249.95,
            discount: 50,
            image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=400&h=500&fit=crop",
            seller: "fashion_girl",
            location: "Salvador, BA",
            likes: 178,
            condition: "Novo com etiqueta",
            category: "Vestidos",
            isLiked: false,
            isNew: true,
            shipping: "R$ 9,90"
        },
        {
            id: 7,
            title: "PlayStation 5 + 2 Comandos",
            price: 2249.95,
            originalPrice: 2749.95,
            discount: 18,
            image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
            seller: "gamer_pro",
            location: "Brasília, DF",
            likes: 412,
            condition: "Excelente",
            category: "Consolas",
            isLiked: false,
            isNew: false,
            shipping: "Grátis"
        },
        {
            id: 8,
            title: "Bicicleta Urbana Fixie",
            price: 1445.00,
            originalPrice: 2250.00,
            discount: 36,
            image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&h=300&fit=crop",
            seller: "bike_city",
            location: "Curitiba, PR",
            likes: 123,
            condition: "Muito bom",
            category: "Desporto",
            isLiked: false,
            isNew: true,
            shipping: "R$ 75,00"
        },
        {
            id: 9,
            title: "Sofá 3 Lugares Cinza Claro",
            price: 1995.00,
            originalPrice: 3495.00,
            discount: 43,
            image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&h=300&fit=crop",
            seller: "home_design",
            location: "Campinas, SP",
            likes: 56,
            condition: "Usado",
            category: "Mobília",
            isLiked: false,
            isNew: false,
            shipping: "R$ 149,90"
        },
        {
            id: 10,
            title: "Câmera Canon EOS 250D",
            price: 2125.00,
            originalPrice: 3495.00,
            discount: 39,
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
            seller: "foto_mania",
            location: "São Paulo, SP",
            likes: 267,
            condition: "Como novo",
            category: "Fotografia",
            isLiked: true,
            isNew: false,
            shipping: "Grátis"
        },
        {
            id: 11,
            title: "Conjunto de Malas de Viagem 3 Peças",
            price: 649.95,
            originalPrice: 1299.95,
            discount: 50,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
            seller: "travel_pro",
            location: "Rio de Janeiro, RJ",
            likes: 89,
            condition: "Novo",
            category: "Viagem",
            isLiked: false,
            isNew: true,
            shipping: "Grátis"
        },
        {
            id: 12,
            title: "AirPods Pro 2ª Geração",
            price: 945.00,
            originalPrice: 1395.00,
            discount: 32,
            image: "https://images.unsplash.com/photo-1591378250274-7c6c8b6c0c3b?w=400&h=400&fit=crop",
            seller: "apple_fan",
            location: "Belo Horizonte, MG",
            likes: 312,
            condition: "Excelente",
            category: "Áudio",
            isLiked: false,
            isNew: false,
            shipping: "R$ 14,90"
        }
    ]);

    // Função para alternar like
    const toggleLike = (productId) => {
        setProducts(products.map(product => 
            product.id === productId 
                ? { 
                    ...product, 
                    likes: product.isLiked ? product.likes - 1 : product.likes + 1, 
                    isLiked: !product.isLiked 
                }
                : product
        ));
    };

    // Formatar preço em Real Brasileiro (R$)
    const formatPrice = (price) => {
        // Para números inteiros, mostrar sem centavos
        if (price % 1 === 0) {
            return `R$ ${price.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}`;
        }
        // Para números com centavos, mostrar com 2 casas decimais
        return `R$ ${price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    // Filtros de categoria
    const categories = ["Todos", "Calçado", "Vestuário", "Tecnologia", "Casa", "Desporto", "Acessórios"];
    const [activeFilter, setActiveFilter] = useState("Todos");

    // Filtrar produtos por categoria
    const filteredProducts = activeFilter === "Todos" 
        ? products 
        : products.filter(product => product.category === activeFilter);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Header com título e filtros */}
            <div className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Descobre as melhores peças em segunda mão
                </h1>
                <p className="text-gray-600 mb-8">
                    Mais de 10.000 artigos à venda • Entrega rápida • Compras seguras
                </p>
                
                {/* Filtros de categoria estilo Vinted */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                activeFilter === category
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-600'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                
                {/* Contador de produtos */}
                <div className="flex items-center justify-between mt-6">
                    <p className="text-gray-700">
                        <span className="font-semibold">{filteredProducts.length}</span> produtos encontrados
                    </p>
                    <div className="flex items-center gap-4">
                        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Ordenar por: Relevância</option>
                            <option>Mais recentes</option>
                            <option>Preço: mais baixo primeiro</option>
                            <option>Preço: mais alto primeiro</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Grid de produtos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <div 
                        key={product.id} 
                        className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group cursor-pointer"
                    >
                        {/* Container da imagem */}
                        <div className="relative overflow-hidden">
                            {/* Imagem do produto */}
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            
                            {/* Badge de desconto */}
                            {product.discount && (
                                <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                    -{product.discount}%
                                </div>
                            )}
                            
                            {/* Badge de condição */}
                            <div className="absolute top-3 right-3">
                                <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                                    {product.condition}
                                </span>
                            </div>
                            
                            {/* Badge Novo */}
                            {product.isNew && (
                                <div className="absolute top-12 right-3">
                                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                        NOVO
                                    </span>
                                </div>
                            )}
                            
                            {/* Botão de like */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleLike(product.id);
                                }}
                                className={`absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                                    product.isLiked
                                        ? 'bg-white/90 text-red-500 shadow-lg'
                                        : 'bg-white/80 text-gray-500 hover:bg-white hover:text-red-500'
                                }`}
                            >
                                <svg 
                                    className={`w-5 h-5 ${product.isLiked ? 'fill-red-500' : ''}`} 
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                            </button>
                            
                            {/* Overlay hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                        </div>

                        {/* Informações do produto */}
                        <div className="p-4">
                            {/* Preço */}
                            <div className="mb-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl font-bold text-gray-900">
                                        {formatPrice(product.price)}
                                    </span>
                                    {product.originalPrice && (
                                        <span className="text-sm text-gray-500 line-through">
                                            {formatPrice(product.originalPrice)}
                                        </span>
                                    )}
                                </div>
                                {product.shipping && (
                                    <p className="text-sm text-green-600 font-medium mt-1">
                                        {product.shipping === "Grátis" ? "🚚 Entrega grátis" : `Entrega: ${product.shipping}`}
                                    </p>
                                )}
                            </div>

                            {/* Título do produto */}
                            <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 h-12 leading-snug">
                                {product.title}
                            </h3>

                            {/* Informações do vendedor e localização */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <span className="text-blue-600 font-bold text-sm">
                                            {product.seller.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">@{product.seller}</p>
                                        <p className="text-xs text-gray-500 flex items-center gap-1">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                            </svg>
                                            {product.location}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Likes */}
                                <div className="flex items-center gap-1">
                                    <svg className={`w-4 h-4 ${product.isLiked ? 'fill-red-500' : 'fill-gray-400'}`} viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                    </svg>
                                    <span className="text-sm text-gray-600">{product.likes}</span>
                                </div>
                            </div>

                            {/* Botão de ação */}
                            <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                                Adicionar ao carrinho
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botão para carregar mais */}
            <div className="text-center mt-12">
                <button className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200">
                    Carregar mais produtos
                </button>
            </div>

            {/* Banner promocional estilo Vinted */}
            <div className="mt-16  rounded-2xl p-8 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Vende o que já não usas!</h2>
                    <p className="text-xl mb-6 opacity-90 text-gray-700">
                        Ganha dinheiro extra e dá uma nova vida às tuas peças
                    </p>
                    <Link to="/sell">
                        <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-700 hover:text-white transition-colors duration-200 hover:scale-105">
                            Começar a vender
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;