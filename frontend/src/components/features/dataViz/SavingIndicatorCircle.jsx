import React from 'react';
import useGetData from '../../../hooks/getData';
import useColorTheme from '../../../utils/colorTheme'
import filterDataByTimeFrame from '../../../utils/filterDataByTimeFrame'
import DonutChart from '../../chart/donutChart'

import './SavingIndicatorCircle.css'

const SavingIndicatorCircle = ({ key, width, height, title, fontSize='medium', incomeType, timeFrame, savingTarget = 100, year, quarter, month}) => {
  // Props:
  // - incomeType: either "Gross Income" or "Net Income"
  // - timeFrame: used for backend filtering (e.g., "monthly", "yearly", etc.)
  // - savingTarget: % savings goal to compare against (default is 100%)

  // Fetch total income, total expenses, and total essential expenses for the given time frame
  const { data: incomeTotal, loadingIncomeTotal, errorIncomeTotal } = useGetData('income-total', { timeFrame: timeFrame, group: 'all' }); 
  const { data: expenseTotal, loadingExpenseTotal, errorExpenseTotal } = useGetData('expense-total', { expenseType: 'all', timeFrame: timeFrame, group: 'all-group' });
  const { data: essentialExpenseTotal, loadingEssentialExpenseTotal, errorEssentialExpenseTotal } = useGetData('expense-total', { expenseType: 'essential', timeFrame: timeFrame, group: 'all-group' });
  
  const filteredIncomeTotal = filterDataByTimeFrame(incomeTotal, timeFrame, year, quarter, month)
  const filteredExpenseTotal = filterDataByTimeFrame(expenseTotal, timeFrame, year, quarter, month)
  const filteredEssentialExpenseTotal = filterDataByTimeFrame(essentialExpenseTotal, timeFrame, year, quarter, month)

  const colorTheme = useColorTheme('indicator');
  const whiteColor = '#ffffff';

  const fontMap ={
    'small': '12px',
    'medium': '16px',
    'large': '18px'
  }

  // Extract and normalize numeric values
  const grossIncome = Number(filteredIncomeTotal[0]?.totalIncome || 0);
  const allExpense = Number(filteredExpenseTotal[0]?.totalExpense || 0);
  const essentialExpense = Number(filteredEssentialExpenseTotal[0]?.totalExpense || 0);

  // Net income = income - essential expenses
  const netIncome = Number((grossIncome - essentialExpense).toFixed(2));
  // Saved = income - all expenses
  const saved = Number((grossIncome - allExpense).toFixed(2));

  // % of saved income relative to net income
  const savedPercentageNet = netIncome !== 0 && saved >= 0 ? Number((saved / netIncome * 100).toFixed(0)) : 0;
  // % of saved income relative to gross income
  const savedPercentageGross = grossIncome !== 0 && saved >= 0 ? Number((saved / grossIncome * 100).toFixed(0)) : 0;
  
  // Normalize against saving target — based on selected income type
  const actualPercentByTarget = savingTarget !== 0 ? Number((incomeType === 'Net Income' ? savedPercentageNet / savingTarget * 100 : savedPercentageGross / savingTarget * 100).toFixed(2)) : 0;

  // Color index by by dividing the percentage by the size of each color range and rounding to the nearest whole number.
  const colorIndex = Math.round(actualPercentByTarget/(100/colorTheme.length));

  const savingData = {
    labels: ['Saved', 'Spent'],
    datasets: [
      {
        data: [actualPercentByTarget, Math.max(100-actualPercentByTarget, 0)],
        backgroundColor: [colorTheme[Math.min(colorIndex, colorTheme.length - 1)], whiteColor],
        hoverBackgroundColor: [colorTheme[Math.min(colorIndex, colorTheme.length - 1)], whiteColor]
      }
    ]
  }

  return (
    <div className='savingindicatorcircle'>
      <h5 className='savingindicatorcircleheader' style={{fontSize: fontMap[fontSize]}}>{title? title : `Saving % By ${incomeType === 'Net Income' ? 'Net Income' : 'Gross Income'}`}</h5>
      <DonutChart 
        key={incomeType}
        chartData={savingData}
        width={width} 
        height={height} 
        centerTxt={`${actualPercentByTarget}%`} 
        fontSize="large" 
        disableLegend={true} 
        cutout="thin"
        tooltip={false}
      />
      <p style={{ fontStyle: 'italic', fontSize: fontMap[fontSize]}}>Saving Target: <span style={{ fontWeight: 'bold' }}>{savingTarget}%</span></p>
      <p style={{ fontStyle: 'italic', fontSize: fontMap[fontSize]}}>Saved Amount: <span style={{ fontWeight: 'bold' }}>${saved}</span></p>
    </div>

  );
  
}

export default SavingIndicatorCircle;
