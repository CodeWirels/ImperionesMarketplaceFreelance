import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authAPI } from '../services/api';
import './Login.css';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        fullName: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError(''); // Limpiar error al escribir
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isLogin) {
                // LOGIN
                const response = await authAPI.login({
                    email: formData.email,
                    password: formData.password
                });
                
                // Guardar token
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                
                // Redireccionar
                navigate('/');
            } else {
                // REGISTRO
                if (formData.password !== formData.confirmPassword) {
                    setError('Las contraseñas no coinciden');
                    setLoading(false);
                    return;
                }

                const response = await authAPI.register({
                    fullName: formData.fullName,
                    email: formData.email,
                    password: formData.password
                });

                // Guardar token
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                
                // Redireccionar
                navigate('/');
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Error al procesar la solicitud');
        } finally {
            setLoading(false);
        }
    };

    const switchMode = () => {
        setIsLogin(!isLogin);
        setError('');
        setFormData({
            email: '',
            password: '',
            name: '',
            confirmPassword: ''
        });
    };

    return (
        <div className="login-page">
            <div className="login-container">
                {/* HEADER CON LOGO */}
                <div className="login-header">
                    <Link to="/" className="login-logo">
                        <i className="fas fa-laptop"></i>
                        <span>Imperiones</span>
                    </Link>
                    <p className="login-subtitle">
                        {isLogin ? 'Inicia sesión en tu cuenta' : 'Crea tu cuenta gratis'}
                    </p>
                </div>

                {/* TABS */}
                <div className="login-tabs">
                    <button
                        className={`tab ${isLogin ? 'active' : ''}`}
                        onClick={() => setIsLogin(true)}
                    >
                        Iniciar Sesión
                    </button>
                    <button
                        className={`tab ${!isLogin ? 'active' : ''}`}
                        onClick={() => setIsLogin(false)}
                    >
                        Registrarse
                    </button>
                </div>

                {/* FORMULARIO */}
                <form onSubmit={handleSubmit} className="login-form">
                    {error && (
                        <div className="error-message">
                            <i className="fas fa-exclamation-circle"></i>
                            {error}
                        </div>
                    )}

                    {/* NOMBRE (solo registro) */}
                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="name">
                                <i className="fas fa-user"></i>
                                Nombre completo
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Tu nombre"
                                required={!isLogin}
                            />
                        </div>
                    )}

                    {/* EMAIL */}
                    <div className="form-group">
                        <label htmlFor="email">
                            <i className="fas fa-envelope"></i>
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="tu@email.com"
                            required
                        />
                    </div>

                    {/* CONTRASEÑA */}
                    <div className="form-group">
                        <label htmlFor="password">
                            <i className="fas fa-lock"></i>
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                            minLength="6"
                        />
                    </div>

                    {/* CONFIRMAR CONTRASEÑA (solo registro) */}
                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="confirmPassword">
                                <i className="fas fa-lock"></i>
                                Confirmar contraseña
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="••••••••"
                                required={!isLogin}
                                minLength="6"
                            />
                        </div>
                    )}

                    {/* OLVIDÉ MI CONTRASEÑA (solo login) */}
                    {isLogin && (
                        <div className="forgot-password">
                            <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
                        </div>
                    )}

                    {/* BOTÓN SUBMIT */}
                    <button type="submit" className="btn-submit" disabled={loading}>
                        {loading ? (
                            <>
                                <i className="fas fa-spinner fa-spin"></i>
                                Procesando...
                            </>
                        ) : (
                            <>
                                {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
                                <i className="fas fa-arrow-right"></i>
                            </>
                        )}
                    </button>
                </form>

                {/* FOOTER */}
                <div className="login-footer">
                    <p>
                        {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
                        <button onClick={switchMode} className="switch-btn">
                            {isLogin ? 'Regístrate aquí' : 'Inicia sesión'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;