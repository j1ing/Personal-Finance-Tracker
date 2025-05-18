import React from 'react';
import GeneralReportTemplate from '../../../components/shared/GeneralReportTemplate';


import './DashboardViewMonth.css';

const DashboardViewMonth = () => {  
  return (
    <div className='dashboardviewmonth'>
      <GeneralReportTemplate 
        timeFrame={'monthly'} 
        showYear={true}
        showQuarter={false}
        showMonth={true}
      />
    </div>
  );
  
}

export default DashboardViewMonth;
