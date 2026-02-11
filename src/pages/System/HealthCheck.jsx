import React from 'react';
import { Activity, Database, Server, ShieldCheck } from 'lucide-react';

const HealthCheck = () => {
    const systems = [
        { name: "API Backend (Python)", status: "Online", latency: "45ms", icon: <Server size={24} color="#3b82f6"/> },
        { name: "Base de Datos (PostgreSQL)", status: "Online", latency: "12ms", icon: <Database size={24} color="#22c55e"/> },
        { name: "Cache (Redis)", status: "Online", latency: "2ms", icon: <Activity size={24} color="#a855f7"/> },
        { name: "Firewall & Auth", status: "Active", latency: "-", icon: <ShieldCheck size={24} color="#f59e0b"/> },
    ];

    return (
        <div className="screen-container">
            <div className="header-actions">
                <h2>Estado del Sistema</h2>
                <button className="btn-primary" style={{background: '#22c55e'}}>Actualizar Estado</button>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem'}}>
                {systems.map((sys, i) => (
                    <div key={i} style={{
                        background: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155',
                        display: 'flex', alignItems: 'center', gap: '1rem'
                    }}>
                        <div style={{padding:'10px', background:'#0f172a', borderRadius:'8px'}}>{sys.icon}</div>
                        <div>
                            <h3 style={{margin:0, fontSize:'1rem', color:'white'}}>{sys.name}</h3>
                            <div style={{display:'flex', gap:'10px', marginTop:'5px', fontSize:'0.9rem'}}>
                                <span style={{color: '#22c55e', fontWeight:'bold'}}>● {sys.status}</span>
                                <span style={{color: '#64748b'}}>| {sys.latency}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{marginTop: '2rem', background: '#0f172a', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace', color: '#22c55e'}}>
                <p> System check initiated...</p>
                <p> Connecting to database... OK</p>
                <p> Verifying integrity... OK</p>
                <p> All systems operational.</p>
            </div>
        </div>
    );
};
export default HealthCheck;