import React from 'react';
import useGetData from '../../../hooks/getData';
import getColorTheme from '../../../utils/colorTheme'
import filterDataByTimeFrame from '../../../utils/filterDataByTimeFrame'
import DonutChart from '../../chart/donutChart'

import './IncomeCategoryDonutChart.css';

const IncomeCategoryChart = ({title, width, height, timeFrame, disableLegend, disableLegendFilter, year, quarter, month}) => {
  const { data: incomeTotal, loadingTotal, errorTotal } = useGetData('income-total', { timeFrame: timeFrame, group: 'all' });
  const { data: incomeTotalByCategory, loadingCategoryTotal, errorCategoryTotal } = useGetData('income-total', { timeFrame: timeFrame, group: 'subcategory' });
  const colorTheme = getColorTheme('income');
  const selectedColors = colorTheme.slice(0, incomeTotalByCategory.length);

  // Handle loading and error states early
  if (loadingTotal || loadingCategoryTotal) return <p>Loading...</p>;
  if (errorTotal || errorCategoryTotal) return <p>Error loading data</p>;

  const filteredIncomeTotal = filterDataByTimeFrame(incomeTotal, timeFrame, year, quarter, month)
  const filteredIncomeTotalByCategory = filterDataByTimeFrame(incomeTotalByCategory, timeFrame, year, quarter, month)

  const incomeByCategoryChartData = {
    labels: filteredIncomeTotalByCategory.map(item => item.subcategory),
    datasets: [
      {
        data: filteredIncomeTotalByCategory.map(item => item.totalIncome), // Example income values
        backgroundColor: selectedColors,
        hoverBackgroundColor: selectedColors
      }
    ]
  }

  return (
    <div className='incomecategorydonutchart'>
      <h2 className='incomecategorydonutchartheader'>{title}</h2>
      {filteredIncomeTotal && filteredIncomeTotalByCategory ? (
      <DonutChart 
        chartData={incomeByCategoryChartData} 
        width={width} 
        height={height} 
        centerTxt={`$${filteredIncomeTotal?.[0]?.totalIncome ?? '0.00'}`} 
        cutout="thick"
        disableLegend={disableLegend}
        disableLegendFilter={disableLegendFilter}
      />
      ) : (<p>No Data</p>)
      }
    </div>
  );
  
}

export default IncomeCategoryChart;
