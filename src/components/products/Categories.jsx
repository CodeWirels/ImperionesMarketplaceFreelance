import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
    const categories = [
        {
            name: 'Scripts',
            slug: 'scripts',
            icon: 'fa-code',
            color: '#009643',
            description: 'Código listo para usar'
        },
        {
            name: 'Sistemas Web',
            slug: 'sistemas-web',
            icon: 'fa-desktop',
            color: '#4facfe',
            description: 'CRM, ERP y más'
        },
        {
            name: 'Landing Pages',
            slug: 'landing-pages',
            icon: 'fa-file-alt',
            color: '#667eea',
            description: 'Páginas de aterrizaje'
        },
        {
            name: 'Logotipos',
            slug: 'logotipos',
            icon: 'fa-palette',
            color: '#fa709a',
            description: 'Diseños vectoriales'
        },
        {
            name: 'Diseño UI/UX',
            slug: 'diseno-ui-ux',
            icon: 'fa-paint-brush',
            color: '#f093fb',
            description: 'Kits de interfaz'
        },
        {
            name: 'WordPress',
            slug: 'wordpress-plugins',
            icon: 'fa-wordpress',
            color: '#a8edea',
            description: 'Plugins y themes'
        },
        {
            name: 'eCommerce',
            slug: 'ecommerce',
            icon: 'fa-shopping-cart',
            color: '#ff6b35',
            description: 'Tiendas online'
        }
    ];

    return (
        <section className="categories-section">
            <div className="container">
                <div className="categories-header">
                    <h2>Explora por Categoría</h2>
                    <p>Encuentra exactamente lo que necesitas para tu proyecto</p>
                </div>

                <div className="categories-grid">
                    {categories.map((category) => (
                        <Link 
                            key={category.slug}
                            to={`/category/${category.slug}`}
                            className="category-card"
                            style={{ '--category-color': category.color }}
                        >
                            <div className="category-icon">
                                <i className={`fas ${category.icon}`}></i>
                            </div>
                            <h3>{category.name}</h3>
                            <p>{category.description}</p>
                            <span className="category-arrow">
                                <i className="fas fa-arrow-right"></i>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
