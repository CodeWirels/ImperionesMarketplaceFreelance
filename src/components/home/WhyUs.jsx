import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
    const features = [
        {
            icon: 'fa-shield-alt',
            title: 'Garantía de 30 Días',
            description: 'Si no estás satisfecho, te devolvemos tu dinero sin preguntas.'
        },
        {
            icon: 'fa-code',
            title: 'Código de Calidad',
            description: 'Todos los productos son revisados y cumplen estándares profesionales.'
        },
        {
            icon: 'fa-sync-alt',
            title: 'Actualizaciones Gratis',
            description: 'Recibe todas las actualizaciones futuras sin costo adicional.'
        },
        {
            icon: 'fa-headset',
            title: 'Soporte Premium',
            description: 'Documentación completa y soporte técnico en español 24/7.'
        },
        {
            icon: 'fa-download',
            title: 'Descarga Instantánea',
            description: 'Acceso inmediato a tus productos después de la compra.'
        },
        {
            icon: 'fa-lock',
            title: 'Pago Seguro',
            description: 'Transacciones protegidas con encriptación SSL y Stripe.'
        }
    ];

    return (
        <section className="why-us-section">
            <div className="container">
                <div className="why-us-header">
                    <h2>¿Por qué elegir Imperiones?</h2>
                    <p>La plataforma de confianza para desarrolladores y diseñadores</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">
                                <i className={`fas ${feature.icon}`}></i>
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
