import React, { useState } from 'react';

const ReviewList = () => {
    const [reviews] = useState([
        { id: 1, user: "Marta Gómez", product: "Laptop HP", rating: 5, comment: "Excelente servicio y rapidez.", date: "2026-02-10" },
        { id: 2, user: "Pedro Almodóvar", product: "Mouse Logitech", rating: 4, comment: "Buen producto, caja un poco golpeada.", date: "2026-02-09" },
        { id: 3, user: "Sofía Loren", product: "Monitor Samsung", rating: 5, comment: "La calidad de imagen es increíble.", date: "2026-02-08" },
        { id: 4, user: "Juan Román", product: "Teclado Mecánico", rating: 2, comment: "Hacen mucho ruido las teclas.", date: "2026-02-05" },
    ]);

    return (
        <div className="screen-container">
            <div className="header-actions">
                <h2>Moderación de Reseñas</h2>
                <button className="btn-primary">Exportar Reporte</button>
            </div>
            <table className="data-table">
                <thead><tr><th>Usuario</th><th>Producto</th><th>Calificación</th><th>Comentario</th><th>Fecha</th></tr></thead>
                <tbody>
                    {reviews.map((r) => (
                        <tr key={r.id}>
                            <td style={{fontWeight:'bold', color:'white'}}>{r.user}</td>
                            <td>{r.product}</td>
                            <td>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i} style={{color: i < r.rating ? '#eab308' : '#475569'}}>★</span>
                                ))}
                            </td>
                            <td style={{color: '#94a3b8', fontStyle: 'italic'}}>"{r.comment}"</td>
                            <td>{r.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default ReviewList;