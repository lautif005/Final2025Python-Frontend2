import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/PriotectedRoute';
import MainLayout from './components/Layout_TEMP/MainLayout';
import Sidebar from './components/Navigation/Sidebar';

// --- PÁGINAS (Módulos) ---

// Auth
import LoginScreen from './pages/Auth/LoginScreen';

// Dashboard
import DashboardScreen from './pages/Dashboard/DashboardScreen';

// Inventory (Products & Categories)
import ProductList from './pages/Products/ProductList';
import ProductCreate from './pages/Products/ProductCreate';
import ProductEdit from './pages/Products/ProductEdit';
import CategoryList from './pages/Categories/CategoryList';
import CategoryCreate from './pages/Categories/CategoryCreate';
import CategoryEdit from './pages/Categories/CategoryEdit';

// Customers
import CustomerList from './pages/Customers/CustomerList';
import CustomerCreate from './pages/Customers/CustomerCreate';
import CustomerEdit from './pages/Customers/CustomerEdit';

// Sales (Orders & Invoices)
import OrderList from './pages/Orders/OrderList';
import OrderCreate from './pages/Orders/OrderCreate';
import OrderDetail from './pages/Orders/OrderDetail';
import InvoiceList from './pages/Invoices/InvoiceList';
import InvoiceCreate from './pages/Invoices/InvoiceCreate';

// Reviews & System
import ReviewList from './pages/Reviews/ReviewList';
import HealthCheck from './pages/System/HealthCheck';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* RUTA PÚBLICA: Login */}
        <Route path="/" element={<LoginScreen />} />

        {/* RUTAS PROTEGIDAS (Admin Panel) */}
        <Route element={
            <ProtectedRoute>
                <MainLayout />
            </ProtectedRoute>
        }>
            {/* Dashboard */}
            <Route path="/dashboard" element={<DashboardScreen />} />
            
            {/* Productos */}
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/create" element={<ProductCreate />} />
            <Route path="/products/edit/:id" element={<ProductEdit />} />

            {/* Categorías */}
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/categories/create" element={<CategoryCreate />} />
            <Route path="/categories/edit/:id" element={<CategoryEdit />} />

            {/* Clientes */}
            <Route path="/customers" element={<CustomerList />} />
            <Route path="/customers/create" element={<CustomerCreate />} />
            <Route path="/customers/edit/:id" element={<CustomerEdit />} />

            {/* Pedidos */}
            <Route path="/orders" element={<OrderList />} />
            <Route path="/orders/create" element={<OrderCreate />} />
            <Route path="/orders/detail/:id" element={<OrderDetail />} />

            {/* Facturas */}
            <Route path="/invoices" element={<InvoiceList />} />
            <Route path="/invoices/create" element={<InvoiceCreate />} />

            {/* Reseñas */}
            <Route path="/reviews" element={<ReviewList />} />

            {/* Sistema */}
            <Route path="/system" element={<HealthCheck />} />

            {/* Redirección por defecto: Cualquier ruta desconocida va al Dashboard */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// forzar el commit