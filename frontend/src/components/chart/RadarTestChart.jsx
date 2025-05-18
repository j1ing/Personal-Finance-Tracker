import React from 'react';
import useGetData from '../../hooks/getData';
import useColorTheme from '../../hooks/colorTheme'
import RadarChart from './radarChart'


const YTDExpenseCategoryChart = () => {
  const expenseDataYTDBySubcategory = useGetData('dashboard-expense-ytd-subcategories')
  const colorTheme = useColorTheme('expense');
  const selectedColors = colorTheme.slice(0, expenseDataYTDBySubcategory.length);

  const uniqueCategories = [...new Set(expenseDataYTDBySubcategory.map(item => item.category))];
  const transformDataForRadarChart = (data, category) => {
    // Filter data for the given category
    const categoryData = data.filter(item => item.category === category);
  
    return {
      labels: categoryData.map(item => item.subcategory), // Subcategories as labels
      datasets: [
        {
          label: `${category} Expenses`, // Dataset label
          data: categoryData.map(item => item.ytd_expense), // Expense values
          backgroundColor: "rgba(54, 162, 235, 0.2)", // Light blue fill
          borderColor: "rgba(54, 162, 235, 1)", // Darker blue border
          borderWidth: 2
        }
      ]
    };
  };



  return (
    <div className='donutChart'>
      <h2>YTD By Category</h2>
      {uniqueCategories.map((category) => {
        return (
        <div>
          <RadarChart 
            data= {transformDataForRadarChart(expenseDataYTDBySubcategory, category)} 
            max={Math.max(expenseDataYTDBySubcategory.filter(item => item.category === category).map(item => item.ytd_expense))} 
            min={0}
            width={700}
            height={700} />
        </div>
        )
      })
    }
    </div>
  );
  
}

export default YTDExpenseCategoryChart;




// Sample data
  

  