import React from 'react';
import { useNavigate } from 'react-router-dom';

const GenericForm = () => {
    const navigate = useNavigate();
    return (
        <div className="screen-container">
            <div className="header-actions">
                <h2>Formulario de Registro</h2>
                <button onClick={() => navigate(-1)} className="btn-icon">⬅ Cancelar</button>
            </div>
            <div style={{background: '#1e293b', padding: '3rem', textAlign: 'center', borderRadius: '8px'}}>
                <h3 style={{color:'#94a3b8'}}>Módulo disponible en versión PRO</h3>
                <p>Esta funcionalidad está habilitada en el backend pero requiere permisos elevados.</p>
            </div>
        </div>
    );
};
export default GenericForm;