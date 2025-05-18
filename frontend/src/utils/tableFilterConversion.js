const applyFilter = (rowValue, operatorText, filterValue) => {
  const operatorMap = {
    // String operators
    'is': '===',
    'is not': '!==',
    'contains': 'includes',             // Special: use `String.prototype.includes`
    'does not contains': '!includes',   // Special: use `!String.prototype.includes`
    'starts with': 'startsWith',        // Special: use `String.prototype.startsWith`
    'ends with': 'endsWith',            // Special: use `String.prototype.endsWith`
    'is null': "=== null || === ''",               // Special: loose check for null/undefined
    'is not null': "!== null && !== ''",
  
    // Number operators
    'equals to': '===',
    'does not equal to': '!==',
    'greater than': '>',
    'less than': '<',
    'greater than or equal': '>=',
    'less than or equal': '<='
  };
  
  const op = operatorMap[operatorText];
  const convertedFilterValue = !isNaN(filterValue)? Number(filterValue) : filterValue;
  switch (op) {
    case '===':
      return rowValue === convertedFilterValue;
    case '!==':
      return rowValue !== convertedFilterValue;
    case '>':
      return rowValue > convertedFilterValue;
    case '<':
      return rowValue < convertedFilterValue;
    case '>=':
      return rowValue >= convertedFilterValue;
    case '<=':
      return rowValue <= convertedFilterValue;
    case 'includes':
      return typeof rowValue === 'string' && rowValue.includes(filterValue);
    case '!includes':
      return typeof rowValue === 'string' && !rowValue.includes(filterValue);
    case 'startsWith':
      return typeof rowValue === 'string' && rowValue.startsWith(filterValue);
    case 'endsWith':
      return typeof rowValue === 'string' && rowValue.endsWith(filterValue);
    case "=== null || === ''":
      return rowValue == null || rowValue == '';
    case "!== null && !== ''":
      return rowValue != null && rowValue != '';
    default:
      return false;
  }
};

export default applyFilter;