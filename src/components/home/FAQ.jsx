import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "¿Cómo funciona la compra de productos?",
            answer: "Una vez que seleccionas un producto, puedes comprarlo de forma segura mediante Stripe. Recibirás acceso inmediato al archivo descargable y la licencia correspondiente."
        },
        {
            question: "¿Puedo usar los productos en proyectos comerciales?",
            answer: "Sí, todos nuestros productos incluyen licencia comercial. Puedes usarlos en proyectos de clientes sin restricciones. Revisa los términos específicos de cada licencia."
        },
        {
            question: "¿Ofrecen reembolsos?",
            answer: "Sí, ofrecemos garantía de reembolso de 30 días. Si el producto no cumple con tus expectativas, contacta con soporte y te devolveremos el dinero."
        },
        {
            question: "¿Recibiré actualizaciones del producto?",
            answer: "Sí, cuando compras un producto, recibes todas las actualizaciones futuras de forma gratuita. Te notificaremos por email cuando haya nuevas versiones disponibles."
        },
        {
            question: "¿Qué métodos de pago aceptan?",
            answer: "Aceptamos todas las tarjetas de crédito y débito principales (Visa, Mastercard, American Express) a través de Stripe, nuestro procesador de pagos seguro."
        },
        {
            question: "¿Ofrecen soporte técnico?",
            answer: "Sí, cada producto incluye documentación completa y soporte por email. Respondemos en máximo 24 horas hábiles."
        },
        {
            question: "¿Puedo revender los productos?",
            answer: "No, la licencia no permite la reventa de los productos tal cual. Sin embargo, puedes usarlos en proyectos de clientes y cobrar por tu trabajo de implementación."
        },
        {
            question: "¿Los productos están optimizados para SEO?",
            answer: "Sí, todos nuestros productos siguen las mejores prácticas de SEO, incluyendo código semántico, meta tags apropiados y rendimiento optimizado."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="container">
                <div className="faq-header">
                    <h2>Preguntas Frecuentes</h2>
                    <p>Todo lo que necesitas saber sobre nuestros productos y servicios</p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                        >
                            <button 
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'}`}></i>
                            </button>
                            
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq-footer">
                    <p>¿No encuentras lo que buscas?</p>
                    <a href="/contacto" className="faq-contact-btn">
                        <i className="fas fa-envelope"></i>
                        Contáctanos
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
