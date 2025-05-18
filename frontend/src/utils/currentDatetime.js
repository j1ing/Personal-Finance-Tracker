const currentDatetime = () => {
  return {
    year: new Date().getFullYear(),
    quarter: Math.floor((new Date().getMonth() + 3) / 3),  // Determine current quarter (1-4)
    month: new Date().getMonth() + 1 // Determine current month (1-12)
  }
};

export default currentDatetime;