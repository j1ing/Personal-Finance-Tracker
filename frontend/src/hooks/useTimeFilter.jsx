import { useState } from 'react';
import currentDatetime from '../utils/currentDatetime';

const useTimeFilter = () => {
  const current = currentDatetime();
  const [yearSelected, setYearSelected] = useState(current.year);
  const [quarterSelected, setQuarterSelected] = useState(current.quarter);
  const [monthSelected, setMonthSelected] = useState(current.month);

  return {
    yearSelected,
    setYearSelected,
    quarterSelected,
    setQuarterSelected,
    monthSelected,
    setMonthSelected
  };
};

export default useTimeFilter;