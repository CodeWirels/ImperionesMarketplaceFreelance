import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-col">
                    <h4>Sobre Imperiones</h4>
                    <p>Scripts y plantillas profesionales para desarrolladores y diseñadores. Código de alta calidad, listo para usar en producción.</p>
                    
                    <div className="footer-social">
                        <a href="#" aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Categorías</h4>
                    <ul>
                        <li><Link to="/category/desarrollo-web">Desarrollo Web</Link></li>
                        <li><Link to="/category/software">Software y APIs</Link></li>
                        <li><Link to="/category/diseno">Recursos de Diseño</Link></li>
                        <li><Link to="/category/ui-ux">Diseño UI/UX</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Soporte</h4>
                    <ul>
                        <li><Link to="/ayuda">Centro de Ayuda</Link></li>
                        <li><Link to="/docs">Documentación</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                        <li><Link to="/faq">Preguntas Frecuentes</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Legal</h4>
                    <ul>
                        <li><Link to="/terminos">Términos del Servicio</Link></li>
                        <li><Link to="/privacidad">Política de Privacidad</Link></li>
                        <li><Link to="/licencias">Licencias</Link></li>
                        <li><Link to="/reembolso">Política de Reembolso</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 Imperiones. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
