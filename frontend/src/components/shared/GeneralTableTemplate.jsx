import React, { useState } from 'react';
import Pagination from '../table/Pagination';
import TableFilter from '../table/TableFilter';
import TableSearch from '../table/TableSearch'
import './GeneralTableTemplate.css';


const GeneralTableTemplate = ({data, tableTitle}) => {
  const [searchValue, setSearchValue] = useState('');
  const [displayData, setDisplayData] = useState([])
  const [searchableData, setSearchableData] = useState([])
  const [currentFilterObj, setCurrentFilterObj] = useState([]);


  return (
    <div className='generaltabletemplate'>
      <div className='generaltabletemplatetitle'>
        <h1>{tableTitle}</h1>
      </div>
      <div className='generaltabletemplatefiltersearch'>
        <TableSearch searchableData={searchableData} searchValue={searchValue} setDisplayData={setDisplayData} setSearchValue={setSearchValue} width='500px' height='25px' fontSize='20px'/>
        <TableFilter 
          originalData={data} 
          currentFilterObj={currentFilterObj} 
          setDisplayData={setDisplayData} 
          setSearchableData={setSearchableData} 
          setCurrentFilterObj={setCurrentFilterObj}
        />
      </div>
      {displayData && displayData.length > 0 ? (
        <Pagination data={displayData}/>
      ) : (
        <p>No expenses found.</p>
      )}
    </div>
  );
  
}

export default GeneralTableTemplate;
