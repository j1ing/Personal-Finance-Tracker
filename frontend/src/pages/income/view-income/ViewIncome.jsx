import React from 'react';
import useGetData from '../../../hooks/getData';
import GeneralTableTemplate from '../../../components/shared/GeneralTableTemplate';
import './ViewIncome.css';


const ViewIncome = () => {
  const { data: incomeData, loading, error } = useGetData('income-view');

  return (
    <div className='viewincome'>
      <GeneralTableTemplate data={incomeData}  tableTitle={"View All Income Transactions"}/>
    </div>
  );
  
}

export default ViewIncome;

