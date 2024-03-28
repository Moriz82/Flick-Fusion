import React from 'react';
import './css/Pagination.css'; // Make sure to create a corresponding CSS file

class Pagination extends React.Component<{ cardsPerPage: any, totalCards: any, paginate: any, currentPage: any }> {
    render() {
        let {cardsPerPage, totalCards, paginate, currentPage} = this.props;
        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <nav className="pagination">
                <ul className="pagination-list">
                    {currentPage > 1 && (
                        <li className="page-item" onClick={() => paginate(currentPage - 1)}>
                            <a href="!#" className="page-link">
                                &laquo;
                            </a>
                        </li>
                    )}
                    {pageNumbers.slice(0, 5).map(number => (
                        <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}
                            onClick={() => paginate(number)}>
                            <a href="!#" className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                    {currentPage < pageNumbers.length && (
                        <li className="page-item" onClick={() => paginate(currentPage + 1)}>
                            <a href="!#" className="page-link">
                                &raquo;
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
        );
    }
}

export default Pagination;