import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const [categories] = useState([
        { id: 101, name: "Laptops", items: 24, desc: "Equipos portátiles" },
        { id: 102, name: "Periféricos", items: 156, desc: "Teclados, mouses, auriculares" },
        { id: 103, name: "Monitores", items: 42, desc: "Pantallas LED/IPS" },
        { id: 104, name: "Componentes", items: 310, desc: "Hardware interno" },
    ]);

    return (
        <div className="screen-container">
            <div className="header-actions">
                <h2>Categorías</h2>
                <Link to="/categories/create"><button className="btn-primary">➕ Nueva Categoría</button></Link>
            </div>
            <table className="data-table">
                <thead><tr><th>ID</th><th>Nombre</th><th>Descripción</th><th>Productos Vinculados</th><th>Acciones</th></tr></thead>
                <tbody>
                    {categories.map((c) => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td style={{fontWeight:'bold', color:'#3b82f6'}}>{c.name}</td>
                            <td>{c.desc}</td>
                            <td>{c.items} productos</td>
                            <td><button className="btn-icon">✏️</button><button className="btn-icon" style={{color:'#ef4444'}}>🗑️</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default CategoryList;