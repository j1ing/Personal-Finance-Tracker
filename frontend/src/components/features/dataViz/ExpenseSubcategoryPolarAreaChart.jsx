import React from 'react';
import useGetData from '../../../hooks/getData';
import getColorTheme from '../../../utils/colorTheme'
import filterDataByTimeFrame from '../../../utils/filterDataByTimeFrame'
import PolarAreaChart from '../../chart/polarAreaChart'

import './ExpenseSubcategoryPolarAreaChart.css';

const YTDExpenseSubcategoryChart = ({width, height, disableLegend, disableLegendFilter,expenseType, timeFrame, year, quarter, month}) => {
  const { data: expenseTotalBySubcategory, loadingSubcategoryTotal, errorSubcategoryTotal } = useGetData('expense-total', { expenseType: expenseType, timeFrame: timeFrame, group: 'subcategory' }); 
  const colorTheme = getColorTheme('expense');

  const filteredExpenseTotalBySubcategory = filterDataByTimeFrame(expenseTotalBySubcategory, timeFrame, year, quarter, month)

  const uniqueCategories = [...new Set(filteredExpenseTotalBySubcategory.map(item => item.category))];
  const transformDataForRadarChart = (data, category) => {
    // Filter data for the given category
    const categoryData = data.filter(item => item.category === category);
    return {
      labels: categoryData.map(item => item.subcategory), // Subcategories as labels
      datasets: [
        {
          data: categoryData.map(item => item.totalExpense), // Expense values
          backgroundColor: colorTheme.slice(0, categoryData.map(item => item.subcategory).length) // Light blue fill
        }
      ]
    };
  };

  return (
    <div className='polarareachart'>
      {uniqueCategories.map((category) => {
        const chartData = transformDataForRadarChart(filteredExpenseTotalBySubcategory, category);
        const total = chartData.datasets[0].data.reduce((acc, val) => acc + val, 0);
        return (
        <div className='polarareachartsubcategory'>
          <h3 className='polarareachartsubcategoryheader'>{category}</h3>
          <h3 className='polarareachartsubcategoryheader'>${total.toFixed(2)}</h3>
          <PolarAreaChart 
            data= {chartData} 
            width={width}
            height={height} 
            disableLegend={disableLegend}
            disableLegendFilter={disableLegendFilter}
          />
        </div>
        )
      })
    }
    </div>
  );
  
}

export default YTDExpenseSubcategoryChart;
  