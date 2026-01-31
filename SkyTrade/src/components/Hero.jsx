import React from 'react';

const Hero = () => {
    return (
        <section>
            <div 
                className="w-full border-b min-h-[500px] md:min-h-[600px] relative"
                style={{ 
                    backgroundImage: "url('/images/banners/best-sellers.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Overlay para controlar opacidade */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="relative z-10">
                    <div className="container mx-auto px-4 py-10 md:py-16">
                        <div className="max-w-3xl mx-auto text-center">
                            
                            {/* Título */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Pronto para ser um <br />
                                <span className="text-blue-600">paraquedista?</span>
                            </h1>
                            
                            {/* Subtítulo */}
                            <p className="text-gray-700 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                                Milhares de pessoas já estão vendendo seus equipamentos usados. Junte-se à comunidade!
                            </p>
                            
                            {/* Botões */}
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button className="bg-blue-600 hover:bg-blue-200 text-white hover:text-blue-600 font-bold py-4 px-10 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg hover:scale-105">
                                    Vender agora
                                </button>
                                <button className="bg-white hover:bg-blue-600 hover:text-white border-2 border-blue-600 font-bold py-4 px-10 rounded-lg text-lg transition-colors duration-300 hover:shadow-lg hover:scale-105">
                                    Descubra como funciona
                                </button>
                            </div>
                            
                            {/* Estatísticas */}
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                                    <div className="text-center">
                                        <div className="text-3xl md:text-4xl font-bold text-blue-600 animate-bounce">+121K</div>
                                        <div className="text-gray-700">Itens vendidos</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl md:text-4xl font-bold text-blue-600 animate-bounce">+52K</div>
                                        <div className="text-gray-700">Vendedores ativos</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl md:text-4xl font-bold text-blue-600 animate-bounce">+99,7%</div>
                                        <div className="text-gray-700">Satisfação</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;