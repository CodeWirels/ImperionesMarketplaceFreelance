import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsAPI } from '../services/api';
import ProductsList from '../components/products/ProductsList';
import './CategoryPage.css';

const CategoryPage = () => {
    const { categorySlug } = useParams();
    console.log('🔍 Slug recibido:', categorySlug);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    // Mapeo de slugs a nombres VISUALES (para mostrar en pantalla)
    const categoryNames = {
        'scripts': 'Scripts',
        'sistemas-web': 'Sistemas Web',
        'landing-pages': 'Landing Pages',
        'logotipos': 'Logotipos',
        'diseno-ui-ux': 'Diseño UI/UX',
        'wordpress-plugins': 'Plugins de WordPress',
        'ecommerce': 'eCommerce'
    };

    const categoryName = categoryNames[categorySlug] || 'Categoría';

    useEffect(() => {
        loadProducts();
    }, [categorySlug]);

    const loadProducts = async () => {
        try {
            setLoading(true);
            
            // Enviar el slug directamente (coincide con la BD)
            const response = await productsAPI.getAll({ 
                category: categorySlug,
                limit: 50 
            });
            
            setProducts(response.data.products);

        } catch (error) {
            console.error('Error cargando productos:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Filtrar productos por término de búsqueda
        if (searchTerm.trim()) {
            const filtered = products.filter(product => 
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setProducts(filtered);
        } else {
            loadProducts();
        }
    };

    return (
        <div className="category-page">
            {/* HERO DE CATEGORÍA */}
            <section className="category-hero">
                <div className="container">
                    <div className="category-hero-content">
                        <h1>{categoryName}</h1>
                        <p>Descubre los mejores productos de {categoryName.toLowerCase()} para tu proyecto</p>
                        
                        <form className="category-search" onSubmit={handleSearch}>
                            <input 
                                type="text" 
                                placeholder={`Buscar en ${categoryName}...`}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button type="submit">
                                <i className="fas fa-search"></i> Buscar
                            </button>
                        </form>

                        <div className="category-stats">
                            <div className="stat">
                                <i className="fas fa-box"></i>
                                <span>{products.length} productos</span>
                            </div>
                            <div className="stat">
                                <i className="fas fa-star"></i>
                                <span>Alta calidad</span>
                            </div>
                            <div className="stat">
                                <i className="fas fa-download"></i>
                                <span>Descarga instantánea</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCTOS */}
            <section className="category-products">
                <div className="container">
                    <ProductsList 
                        products={products}
                        loading={loading}
                        title={`${products.length} ${products.length === 1 ? 'producto encontrado' : 'productos encontrados'}`}
                    />
                </div>
            </section>
        </div>
    );
};

export default CategoryPage;