import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import './loginScreen.css';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Simulación de Login (Espera 1 segundo)
        setTimeout(() => {
            // Acepta cualquier email/pass para que no te trabes en la demo
            if (email && password) {
                localStorage.setItem('token', 'demo-token-123'); // Guarda token falso
                setLoading(false);
                navigate('/dashboard'); // Redirige al Dashboard
            } else {
                setError('Por favor ingrese sus credenciales.');
                setLoading(false);
            }
        }, 800);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <div className="logo-box">TS</div>
                    <h1>TechStore OS</h1>
                    <p>Ingrese a su cuenta administrativa</p>
                </div>

                <form onSubmit={handleLogin} className="login-form">
                    <div className="input-group">
                        <Mail className="input-icon" size={20} />
                        <input 
                            type="email" 
                            placeholder="admin@techstore.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <Lock className="input-icon" size={20} />
                        <input 
                            type="password" 
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="login-btn" disabled={loading}>
                        {loading ? 'Ingresando...' : (
                            <>
                                Iniciar Sesión <ArrowRight size={18} />
                            </>
                        )}
                    </button>
                </form>

                <div className="login-footer">
                    <p>© 2026 TechStore Systems Inc.</p>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;