import './categories.css';

const GeneralSelectFilterOperator = ({ itemSelected, operatorSelected, setOperatorSelected, width='200px', height='35px', fontSize='14px' }) => {
  const operatorObj = {
    'string': ['is', 'is not', 'contains', 'does not contains', 'starts with', 'ends with', 'is null', 'is not null'],
    'number': ['equals to', 'does not equal to', 'greater than', 'less than', 'greater than or equal', 'less than or equal']
  };

  const handleOperatorChange = (event) => {
    let operator = event.target.value;
    setOperatorSelected(operator);
  };
  
  return (
    <div className='DropDown'>
      <select 
        id="operator" 
        name="operator" 
        value={operatorSelected}  
        onChange={handleOperatorChange} 
        required
        style={{
          width,
          height,
          fontSize
        }}>
        <option value='' disabled>-- Select an operator --</option>
        {itemSelected && operatorObj[itemSelected].map((operator, i) => (
            <option key={i} value={operator}>{operator}</option>
        ))}
      </select>
    </div>
  );
  
}

export default GeneralSelectFilterOperator;