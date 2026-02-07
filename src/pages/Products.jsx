import React from "react";

export default function Products() {
    const products = [products, setProducts] = useState([
        { id: 1, name: "Produto 1", price: 100 },
        { id: 2, name: "Produto 2", price: 200 },
        { id: 3, name: "Produto 3", price: 300 },
    ]);
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800">Página de Produtos</h1>
        </div>
    );
}