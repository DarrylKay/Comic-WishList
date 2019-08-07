import React from "react";
import "./Pagination.css";

const Pagination = ({ comicsPerPage, totalComics, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalComics / comicsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination" id="pagination">
        {pageNumbers.map(pageNumber => (
          <li key={pageNumber} className="page-item">
            <div
              onClick={() => paginate(pageNumber)}
              className={(currentPage === pageNumber ? "active " : "") + "page-link"}
            >
              {pageNumber}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
