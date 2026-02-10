import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryEdit = () => {
    const navigate = useNavigate();
    return (
        <div className="screen-container">
            <div className="header-actions">
                <h2>Administración del Módulo</h2>
                <button onClick={() => navigate(-1)} className="btn-icon">⬅ Volver</button>
            </div>
            <div style={{
                background: '#1e293b', 
                padding: '3rem', 
                textAlign: 'center', 
                borderRadius: '8px',
                border: '1px solid #334155',
                marginTop: '2rem'
            }}>
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🔒</div>
                <h3 style={{color:'#f8fafc', fontSize:'1.5rem', marginBottom:'0.5rem'}}>Acceso Restringido</h3>
                <p style={{color:'#94a3b8'}}>Esta funcionalidad requiere permisos de Super-Administrador o configuración adicional en el servidor.</p>
                <button 
                    onClick={() => navigate('/dashboard')}
                    className="btn-primary" 
                    style={{marginTop: '2rem'}}
                >
                    Volver al Dashboard
                </button>
            </div>
        </div>
    );
};
export default CategoryEdit;