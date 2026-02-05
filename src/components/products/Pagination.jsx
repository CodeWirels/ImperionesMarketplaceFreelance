import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    // Generar array de números de página
    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = 5; // Mostrar máximo 5 números

        if (totalPages <= maxVisible) {
            // Si hay pocas páginas, mostrar todas
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Si hay muchas páginas, mostrar con puntos suspensivos
            if (currentPage <= 3) {
                // Inicio: [1] [2] [3] [4] ... [100]
                for (let i = 1; i <= 4; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                // Final: [1] ... [97] [98] [99] [100]
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                // Medio: [1] ... [5] [6] [7] ... [100]
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            }
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="pagination">
            {/* BOTÓN ANTERIOR */}
            <button
                className="pagination-btn"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <i className="fas fa-chevron-left"></i>
                <span>Anterior</span>
            </button>

            {/* NÚMEROS DE PÁGINA */}
            <div className="pagination-numbers">
                {pageNumbers.map((page, index) => (
                    page === '...' ? (
                        <span key={`dots-${index}`} className="pagination-dots">
                            ...
                        </span>
                    ) : (
                        <button
                            key={page}
                            className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    )
                ))}
            </div>

            {/* BOTÓN SIGUIENTE */}
            <button
                className="pagination-btn"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <span>Siguiente</span>
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    );
};

export default Pagination;
