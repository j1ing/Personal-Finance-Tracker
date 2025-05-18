/**
 * Filters data based on year, quarter, and month depending on the given time frame.
 *
 * @param {Array} data - The data to be filtered.
 * @param {'all-time'|'ytd'|'yearly'|'quarterly'|'monthly'} timeFrame - Time filter type.
 * @param {number} [year] - Selected year.
 * @param {number} [quarter] - Selected quarter (1–4).
 * @param {number} [month] - Selected month (1–12).
 * @returns {Array} Filtered data array.
 */

const filterDataByTimeFrame = (data, timeFrame, year, quarter, month) => {
  if (['all-time','ytd'].includes(timeFrame)){
    return data
  }    
  return data.filter((item) => {
    if (timeFrame === 'yearly'){
      return item.year === year;
    }
    else if (timeFrame === 'quarterly'){
      return item.year === year && item.quarter === quarter;
    }
    else if (timeFrame === 'monthly') {
      return item.year === year && item.month === month;
    }
    return false;
  })
};

export default filterDataByTimeFrame;