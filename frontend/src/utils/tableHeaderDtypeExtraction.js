const getTableHeaderDtypeObject = (data) => {
  const getDataType = (value) => {
    if (!isNaN(value)) {
      return 'number';  // Can be integer or float
    } else  {
      return 'string';
    }
  };

  return (
    data.length > 0 ? Object.keys(data[0]).reduce((acc, column) => {
      // Get the first value for each column
      const columnValue = data[0][column];
      // Infer the type of the value in the first row of the column
      const columnType = getDataType(columnValue);
    
      acc[column] = columnType;
      return acc;
    }, {}) : {}
  )
};

export default getTableHeaderDtypeObject;