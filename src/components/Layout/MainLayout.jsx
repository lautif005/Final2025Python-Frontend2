import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Navigation/Sidebar'; // Importamos el menú lateral
import './MainLayout.css'; // Importamos los estilos de la estructura

const MainLayout = () => {
    return (
        <div className="main-layout-container">
            {/* El Sidebar se renderiza fijo a la izquierda */}
            <Sidebar />
            
            {/* El Main Content es donde cambian las pantallas (Outlet) */}
            <main className="main-content-area">
                <div className="content-wrapper">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default MainLayout;