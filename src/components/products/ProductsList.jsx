import React from 'react';
import ProductCard from './ProductCard';
import './ProductsList.css';

const ProductsList = ({ products, loading, title }) => {
    if (loading) {
        return (
            <div className="products-loading">
                <div className="spinner"></div>
                <p>Cargando productos...</p>
            </div>
        );
    }

    if (!products || products.length === 0) {
        return (
            <div className="products-empty">
                <i className="fas fa-box-open"></i>
                <h3>No hay productos disponibles</h3>
                <p>Vuelve más tarde para ver nuevos productos</p>
            </div>
        );
    }

    return (
        <section className="products-section">
            {title && (
                <div className="products-header">
                    <h2>{title}</h2>
                </div>
            )}

            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductsList;
