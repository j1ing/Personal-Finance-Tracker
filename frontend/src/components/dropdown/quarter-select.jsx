const QuarterSelect = ({ setQuarterSelected }) => {
  const quarters = {
    1: 'Q1',
    2: 'Q2',
    3: 'Q3',
    4: 'Q4'
  }

  const handleQuarterChange = (event) => {
    let quarterId = parseInt(event.target.value);
    setQuarterSelected(quarterId);
  }

  return (
    <div className='DropDown'>
      <select id="quarter" name="quarter" defaultValue="0"  onChange={handleQuarterChange} required>
        <option value='0' disabled>-- Select a quarter --</option>
        {Object.entries(quarters).map(([label, value]) => (
          <option key={label} value={label}>{value}</option>
        ))}
      </select>
    </div>
  );
  
}

export default QuarterSelect;