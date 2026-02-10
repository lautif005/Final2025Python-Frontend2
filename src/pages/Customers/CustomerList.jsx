import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CustomerList = () => {
    const [customers] = useState([
        { id: 1, name: "Juan Pérez", email: "juan.perez@gmail.com", phone: "+54 9 261 555-0101", city: "Mendoza" },
        { id: 2, name: "María González", email: "maria.g@hotmail.com", phone: "+54 9 11 444-2222", city: "Buenos Aires" },
        { id: 3, name: "Carlos López", email: "clopez@tech.com", phone: "+54 9 351 333-9999", city: "Córdoba" },
        { id: 4, name: "Ana Martínez", email: "ana.m@yahoo.com", phone: "+54 9 261 222-8888", city: "Godoy Cruz" },
    ]);

    return (
        <div className="screen-container">
            <div className="header-actions">
                <h2>Directorio de Clientes</h2>
                <Link to="/customers/create"><button className="btn-primary">➕ Nuevo Cliente</button></Link>
            </div>
            <table className="data-table">
                <thead>
                    <tr><th>ID</th><th>Nombre Completo</th><th>Email</th><th>Teléfono</th><th>Ciudad</th><th>Acciones</th></tr>
                </thead>
                <tbody>
                    {customers.map((c) => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td style={{fontWeight:'bold', color:'white'}}>{c.name}</td>
                            <td>{c.email}</td>
                            <td>{c.phone}</td>
                            <td>{c.city}</td>
                            <td>
                                <Link to={`/customers/edit/${c.id}`}><button className="btn-icon">✏️</button></Link>
                                <button className="btn-icon" style={{color:'#ef4444'}}>🗑️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default CustomerList;