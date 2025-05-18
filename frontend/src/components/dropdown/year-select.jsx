const YearSelect = ({ setYearSelected }) => {
  const years = Array.from({ length: 20 }, (_, i) => 2025 + i);

  const handleYearChange = (event) => {
    let yearId = parseInt(event.target.value);
    setYearSelected(yearId);
  }

  return (
    <div className='DropDown'>
      <select id="year" name="year" defaultValue="0"  onChange={handleYearChange} required>
        <option value='0' disabled>-- Select a year --</option>
        {years.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
  );
  
}

export default YearSelect;