import React from 'react';
import './PaginationControl.css';

const PaginationControl = ({currentPage, totalPages, goToPage}) => {

  return (
    <div className='paginationtablecontrol'>
      <button className="pagination-arrow-btn" onClick={() => goToPage(1)} disabled={currentPage === 1}>
        &#9198;
      </button>
      <button className="pagination-arrow-btn" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
        &lsaquo;
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button className="pagination-arrow-btn" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
        &rsaquo;
      </button>
      <button className="pagination-arrow-btn" onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages}>
        &#9197;
      </button>
    </div>
  );
} 

export default PaginationControl;