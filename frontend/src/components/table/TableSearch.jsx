import React, { useEffect } from 'react';
import './TableSearch.css'

const TableSearch = ({searchableData, searchValue, setDisplayData, setSearchValue, width,height,fontSize}) => {

  useEffect(() => {
    if (searchValue === ''){
      setDisplayData(searchableData);
    }
    else {
      setDisplayData(search(searchableData))
    }
  }, [searchValue]);

  useEffect(() => {
    setSearchValue('');
  }, [searchableData]);

  const search = (data) => {
    return data.filter(obj => 
      Object.values(obj).some(value => 
        String(value).toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  return (
    <div className='searchtextbar'>
      <input 
        type="text" 
        id="search" 
        name="search" 
        value={searchValue} 
        onChange={(event) => {setSearchValue(event.target.value)}} 
        style={{width,height,fontSize, padding:"0px 5px"}} 
        placeholder='&#x2315; Search'
      />
    </div>
  )
};

export default TableSearch;
