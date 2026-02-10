import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products] = useState([
        { id: 1, name: "Laptop HP Pavilion", price: "$1,200", stock: 15, category: "Laptops", status: "Active" },
        { id: 2, name: "Mouse Logitech G502", price: "$45", stock: 50, category: "Periféricos", status: "Active" },
        { id: 3, name: "Monitor Samsung 24'", price: "$180", stock: 8, category: "Monitores", status: "Low Stock" },
        { id: 4, name: "Teclado Mecánico Redragon", price: "$65", stock: 20, category: "Periféricos", status: "Active" },
        { id: 5, name: "Silla Gamer X-Pro", price: "$250", stock: 0, category: "Mobiliario", status: "Out of Stock" },
    ]);

    return (
        <div className="screen-container">
            <div className="header-actions">
                <h2>Gestión de Productos</h2>
                <Link to="/products/create">
                    <button className="btn-primary">➕ Nuevo Producto</button>
                </Link>
            </div>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>ID</th><th>Producto</th><th>Categoría</th><th>Precio</th><th>Stock</th><th>Estado</th><th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td style={{fontWeight:'bold', color:'white'}}>{p.name}</td>
                            <td>{p.category}</td>
                            <td>{p.price}</td>
                            <td>{p.stock} u.</td>
                            <td>
                                <span style={{
                                    padding:'4px 8px', borderRadius:'4px', fontSize:'0.8rem',
                                    background: p.status === 'Active' ? '#22c55e20' : '#ef444420',
                                    color: p.status === 'Active' ? '#22c55e' : '#ef4444'
                                }}>{p.status}</span>
                            </td>
                            <td>
                                <Link to={`/products/edit/${p.id}`}><button className="btn-icon">✏️</button></Link>
                                <button className="btn-icon" style={{color:'#ef4444'}}>🗑️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default ProductList;