import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    LayoutDashboard, 
    Package, 
    Users, 
    ShoppingCart, 
    FileText, 
    Star, 
    Activity 
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { path: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
        { path: "/products", label: "Productos", icon: <Package size={20} /> },
        { path: "/customers", label: "Clientes", icon: <Users size={20} /> },
        { path: "/orders", label: "Pedidos", icon: <ShoppingCart size={20} /> },
        { path: "/invoices", label: "Facturas", icon: <FileText size={20} /> },
        { path: "/reviews", label: "Reseñas", icon: <Star size={20} /> },
        { path: "/system", label: "Sistema", icon: <Activity size={20} /> },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="logo-icon">TS</div>
                <h1 className="logo-text">TechStore OS</h1>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item) => {
                    const isActive = location.pathname.startsWith(item.path);
                    return (
                        <Link 
                            key={item.path} 
                            to={item.path} 
                            className={`nav-item ${isActive ? 'active' : ''}`}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="sidebar-footer">
                <div className="user-info">
                    <div className="user-avatar">AD</div>
                    <div>
                        <p className="user-name">Admin</p>
                        <p className="user-role">Super Usuario</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

// ESTA ES LA LÍNEA QUE FALTABA Y CAUSABA EL ERROR:
export default Sidebar;