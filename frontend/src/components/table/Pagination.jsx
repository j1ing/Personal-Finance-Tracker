import React, { useState, useMemo, useEffect } from 'react';
import Table from './Table';
import PaginationControl from './PaginationControl';
import GeneralSelect from '../../components/dropdown/general-select'
import './Pagination.css';

const Pagination = ({ data = []}) => {
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const limitOption = [25,50,100,150,200];

  useEffect(() => {
      setCurrentPage(1);
    }, [data]);

  const paginatedData = useMemo(() => {
    const itemsPerPageCount = parseInt(itemsPerPage);
    const page = parseInt(currentPage)

    const startIndex = (page - 1) * itemsPerPageCount;
    return data.slice(startIndex, startIndex + itemsPerPageCount);
  }, [data, currentPage, itemsPerPage]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='paginationtablecomponent'>
      <div className='paginationuppercontrol'>
        <PaginationControl currentPage={currentPage} totalPages={totalPages} goToPage={goToPage}/>
        <span>Item per page:</span><GeneralSelect itemList={limitOption} itemSelected={itemsPerPage} setItemSelected={setItemsPerPage} placeholder='Items per page'/>
      </div>
      <div className='paginationtable'>
        <Table data={paginatedData}/>
      </div>
      <div className='paginationbottomcontrol'>
        <PaginationControl currentPage={currentPage} totalPages={totalPages} goToPage={goToPage}/>
      </div>
    </div>
  );
} 

export default Pagination;