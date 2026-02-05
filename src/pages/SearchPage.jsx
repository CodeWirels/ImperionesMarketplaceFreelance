import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { productsAPI } from '../services/api';
import ProductsList from '../components/products/ProductsList';
import Pagination from '../components/products/Pagination';
import './SearchPage.css';

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const query = searchParams.get('q') || '';

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        if (query) {
            searchProducts();
        }
    }, [query, currentPage]);

    const searchProducts = async () => {
        try {
            setLoading(true);
            const response = await productsAPI.search(query, currentPage, 1);

            setProducts(response.data.products);
            setTotalPages(response.data.totalPages);
            setTotalResults(response.data.total);
        } catch (error) {
            console.error('Error buscando productos:', error);
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const clearSearch = () => {
        navigate('/');
    };

    if (!query) {
        return (
            <div className="search-page">
                <div className="container">
                    <div className="search-empty">
                        <i className="fas fa-search"></i>
                        <h2>Escribe algo para buscar</h2>
                        <button onClick={clearSearch} className="btn-primary">
                            Volver al inicio
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="search-page">
            <div className="search-header">
                <div className="container">
                    <h1>Resultados de búsqueda</h1>

                    <form className="search-box-results" onSubmit={(e) => {
                        e.preventDefault();
                        const newQuery = e.target.search.value.trim();
                        if (newQuery && newQuery.length >= 3) {
                            navigate(`/buscar?q=${encodeURIComponent(newQuery)}`);
                            setCurrentPage(1);
                        }
                    }}>
                        <input
                            type="text"
                            name="search"
                            id="search-input"
                            placeholder="Buscar scripts, plantillas, plugins..."
                            defaultValue={query}
                        />
                        <button
                            type="button"
                            onClick={() => {
                                document.getElementById('search-input').value = '';
                                document.getElementById('search-input').focus();
                            }}
                            className="btn-clear-icon"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                        <button type="submit">
                            <i className="fas fa-search"></i> Buscar
                        </button>
                    </form>
                    
                </div>
            </div>

            <div className="container">
                <ProductsList
                    products={products}
                    loading={loading}
                    title=""
                />

                {!loading && totalPages > 1 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                )}

                {!loading && products.length === 0 && (
                    <div className="search-no-results">
                        <i className="fas fa-inbox"></i>
                        <h3>No se encontraron productos</h3>
                        <p>Intenta con otros términos de búsqueda</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;