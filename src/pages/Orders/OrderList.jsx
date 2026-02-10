import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OrderList = () => {
    const [orders] = useState([
        { id: "#ORD-9921", date: "2026-02-09", customer: "Juan Pérez", total: "$1,200", status: "Completed" },
        { id: "#ORD-9922", date: "2026-02-09", customer: "Ana Martínez", total: "$45", status: "Pending" },
        { id: "#ORD-9923", date: "2026-02-08", customer: "Carlos López", total: "$320", status: "Shipped" },
        { id: "#ORD-9924", date: "2026-02-07", customer: "María González", total: "$1,500", status: "Cancelled" },
    ]);

    return (
        <div className="screen-container">
            <div className="header-actions">
                <h2>Pedidos Recientes</h2>
                <Link to="/orders/create"><button className="btn-primary">➕ Crear Pedido</button></Link>
            </div>
            <table className="data-table">
                <thead><tr><th>Orden #</th><th>Fecha</th><th>Cliente</th><th>Total</th><th>Estado</th><th>Acciones</th></tr></thead>
                <tbody>
                    {orders.map((o) => (
                        <tr key={o.id}>
                            <td style={{fontFamily:'monospace', color:'#cbd5e1'}}>{o.id}</td>
                            <td>{o.date}</td>
                            <td>{o.customer}</td>
                            <td style={{fontWeight:'bold'}}>{o.total}</td>
                            <td>
                                <span style={{
                                    padding:'4px 8px', borderRadius:'4px', fontSize:'0.8rem',
                                    background: o.status === 'Completed' ? '#22c55e' : o.status === 'Pending' ? '#f59e0b' : '#3b82f6',
                                    color: 'white'
                                }}>{o.status}</span>
                            </td>
                            <td><Link to={`/orders/detail/${o.id}`}><button className="btn-icon">👁️</button></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default OrderList;