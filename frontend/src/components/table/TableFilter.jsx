import React, { useEffect, useState, useMemo  } from 'react';
import GeneralSelect from '../dropdown/general-select';
import GeneralSelectFilterOperator from '../dropdown/general-select-operator';
import applyFilter from '../../utils/tableFilterConversion'
import getTableHeaderDtypeObject from '../../utils/tableHeaderDtypeExtraction'
import './TableFilter.css'



const TableFilter = ({originalData, currentFilterObj, setDisplayData, setSearchableData, setCurrentFilterObj}) => {
  // Memoize the result of getTableHeaderDtypeObject to prevent unnecessary recalculations
  const headersWithTypesObj = useMemo(() => getTableHeaderDtypeObject(originalData), [originalData]);
  const [filterItem, setFilterItem] = useState('');
  const [filterOperator, setFilterOperatorItem] = useState('');
  const [filterValue, setFilterValue] = useState('');


  useEffect(() => {
    setFilterOperatorItem('');
  }, [filterItem]);

  useEffect(() => {
    filterData();
  }, [currentFilterObj, originalData]);


  const validateInputs = () => {
    let msg = '';
    if (filterItem === ''){
      msg += 'Please select a valid filter\n';
    }
    if (filterOperator === ''){
      msg += 'Please select a valid filter operator\n';
    }
    if (filterValue === ''){
      msg += 'Please enter a valid filter value\n';
    }
    return msg
  }

  const resetFilterFields = () => {
    setFilterItem('');
    setFilterOperatorItem('');
    setFilterValue('');
  };

  const clearAllFilter = () => {
    setCurrentFilterObj([]);
  }

  const addNewFilter = () => {
    const msg = validateInputs()
    if (msg === ''){
      try {
        setCurrentFilterObj(prevItems => [...prevItems, 
          {item: filterItem, operator: filterOperator, value: filterValue}
        ]);
      } catch (error) {
        alert('Failed to add filter.');
      }
    }
    else {
      window.alert(msg)
    }
  };

  const removeSelectedFilter = (ind) =>{
    setCurrentFilterObj(prevFilters =>
      prevFilters.filter((_, index) => index !== ind)
    );
  };

  const filterOnce = (data, currentFilterItem, currentFilterOperator, currentFilterValue) => {
    const filteredOnceData = data.filter((row) => {
      const rowValue = row[currentFilterItem];
      return applyFilter(rowValue, currentFilterOperator, currentFilterValue);
    })
    return filteredOnceData;
  };

  const filterData = () => {
    const filtered = currentFilterObj.reduce((accData, filter) => {
      return filterOnce(accData, filter.item, filter.operator, filter.value);
    }, originalData);
  
    setDisplayData(filtered);
    setSearchableData(filtered);
    resetFilterFields();
  };

  return (
    <div className='tablefilter'>
      <div className='currentTableFilter'>
        {currentFilterObj.length > 0 ? currentFilterObj.map((filter, index)=> (
          <div className='currentTableFilterSingle' key={index}>
            <span style={{fontWeight:"bold"}}>{filter.item} {filter.operator} {filter.value}</span>
            <button className='currentTableFilterSingle-cross-btn' onClick={() => removeSelectedFilter(index)}>&#10060;</button>
          </div>
        )) : (
          <br/>
        )}
        {currentFilterObj.length > 0 && (
          <div className='currentTableFilterBtn'>
            <button onClick={() => clearAllFilter()}>Clear All</button>
          </div>
        )}
      </div>
      <div className='tablefilterselect'>
        <GeneralSelect 
          itemList={Object.keys(headersWithTypesObj)} 
          itemSelected={filterItem} 
          setItemSelected={setFilterItem} 
          placeholder='-- Select a filter --'
        />
        <GeneralSelectFilterOperator 
          itemSelected={headersWithTypesObj[filterItem] ?? null} 
          operatorSelected={filterOperator} 
          setOperatorSelected={setFilterOperatorItem}
        />
        <input type="text" id="filterInput" name="filterInput" value={filterValue} onChange={(event) => {setFilterValue(event.target.value)}}/>
        <button onClick={addNewFilter}>Add</button>
      </div>
    </div>
  );
  
}

export default TableFilter;
