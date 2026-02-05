import React from 'react';
import './SellerCTA.css';

const SellerCTA = () => {
    return (
        <section className="seller-cta-section">
            <div className="container">
                <div className="seller-cta-content">
                    <div className="seller-cta-text">
                        <div className="seller-badge">
                            <i className="fas fa-crown"></i>
                            <span>Únete a nosotros</span>
                        </div>
                        <h2>¿Eres desarrollador o diseñador?</h2>
                        <p>Vende tus productos en Imperiones y llega a miles de clientes potenciales. Gana dinero con tu código, diseños y plantillas.</p>
                        
                        <div className="seller-benefits">
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>85% de comisión para ti</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Pagos rápidos y seguros</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Soporte dedicado</span>
                            </div>
                        </div>

                        <div className="seller-cta-buttons">
                            <a href="/become-seller" className="btn-primary">
                                <i className="fas fa-rocket"></i>
                                Comienza a vender
                            </a>
                            <a href="/seller-info" className="btn-secondary">
                                <i className="fas fa-info-circle"></i>
                                Más información
                            </a>
                        </div>
                    </div>

                    <div className="seller-cta-image">
                        <div className="image-wrapper">
                            <div className="floating-card card-1">
                                <i className="fas fa-dollar-sign"></i>
                                <span>$2,450</span>
                                <small>Este mes</small>
                            </div>
                            <div className="floating-card card-2">
                                <i className="fas fa-chart-line"></i>
                                <span>+245%</span>
                                <small>Crecimiento</small>
                            </div>
                            <div className="floating-card card-3">
                                <i className="fas fa-users"></i>
                                <span>1,234</span>
                                <small>Clientes</small>
                            </div>
                            <div className="main-illustration">
                                <i className="fas fa-laptop-code"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellerCTA;
