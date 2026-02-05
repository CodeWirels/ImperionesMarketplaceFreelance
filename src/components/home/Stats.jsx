import React from 'react';
import './Stats.css';

const Stats = () => {
    const stats = [
        {
            icon: 'fa-box',
            number: '500+',
            label: 'Productos Premium'
        },
        {
            icon: 'fa-download',
            number: '10,000+',
            label: 'Descargas Totales'
        },
        {
            icon: 'fa-users',
            number: '5,000+',
            label: 'Clientes Satisfechos'
        },
        {
            icon: 'fa-star',
            number: '4.8',
            label: 'Calificación Promedio'
        }
    ];

    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-icon">
                                <i className={`fas ${stat.icon}`}></i>
                            </div>
                            <div className="stat-content">
                                <h3>{stat.number}</h3>
                                <p>{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
