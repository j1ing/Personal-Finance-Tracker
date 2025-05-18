import React, {useState} from 'react';
import useGetData from '../../../hooks/getData';
import getColorTheme from '../../../utils/colorTheme'
import filterDataByTimeFrame from '../../../utils/filterDataByTimeFrame'
import DonutChart from '../../chart/donutChart'

import './ExpenseCategoryDonutChart.css';

const ExpenseCategoryChart = ({title, width, height, expenseType, timeFrame, disableLegend, disableLegendFilter, year, quarter, month}) => {
  // Collect all requirements 
  const { data: expenseTotal, loadingTotal, errorTotal } = useGetData('expense-total', { expenseType: expenseType, timeFrame: timeFrame, group: 'all-group' });
  const { data: expenseTotalByCategory, loadingCategoryTotal, errorCategoryTotal } = useGetData('expense-total', { expenseType: expenseType, timeFrame: timeFrame, group: 'category' });
  const colorTheme = getColorTheme('expense');
  const selectedColors = colorTheme.slice(0, expenseTotalByCategory.length);

  // Handle loading and error states early
  if (loadingTotal || loadingCategoryTotal) return <p>Loading...</p>;
  if (errorTotal || errorCategoryTotal) return <p>Error loading data</p>;


  const filteredExpenseTotal = filterDataByTimeFrame(expenseTotal, timeFrame, year, quarter, month)
  const filteredExpenseTotalByCategory = filterDataByTimeFrame(expenseTotalByCategory, timeFrame, year, quarter, month)

  const expenseByCategoryChartData = {
    labels: filteredExpenseTotalByCategory.map(item => item.category),
    datasets: [
      {
        data: filteredExpenseTotalByCategory.map(item => item.totalExpense), // Example expense values
        backgroundColor: selectedColors,
        hoverBackgroundColor: selectedColors
      }
    ]
  }

  return (
    <div className='expensecategorydonutchart'>
      <h2 className='expensecategorydonutchartheader'>{title}</h2>
      {filteredExpenseTotal && filteredExpenseTotalByCategory ? (
      <DonutChart 
        chartData={expenseByCategoryChartData} 
        width={width} 
        height={height} 
        centerTxt={`$${filteredExpenseTotal?.[0]?.totalExpense ?? '0.00'}`} 
        cutout="thick"
        disableLegend={disableLegend}
        disableLegendFilter={disableLegendFilter}
      />
      ) : (<p>No Data</p>)
      }
    </div>
  );
  
}

export default ExpenseCategoryChart;
