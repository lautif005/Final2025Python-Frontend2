import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCreate = () => {
    const navigate = useNavigate();
    return (
        <div className="screen-container">
            <div className="header-actions">
                <h2>Registrar Nuevo Producto</h2>
                <button onClick={() => navigate(-1)} className="btn-icon">⬅ Volver</button>
            </div>
            <div style={{background: '#1e293b', padding: '2rem', borderRadius: '8px', maxWidth: '600px'}}>
                <form style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                    <input type="text" placeholder="Nombre del Producto" />
                    <input type="text" placeholder="Categoría" />
                    <div style={{display:'flex', gap:'1rem'}}>
                        <input type="number" placeholder="Precio ($)" style={{flex:1}} />
                        <input type="number" placeholder="Stock Inicial" style={{flex:1}} />
                    </div>
                    <textarea placeholder="Descripción del producto..." style={{background:'#0f172a', border:'1px solid #334155', color:'white', padding:'1rem', borderRadius:'6px'}} rows="4"></textarea>
                    <button type="button" className="btn-primary" style={{marginTop:'1rem'}}>Guardar Producto</button>
                </form>
            </div>
        </div>
    );
};
export default ProductCreate;