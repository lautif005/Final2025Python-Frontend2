import React, { useState } from 'react';

const InvoiceList = () => {
    const [invoices] = useState([
        { id: "INV-001", due_date: "2026-02-15", client: "Tech Solutions SA", amount: "$5,400.00", status: "Unpaid" },
        { id: "INV-002", due_date: "2026-02-10", client: "Juan Pérez", amount: "$1,200.00", status: "Paid" },
        { id: "INV-003", due_date: "2026-02-20", client: "Consultora Oeste", amount: "$890.50", status: "Unpaid" },
    ]);

    return (
        <div className="screen-container">
            <div className="header-actions">
                <h2>Facturación</h2>
                <button className="btn-primary">Generar Factura</button>
            </div>
            <table className="data-table">
                <thead><tr><th>Factura</th><th>Vencimiento</th><th>Cliente</th><th>Monto</th><th>Estado</th><th>Descargar</th></tr></thead>
                <tbody>
                    {invoices.map((i) => (
                        <tr key={i.id}>
                            <td style={{fontWeight:'bold'}}>{i.id}</td>
                            <td>{i.due_date}</td>
                            <td>{i.client}</td>
                            <td>{i.amount}</td>
                            <td style={{color: i.status === 'Paid' ? '#22c55e' : '#f59e0b', fontWeight:'bold'}}>{i.status}</td>
                            <td><button className="btn-icon" style={{color:'#3b82f6'}}>⬇ PDF</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default InvoiceList;