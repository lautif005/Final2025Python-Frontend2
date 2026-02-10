import React from 'react';
import { Link } from 'react-router-dom';
import { 
    LayoutDashboard, 
    TrendingUp, 
    Users, 
    ShoppingBag, 
    AlertCircle,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react';

const DashboardScreen = () => {
    // Datos simulados para las tarjetas
    const stats = [
        { 
            title: "Ventas Totales", 
            value: "$24,500.00", 
            change: "+12.5%", 
            isPositive: true,
            icon: <TrendingUp size={24} color="#22c55e" />
        },
        { 
            title: "Pedidos Activos", 
            value: "45", 
            change: "+4 nuevos", 
            isPositive: true,
            icon: <ShoppingBag size={24} color="#3b82f6" />
        },
        { 
            title: "Nuevos Clientes", 
            value: "128", 
            change: "+2.4%", 
            isPositive: true,
            icon: <Users size={24} color="#8b5cf6" />
        },
        { 
            title: "Alertas de Stock", 
            value: "5", 
            change: "-2 críticas", 
            isPositive: false,
            icon: <AlertCircle size={24} color="#ef4444" />
        },
    ];

    // Datos para la tabla de actividad reciente
    const recentActivity = [
        { id: "#ORD-9921", user: "Carlos Ruiz", amount: "$1,200", status: "Completado", time: "Hace 5 min" },
        { id: "#ORD-9922", user: "Ana López", amount: "$450", status: "Pendiente", time: "Hace 15 min" },
        { id: "#ORD-9923", user: "Tech Solutions", amount: "$3,400", status: "Enviado", time: "Hace 1 hora" },
        { id: "#ORD-9924", user: "Juan Pérez", amount: "$120", status: "Cancelado", time: "Hace 2 horas" },
        { id: "#ORD-9925", user: "María García", amount: "$850", status: "Completado", time: "Hace 3 horas" },
    ];

    return (
        <div className="screen-container">
            {/* Header del Dashboard */}
            <div className="header-actions">
                <div>
                    <h2 style={{margin: 0, fontSize: '1.8rem'}}>Dashboard General</h2>
                    <p style={{color: '#94a3b8', margin: '5px 0 0 0'}}>Bienvenido de nuevo, Administrador.</p>
                </div>
                <div style={{display: 'flex', gap: '10px'}}>
                    <button className="btn-primary" style={{backgroundColor: '#1e293b', border: '1px solid #334155'}}>📥 Descargar Reporte</button>
                    <button className="btn-primary">➕ Nueva Venta</button>
                </div>
            </div>

            {/* Grid de Estadísticas (KPIs) */}
            <div style={{
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                gap: '1.5rem', 
                marginBottom: '2rem'
            }}>
                {stats.map((stat, index) => (
                    <div key={index} style={{
                        backgroundColor: '#1e293b', 
                        padding: '1.5rem', 
                        borderRadius: '8px', 
                        border: '1px solid #334155',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px'}}>
                            <div>
                                <h3 style={{color: '#94a3b8', fontSize: '0.875rem', textTransform: 'uppercase', margin: 0}}>{stat.title}</h3>
                                <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#f8fafc', marginTop: '5px'}}>{stat.value}</div>
                            </div>
                            <div style={{padding: '10px', backgroundColor: '#0f172a', borderRadius: '8px'}}>
                                {stat.icon}
                            </div>
                        </div>
                        <div style={{
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '5px',
                            fontSize: '0.85rem',
                            color: stat.isPositive ? '#22c55e' : '#ef4444'
                        }}>
                            {stat.isPositive ? <ArrowUpRight size={16}/> : <ArrowDownRight size={16}/>}
                            <span>{stat.change}</span>
                            <span style={{color: '#64748b', marginLeft: '5px'}}>vs mes anterior</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sección de Actividad Reciente */}
            <div style={{
                backgroundColor: '#1e293b',
                borderRadius: '8px',
                border: '1px solid #334155',
                overflow: 'hidden'
            }}>
                <div style={{padding: '1.5rem', borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h3 style={{margin: 0, fontSize: '1.1rem'}}>Transacciones Recientes</h3>
                    <Link to="/orders" style={{color: '#3b82f6', textDecoration: 'none', fontSize: '0.9rem'}}>Ver todo &rarr;</Link>
                </div>
                
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>ID Orden</th>
                            <th>Usuario</th>
                            <th>Monto</th>
                            <th>Estado</th>
                            <th>Tiempo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentActivity.map((item, index) => (
                            <tr key={index}>
                                <td style={{fontFamily: 'monospace', color: '#cbd5e1'}}>{item.id}</td>
                                <td style={{fontWeight: 'bold', color: 'white'}}>{item.user}</td>
                                <td>{item.amount}</td>
                                <td>
                                    <span style={{
                                        padding: '4px 10px', 
                                        borderRadius: '20px', 
                                        fontSize: '0.75rem',
                                        fontWeight: 'bold',
                                        backgroundColor: 
                                            item.status === 'Completado' ? 'rgba(34, 197, 94, 0.1)' : 
                                            item.status === 'Pendiente' ? 'rgba(245, 158, 11, 0.1)' : 
                                            item.status === 'Cancelado' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                                        color: 
                                            item.status === 'Completado' ? '#22c55e' : 
                                            item.status === 'Pendiente' ? '#f59e0b' : 
                                            item.status === 'Cancelado' ? '#ef4444' : '#3b82f6',
                                        border: `1px solid ${
                                            item.status === 'Completado' ? '#22c55e' : 
                                            item.status === 'Pendiente' ? '#f59e0b' : 
                                            item.status === 'Cancelado' ? '#ef4444' : '#3b82f6'
                                        }`
                                    }}>
                                        {item.status}
                                    </span>
                                </td>
                                <td style={{color: '#94a3b8', fontSize: '0.85rem'}}>{item.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardScreen;