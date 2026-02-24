import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Dados simulados do produto (baseados na estrutura do Vinted)
    useEffect(() => {
        // Simular busca de dados da API
        setTimeout(() => {
            setProduct({
                id: id,
                title: "Casco L52. Poco uso. No está nuevo ni con etiquetas",
                price: 25.00,
                originalPrice: 45.00,
                discount: 44,
                description: "Casco L52 en buen estado. Poco uso. Pequeños detalles normales por el uso. Se envía bien embalado. Cualquier duda preguntad.",
                condition: "Bom estado",
                brand: "L52",
                size: "Único",
                color: "Preto",
                material: "Policarbonato",
                year: 2022,
                location: "Espanha",
                views: 342,
                likes: 18,
                seller: {
                    id: 123,
                    name: "carlos_m",
                    avatar: "C",
                    rating: 4.8,
                    reviews: 156,
                    memberSince: "2021",
                    isOnline: true,
                    responseRate: 98,
                    responseTime: "em poucas horas"
                },
                images: [
                    <img src="../assets/images/banners/altimeters.jpg" alt="Altimeters Banner" className="w-full h-full object-cover rounded-lg"/>,
                    <img src="../assets/banners/altimeters.jpg" alt="Altimeters Banner" className="w-full h-full object-cover rounded-lg"/>,
                    <img src="../assets/banners/altimeters.jpg" alt="Altimeters Banner" className="w-full h-full object-cover rounded-lg"/>,
                    <img src="https://images.unsplash.com/photo-1572307480813-5e2e0b63a1b2?w=600&h=600&fit=crop&con=80" alt="Product Image 1" className="w-full h-full object-cover rounded-lg"/>,
                    <img src="https://images.unsplash.com/photo-1572307480813-5e2e0b63a1b2?w=600&h=600&fit=crop&rot=90" alt="Product Image 2" className="w-full h-full object-cover rounded-lg"/>
                ],
                shipping: {
                    methods: ["Envio RÁPIDO", "Envio padrão"],
                    price: 45.90,
                    freeFrom: 39.90
                },
                category: "Desporto",
                subcategory: "Equipamento Desportivo"
            });
            setIsLoading(false);
        }, 1000);
    }, [id]);

    const formatPrice = (price) => {
        return `€${price.toFixed(2)}`;
    };

    const handleLike = () => {
        setIsLiked(!isLiked);
        // Aqui você implementaria a chamada à API
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="mt-4 text-gray-600">A carregar artigo...</p>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Artigo não encontrado</h2>
                    <p className="text-gray-600 mt-2">O artigo que procuras pode ter sido removido.</p>
                    <Link to="/" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Voltar ao catálogo
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="mb-6 text-sm">
                    <ol className="flex items-center space-x-2 text-gray-500">
                        <li><Link to="/" className="hover:text-blue-600">Catálogo</Link></li>
                        <li><span className="mx-2">›</span></li>
                        <li><Link to={`/categoria/${product.category.toLowerCase()}`} className="hover:text-blue-600">{product.category}</Link></li>
                        <li><span className="mx-2">›</span></li>
                        <li className="text-gray-900 font-medium truncate">{product.title.substring(0, 30)}...</li>
                    </ol>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Coluna da esquerda - Imagens */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            {/* Imagem principal */}
                            <div className="aspect-square bg-gray-100">
                                <img
                                    src={product.images[selectedImage]}
                                    alt={product.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Miniaturas */}
                            <div className="p-4 border-t border-gray-200">
                                <div className="flex gap-3 overflow-x-auto pb-2">
                                    {product.images.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                                                selectedImage === index
                                                    ? 'border-blue-600 shadow-md'
                                                    : 'border-transparent hover:border-gray-300'
                                            }`}
                                        >
                                            <img src={img} alt="" className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coluna da direita - Informações */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
                            {/* Preço e like */}
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-3xl font-bold text-gray-900">
                                            {formatPrice(product.price)}
                                        </span>
                                        {product.originalPrice && (
                                            <>
                                                <span className="text-lg text-gray-500 line-through">
                                                    {formatPrice(product.originalPrice)}
                                                </span>
                                                <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                                                    -{product.discount}%
                                                </span>
                                            </>
                                        )}
                                    </div>
                                    {product.shipping.freeFrom && product.price >= product.shipping.freeFrom && (
                                        <p className="text-sm text-green-600 font-medium mt-1">
                                            🚚 Portes grátis
                                        </p>
                                    )}
                                </div>
                                <button
                                    onClick={handleLike}
                                    className={`p-3 rounded-full transition-colors ${
                                        isLiked
                                            ? 'bg-red-50 text-red-500'
                                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                    }`}
                                >
                                    <svg className="w-6 h-6" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Título */}
                            <h1 className="text-xl font-semibold text-gray-900 mb-4">
                                {product.title}
                            </h1>

                            {/* Botões de ação principais */}
                            <div className="space-y-3 mb-6">
                                <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Comprar
                                </button>
                                <button className="w-full py-3 bg-white border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                                    Enviar mensagem
                                </button>
                            </div>

                            {/* Informações do vendedor */}
                            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                                <span className="text-blue-600 font-bold text-lg">
                                                    {product.seller.avatar}
                                                </span>
                                            </div>
                                            {product.seller.isOnline && (
                                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                                            )}
                                        </div>
                                        <div>
                                            <Link to={`/membro/${product.seller.id}`} className="font-semibold text-gray-900 hover:text-blue-600">
                                                {product.seller.name}
                                            </Link>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="flex items-center text-sm text-gray-600">
                                                    ⭐ {product.seller.rating}
                                                </span>
                                                <span className="text-xs text-gray-400">•</span>
                                                <span className="text-sm text-gray-600">
                                                    {product.seller.reviews} opiniões
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-500">
                                        Membro desde {product.seller.memberSince}
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Responde {product.seller.responseTime}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                        <span>{product.seller.responseRate}% aceitação</span>
                                    </div>
                                </div>
                            </div>

                            {/* Detalhes do produto */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-900 mb-3">Detalhes</h3>
                                <dl className="grid grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <dt className="text-gray-500">Condição</dt>
                                        <dd className="text-gray-900 font-medium">{product.condition}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-gray-500">Marca</dt>
                                        <dd className="text-gray-900 font-medium">{product.brand}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-gray-500">Tamanho</dt>
                                        <dd className="text-gray-900 font-medium">{product.size}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-gray-500">Cor</dt>
                                        <dd className="text-gray-900 font-medium">{product.color}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-gray-500">Material</dt>
                                        <dd className="text-gray-900 font-medium">{product.material}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-gray-500">Ano</dt>
                                        <dd className="text-gray-900 font-medium">{product.year}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-gray-500">Localização</dt>
                                        <dd className="text-gray-900 font-medium">{product.location}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-gray-500">Visualizações</dt>
                                        <dd className="text-gray-900 font-medium">{product.views}</dd>
                                    </div>
                                </dl>
                            </div>

                            {/* Descrição */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-900 mb-3">Descrição</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Métodos de envio */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-900 mb-3">Métodos de envio</h3>
                                <div className="space-y-2">
                                    {product.shipping.methods.map((method, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                            </svg>
                                            <span className="flex-1 text-sm text-gray-700">{method}</span>
                                            <span className="text-sm font-medium text-gray-900">
                                                {method.includes('mão') ? 'Grátis' : `€${product.shipping.price.toFixed(2)}`}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Relatório */}
                            <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                Denunciar este artigo
                            </button>
                        </div>
                    </div>
                </div>

                {/* Secção "Artigos do membro" */}
                <div className="mt-12">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Outros artigos de {product.seller.name}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                                <div className="aspect-square bg-gray-100">
                                    <img src={`https://images.unsplash.com/photo-1572307480813-5e2e0b63a1b2?w=200&h=200&fit=crop&sig=${i}`} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="p-3">
                                    <p className="font-semibold text-gray-900">€{Math.floor(Math.random() * 50) + 10}.00</p>
                                    <p className="text-xs text-gray-500 truncate">Artigo {i}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Secção "Artigos semelhantes" */}
                <div className="mt-12 mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Artigos semelhantes</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                                <div className="aspect-square bg-gray-100">
                                    <img src={`https://images.unsplash.com/photo-1572307480813-5e2e0b63a1b2?w=200&h=200&fit=crop&sig=${i+10}`} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="p-3">
                                    <p className="font-semibold text-gray-900">€{Math.floor(Math.random() * 60) + 15}.00</p>
                                    <p className="text-xs text-gray-500 truncate">Artigo semelhante {i}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}