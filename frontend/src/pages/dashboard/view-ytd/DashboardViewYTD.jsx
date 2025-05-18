import React from 'react';
import GeneralReportTemplate from '../../../components/shared/GeneralReportTemplate';


import './DashboardViewYTD.css';

const DashboardViewYTD = () => {  
  return (
    <div className='dashboardviewytd'>
      <GeneralReportTemplate 
        timeFrame={'ytd'} 
        showFilter={false}
        showYear={false}
        showQuarter={false}
        showMonth={false}
      />
    </div>
  );
  
}

export default DashboardViewYTD;