import React, {useState} from 'react';
import ExpenseCategoryChart from '../features/dataViz/ExpenseCategoryDonutChart'
import IncomeCategoryChart from '../features/dataViz/IncomeCategoryDonutChart';
import SavingIndicatorCircle from '../features/dataViz/SavingIndicatorCircle';
import ExpenseSubcategoryPolarAreaChart from '../features/dataViz/ExpenseSubcategoryPolarAreaChart'
import TimeFilterSelector from './TimeFilterSelector';
import useTimeFilter from '../../hooks/useTimeFilter'

import './GeneralReportTemplate.css';

const GeneralReportTemplate = ({timeFrame, showFilter, showYear, showQuarter, showMonth}) => {
  const {
    yearSelected,
    setYearSelected,
    quarterSelected,
    setQuarterSelected,
    monthSelected,
    setMonthSelected
  } = useTimeFilter();

  const monthMap = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };
  
  return (
    <div className='generalreporttemplate'>
      <div className='generalreporttemplateheader'>
        <div className='generalreporttemplateheaderfilter'>
          <TimeFilterSelector 
            showFilter={showFilter}
            showYear={showYear} 
            setYearSelected={setYearSelected} 
            showQuarter={showQuarter} 
            setQuarterSelected={setQuarterSelected} 
            showMonth={showMonth} 
            setMonthSelected={setMonthSelected} 
          />
        </div>
        <div className='generalreporttemplateheadertimeframe'>
          {showYear && <h3>{yearSelected}</h3>}
          {showQuarter && <h3>Q{quarterSelected}</h3>}
          {showMonth && <h3>{monthMap[monthSelected]}</h3>}
        </div>
      </div>
      <div className='generalreporttemplatetopsection'>
        <div className='generalreporttemplatetopsectionleft'>
          <div className='generalreporttemplatetopsectionlefttop'>
            <IncomeCategoryChart 
              width={300}
              height ={300}
              timeFrame={timeFrame}
              disableLegend={true}
              disableLegendFilter={true}
              year={yearSelected}
              quarter={quarterSelected}
              month={monthSelected}
            />
          </div>
          <div className='generalreporttemplatetopsectionleftmiddle'>
            <div className='generalreporttemplatetopsectionleftmiddleleft'>
              <SavingIndicatorCircle 
                width={100}
                height={100}
                fontSize='small'
                incomeType={'Gross Income'}
                timeFrame={timeFrame}
                savingTarget={100}
                year={yearSelected}
                quarter={quarterSelected}
                month={monthSelected}
              />
            </div>
            <div className='generalreporttemplatetopsectionleftmiddleright'>
              <SavingIndicatorCircle 
                width={100}
                height={100}
                fontSize='small'
                incomeType={'Net Income'}
                timeFrame={timeFrame} 
                savingTarget={100}
                year={yearSelected}
                quarter={quarterSelected}
                month={monthSelected}
              />
            </div>
          </div>
          <div className='generalreporttemplatetopsectionleftbottom'>
            <ExpenseCategoryChart 
              width={300}
              height ={300}
              expenseType='all'
              timeFrame={timeFrame}
              group={'all-group'}
              disableLegend={true}
              disableLegendFilter={true}
              year={yearSelected}
              quarter={quarterSelected}
              month={monthSelected}
            />
          </div>
        </div>
        <div className='generalreporttemplatetopsectionright'>
            <ExpenseSubcategoryPolarAreaChart
              width={300}
              height ={300}
              disableLegend={true}
              disableLegendFilter={true}
              expenseType='all'
              timeFrame={timeFrame}
              year={yearSelected}
              quarter={quarterSelected}
              month={monthSelected}
            />
        </div>
      </div>
      
    </div>
  );
  
}

export default GeneralReportTemplate;
