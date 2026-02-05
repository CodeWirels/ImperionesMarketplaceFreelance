import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsAPI } from '../services/api';
import ProductsList from '../components/products/ProductsList';
import Stats from '../components/home/Stats';
import WhyUs from '../components/home/WhyUs';
import Categories from '../components/products/Categories';
import Pagination from '../components/products/Pagination';
import SellerCTA from '../components/home/SellerCTA';
import FAQ from '../components/home/FAQ';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchError, setSearchError] = useState('');
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // Estados de paginación
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async (page = 1) => {
        try {
            setLoading(true);
            
            // Cargar productos destacados (solo la primera vez)
            if (page === 1) {
                const featuredRes = await productsAPI.getFeatured();
                setFeaturedProducts(featuredRes.data.products);
            }

            // Cargar todos los productos con paginación
            const allRes = await productsAPI.getAll({ 
                page: page,
                limit: 8
            });
            
            setAllProducts(allRes.data.products);
            setCurrentPage(allRes.data.page);
            setTotalPages(allRes.data.totalPages);
            setTotalProducts(allRes.data.total);

        } catch (error) {
            console.error('Error cargando productos:', error);
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (page) => {
        loadProducts(page);
        
        // Scroll a la sección de productos (no al top)
        setTimeout(() => {
            const productsSection = document.querySelector('.all-products-section');
            if (productsSection) {
                const yOffset = -100; // Offset para header sticky
                const y = productsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 100);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const query = searchQuery.trim();
        
        if (!query) {
            setSearchError('Escribe algo para buscar');
            return;
        }
        
        if (query.length < 3) {
            setSearchError('Escribe al menos 3 caracteres');
            return;
        }
        
        setSearchError('');
        navigate(`/buscar?q=${encodeURIComponent(query)}`);
    };

    return (
        <div className="home">
            {/* 1. HERO */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>Miles de códigos, scripts y complementos para la creación de cualquier sitio web</h1>
                            <p>Elija entre complementos de comercio electrónico, plantillas de aplicaciones móviles, PHP y más para cualquier presupuesto.</p>
                            
                            <form className="search-box" onSubmit={handleSearch}>
                                <input 
                                    type="text" 
                                    placeholder="Buscar scripts, plantillas, plugins..." 
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        setSearchError('');
                                    }}
                                />
                                <button type="submit">
                                    <i className="fas fa-search"></i> Buscar
                                </button>
                            </form>

                            {searchError && (
                                <div className="search-error-message">
                                    <i className="fas fa-exclamation-circle"></i>
                                    {searchError}
                                </div>
                            )}
                        </div>

                        <div className="hero-image">
                            <img src="/img.jpg" alt="Imperiones" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PRODUCTOS DESTACADOS */}
            <section className="featured-section">
                <div className="container">
                    <ProductsList 
                        products={featuredProducts} 
                        loading={loading && currentPage === 1}
                        title="Productos Destacados"
                    />
                </div>
            </section>

            {/* 3. CATEGORÍAS */}
            <Categories />

            {/* 4. TODOS LOS PRODUCTOS */}
            <section className="all-products-section">
                <div className="container">
                    <ProductsList 
                        products={allProducts} 
                        loading={loading}
                        title={`Todos los Productos (${totalProducts})`}
                    />

                    {/* PAGINACIÓN */}
                    {!loading && totalPages > 1 && (
                        <Pagination 
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    )}
                </div>
            </section>

            {/* 5. ¿POR QUÉ IMPERIONES? */}
            <WhyUs />

            {/* 6. ESTADÍSTICAS */}
            <Stats />

            {/* 7. CTA VENDEDORES */}
            <SellerCTA />

            {/* 8. FAQ */}
            <FAQ />
        </div>
    );
};

export default Home;