import React, {useState} from 'react';
import QuarterSelect from '../dropdown/quarter-select';
import MonthSelect from '../dropdown/month-select';
import YearSelect from '../dropdown/year-select';

import './TimeFilterSelector.css'

const TimeFilterSelector = ({ showFilter=true, showYear,setYearSelected, showQuarter,setQuarterSelected, showMonth,setMonthSelected }) => {
  const [yearFilterSelected, setYearFilterSelected] = useState(undefined);
  const [quarterFilterSelected, setQuarterFilterSelected] = useState(undefined);
  const [monthFilterSelected, setMonthFilterSelected] = useState(undefined);

  const handleSubmit = () => {
    setYearSelected(yearFilterSelected);
    setQuarterSelected(quarterFilterSelected);
    setMonthSelected(monthFilterSelected);
  }

  return (
    <div className="timefilterselector">
      {showYear && 
      <div className='timefilterselectordropdown'>
        <p>Year:</p>
        <YearSelect setYearSelected={setYearFilterSelected} />
      </div>  
      }
      {showQuarter && 
      <div className='timefilterselectordropdown'>
        <p>Quarter:</p>
        <QuarterSelect setQuarterSelected={setQuarterFilterSelected} />
      </div>  
      }
      {showMonth && 
      <div className='timefilterselectordropdown'>
        <p>Month:</p>
        <MonthSelect setMonthSelected={setMonthFilterSelected} />
      </div>  
      }
      {showFilter && 
      <div className='timefilterselectorfilterbtn'>
        <button onClick={handleSubmit}>Filter</button>
      </div>  
      }
    </div>
  );
};

export default TimeFilterSelector;