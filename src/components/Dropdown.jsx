import React, { useState, useRef, useEffect } from 'react';

// Componente do Dropdown do Perfil
const UserDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Fechar dropdown ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const menuItems = [
        { icon: '👤', label: 'Perfil', href: '/profile' },
        //{ icon: '👥', label: 'Convidar amigos', href: '/convidar' },
        { icon: '⚙️', label: 'Configurações', href: '/settings' },
        //{ icon: '🎨', label: 'Personalização', href: '/personalizacao' },
        { icon: '💰', label: 'Saldo', value: 'R$ 0,00', href: '/saldo' },
        { icon: '📦', label: 'Os meus pedidos', href: '/pedidos' },
        { icon: '❤️', label: 'Favoritos', href: '/favoritos' },
        { icon: '🚪', label: 'Sair', href: '/logout', isLogout: true },
    ];

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Botão do usuário */}
            <button
                className="p-2 rounded-md text-xl text-gray-700 hover:text-blue-600 hover:bg-gray-300 transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                <img src="/images/icons/user.svg" alt="Ícone perfil" className="h-6 w-6" />
            </button>

            {/* Dropdown */}
            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    
                    {/* Header do dropdown */}
                    <div className="px-4 py-3 border-b">
                        <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">U</span>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900 text-lg">Usuário</p>
                                <p className="text-sm text-gray-500">Bem-vindo de volta!</p>
                            </div>
                        </div>
                    </div>

                    {/* Itens do menu */}
                    <div className="py-2 text-sm">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className={`flex items-center justify-between px-4 py-3 hover:bg-gray-50 ${item.isLogout ? 'border-t mt-2' : ''}`}
                                onClick={() => setIsDropdownOpen(false)}
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-xl">{item.icon}</span>
                                    <span className={`font-medium ${item.isLogout ? 'text-red-600' : 'text-gray-700'}`}>
                                        {item.label}
                                    </span>
                                </div>
                                {item.value && (
                                    <span className="font-bold text-green-600">{item.value}</span>
                                )}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;