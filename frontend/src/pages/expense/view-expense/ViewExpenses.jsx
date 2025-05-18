import React from 'react';
import useGetData from '../../../hooks/getData';
import GeneralTableTemplate from '../../../components/shared/GeneralTableTemplate';
import './ViewExpenses.css';


const ViewExpense = () => {
  const { data: expenseData, loading, error } = useGetData('expense-view', { expenseType: 'all' });

  return (
    <div className='viewexpense'>
      <GeneralTableTemplate data={expenseData} tableTitle={"View All Expense Transactions"}/>
    </div>
  );
  
}

export default ViewExpense;
