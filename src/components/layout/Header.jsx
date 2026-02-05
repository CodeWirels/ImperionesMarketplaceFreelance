import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { getCurrentUser, logout } from '../../services/api';

const Header = () => {
    // Estado para controlar si el menú móvil está abierto o cerrado
    const [menuOpen, setMenuOpen] = useState(false);

    // Función para alternar el estado del menú (abrir/cerrar)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Función para cerrar el menú (usada cuando se hace clic en un link)
    const closeMenu = () => {
        setMenuOpen(false);
    };

    const user = getCurrentUser();

    const handleLogout = () => {
        logout();
        window.location.href = '/';
    };


    return (
        <>
            <header className="header">
                <div className={`container header-content ${menuOpen ? 'menu-active' : ''}`}>
                    {/* HAMBURGUESA - Solo visible en móvil */}
                    <button className="hamburger" onClick={toggleMenu}>
                        <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                    </button>

                    {/* LOGO - Izquierda en desktop, centrado en móvil */}
                    <Link to="/" className="logo" onClick={closeMenu}>
                        <i className="fas fa-laptop"></i>
                        <span>Imperiones</span>
                    </Link>

                    {/* NAV - Centro en desktop, lateral en móvil */}
                    <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
                        {/* LOGO DENTRO DEL NAV (SOLO MÓVIL) */}
                        <div className="nav-header">
                            <Link to="/" className="nav-logo" onClick={closeMenu}>
                                <i className="fas fa-laptop"></i>
                                <span>Imperiones</span>
                            </Link>
                        </div>

                        <NavLink to="/category/scripts" onClick={closeMenu}>Scripts</NavLink>
                        <NavLink to="/category/sistemas-web" onClick={closeMenu}>Sistemas web</NavLink>
                        <NavLink to="/category/landing-pages" onClick={closeMenu}>Landing Page</NavLink>
                        <NavLink to="/category/logotipos" onClick={closeMenu}>Logotipos</NavLink>
                        <NavLink to="/category/diseno-ui-ux" onClick={closeMenu}>Diseño UI/UX</NavLink>
                        <NavLink to="/category/wordpress-plugins" onClick={closeMenu}>Plugins de WordPress</NavLink>
                        <NavLink to="/category/ecommerce" onClick={closeMenu}>eCommerce</NavLink>
                    </nav>

                    {/* CARRITO - Derecha en desktop y móvil */}
                    <Link to="/cart" className="cart-icon" onClick={closeMenu}>
                        <i className="fas fa-shopping-cart"></i>
                        <span className="cart-count">0</span>
                    </Link>
                    {user ? (
                        <div className="user-menu">
                            <span className="user-name">Hola, {user.fullName}</span>
                            <button onClick={handleLogout} className="btn-logout">
                                <i className="fas fa-sign-out-alt"></i>
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="btn-login">
                            <i className="fas fa-user"></i>
                            <span className="login-text">Iniciar Sesión</span>
                        </Link>
                    )}

                </div>
            </header>

            {/* OVERLAY - Fondo oscuro cuando el menú móvil está abierto */}
            {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
        </>
    );
};

export default Header;