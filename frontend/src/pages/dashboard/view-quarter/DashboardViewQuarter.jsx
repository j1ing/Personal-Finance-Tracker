import React from 'react';
import GeneralReportTemplate from '../../../components/shared/GeneralReportTemplate';


import './DashboardViewQuarter.css';

const DashboardViewQuarter = () => {  
  return (
    <div className='dashboardviewquarter'>
      <GeneralReportTemplate 
        timeFrame={'quarterly'} 
        showYear={true}
        showQuarter={true}
        showMonth={false}
      />
    </div>
  );
  
}

export default DashboardViewQuarter;