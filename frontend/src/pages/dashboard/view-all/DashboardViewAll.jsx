import React,{ useState }from 'react';
import ExpenseCategoryChart from '../../../components/features/dataViz/ExpenseCategoryDonutChart'
import IncomeCategoryChart from '../../../components/features/dataViz/IncomeCategoryDonutChart'
import SavingIndicatorCircle from '../../../components/features/dataViz/SavingIndicatorCircle';

import './DashboardViewAll.css';

const DashboardViewAll = () => {
  return (
    <div className='dashboard'>
      <div className='dashboardtopleft'>
        <IncomeCategoryChart 
          title={'Title'}
          width={700}
          height ={700}
          timeFrame={'all-time'}
          disableLegendFilter={true}
        />
      </div>
      <div className='dashboardtopmiddle'>
        <div className='dashboardtopmiddletop'>
          <SavingIndicatorCircle 
            width={200}
            height={200}
            incomeType={'Gross Income'}
            timeFrame={'all-time'}
            savingTarget={100}
          />
        </div>
        <div className='dashboardtopmiddlebottom'>
          <SavingIndicatorCircle 
            width={200}
            height={200}
            incomeType={'Net Income'}
            timeFrame={'all-time'} 
            savingTarget={100}
          />
        </div>
      </div>
      <div className='dashboardtopright'>
        <ExpenseCategoryChart 
          title={'Title'}
          width={700}
          height ={700}
          expenseType='all'
          timeFrame={'all-time'}
          disableLegendFilter={true}
        />
      </div>
    </div>
  );
  
}

export default DashboardViewAll;
