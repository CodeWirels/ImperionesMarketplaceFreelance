import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { id, title, slug, description, price, category, thumbnailUrl, isFeatured, rating } = product;

    return (
        <Link to={`/product/${slug}`} className="product-card">
            <div className="product-image">
                <img src={thumbnailUrl} alt={title} />
                {isFeatured && (
                    <div className="product-badge">Destacado</div>
                )}
            </div>

            <div className="product-info">
                <div className="product-category">{category}</div>
                <h3 className="product-title">{title}</h3>
                <p className="product-description">{description}</p>

                <div className="product-footer">
                    <div className="product-rating">
                        <i className="fas fa-star"></i>
                        <span>{rating}</span>
                    </div>
                    <div className="product-price">${price}</div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
