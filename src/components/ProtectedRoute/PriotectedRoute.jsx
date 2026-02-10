import { Navigate, useLocation } from "react-router-dom";

// Simulación de autenticación (se puede conectar a un Context real después)
const isAuthenticated = () => {
    return localStorage.getItem("token") || true; // Por ahora true para que no te bloquee
};

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    
    if (!isAuthenticated()) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;