import React, { useState } from 'react';

export default function Profile() {
    const [activeTab, setActiveTab] = useState('listings'); // 'listings' ou 'reviews'

    // Dados do usuário (simulados)
    const user = {
        username: 'cheede.g',
        name: 'cheede.g',
        location: 'Setúbal, Portugal',
        bio: '',
        avatar: 'https://via.placeholder.com/150/cccccc/969696?text=U', // Placeholder
        followers: 0,
        following: 0,
        isOnline: true,
        lastOnline: 'há 4 minutos',
        verifiedMethods: ['google', 'email'],
        memberSince: 'Membro recente'
    };

    // Produtos simulados (anúncios)
    const userListings = [
        { id: 1, title: 'Artigo Exemplo 1', price: 15.00, image: 'https://via.placeholder.com/300x200/eeeeee/969696?text=Produto+1', condition: 'Bom estado' },
        { id: 2, title: 'Artigo Exemplo 2', price: 25.50, image: 'https://via.placeholder.com/300x200/eeeeee/969696?text=Produto+2', condition: 'Como novo' },
        { id: 3, title: 'Artigo Exemplo 3', price: 8.00, image: 'https://via.placeholder.com/300x200/eeeeee/969696?text=Produto+3', condition: 'Usado' },
        { id: 4, title: 'Artigo Exemplo 4', price: 45.00, image: 'https://via.placeholder.com/300x200/eeeeee/969696?text=Produto+4', condition: 'Excelente' },
    ];

    // Opiniões simuladas (vazias por enquanto)
    const userReviews = [];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Cabeçalho com imagem de capa (simulada) */}
            <div className="h-48"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-12">
                {/* Card do Perfil */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Área da foto e informações principais */}
                    <div className="p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6">
                            {/* Foto de perfil */}
                            <div className="relative -mt-16 sm:mt-0">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
                                    <img
                                        src={user.avatar}
                                        alt={user.username}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {user.isOnline && (
                                    <span className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
                                )}
                            </div>

                            {/* Nome e estatísticas */}
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div>
                                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                            {user.name}
                                        </h1>
                                        <div className="flex items-center gap-2 mt-1 text-gray-600">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span className="text-sm">{user.location}</span>
                                            <span className="text-sm text-gray-400">•</span>
                                            <span className="text-sm text-green-600 font-medium">
                                                {user.lastOnline}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Botão Seguir */}
                                    <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                                        Editar Perfil
                                    </button>
                                </div>

                                {/* Estatísticas (seguidores/seguindo) */}
                                <div className="flex gap-6 mt-4">
                                    <div>
                                        <span className="font-bold text-gray-900">{user.followers}</span>
                                        <span className="text-gray-600 ml-1 text-sm">seguidores</span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-gray-900">{user.following}</span>
                                        <span className="text-gray-600 ml-1 text-sm">a seguir</span>
                                    </div>
                                </div>

                                {/* Informações verificadas */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {user.verifiedMethods.includes('google') && (
                                        <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                            </svg>
                                            Google
                                        </span>
                                    )}
                                    {user.verifiedMethods.includes('email') && (
                                        <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                            </svg>
                                            E-mail
                                        </span>
                                    )}
                                </div>

                                {/* Bio (se houver) */}
                                {user.bio && (
                                    <p className="mt-4 text-gray-700 border-t pt-4">{user.bio}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Abas de navegação (Anúncios / Opiniões) */}
                    <div className="border-t border-gray-200">
                        <div className="flex">
                            <button
                                onClick={() => setActiveTab('listings')}
                                className={`flex-1 py-4 text-sm font-medium text-center transition-colors ${
                                    activeTab === 'listings'
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Anúncios ({userListings.length})
                            </button>
                            <button
                                onClick={() => setActiveTab('reviews')}
                                className={`flex-1 py-4 text-sm font-medium text-center transition-colors ${
                                    activeTab === 'reviews'
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Opiniões ({userReviews.length})
                            </button>
                        </div>
                    </div>

                    {/* Conteúdo da aba ativa */}
                    <div className="p-6">
                        {activeTab === 'listings' && (
                            <div>
                                {userListings.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {userListings.map((item) => (
                                            <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-48 object-cover"
                                                />
                                                <div className="p-3">
                                                    <h3 className="font-medium text-gray-900 truncate">{item.title}</h3>
                                                    <p className="text-sm text-gray-600 mt-1">{item.condition}</p>
                                                    <p className="text-lg font-bold text-blue-600 mt-2">
                                                        €{item.price.toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-center text-gray-500 py-8">
                                        Este membro ainda não tem anúncios.
                                    </p>
                                )}
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div>
                                {userReviews.length > 0 ? (
                                    <div className="space-y-4">
                                        {/* Aqui você pode mapear as opiniões quando houver */}
                                    </div>
                                ) : (
                                    <p className="text-center text-gray-500 py-8">
                                        Ainda não há opiniões sobre este membro.
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}