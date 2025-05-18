import React from 'react';
import GeneralReportTemplate from '../../../components/shared/GeneralReportTemplate';


import './DashboardViewYear.css';

const DashboardViewYear = () => {  
  return (
    <div className='dashboardviewyear'>
      <GeneralReportTemplate 
        timeFrame={'yearly'} 
        showYear={true}
        showQuarter={false}
        showMonth={false}
      />
    </div>
  );
  
}

export default DashboardViewYear;