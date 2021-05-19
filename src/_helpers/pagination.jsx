import React from "react";

const Pagination = (props) => {
    const {totalRecords, itemsPerPage, currentPage} = props
    const splitItems = Math.ceil(totalRecords / itemsPerPage);
    const pageNumbers = Array.from({length: splitItems}, (_, i) => i + 1)
    const getPageNumbers = () => {
       return  pageNumbers.map((number) => (
            <li key={number} className="page-item">
                <a onClick={() => currentPage(number)} href="#" className="page-link">
                    {number}
                </a>
            </li>
        ))
    }
    return (
        <nav className="page-numbers">
            <ul className="pagination">
                {getPageNumbers()}
            </ul>
        </nav>
    );
}

export default Pagination;
