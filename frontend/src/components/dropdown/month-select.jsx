const MonthSelect = ({ setMonthSelected }) => {
  const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };

  const handleMonthChange = (event) => {
    let monthId = parseInt(event.target.value);
    setMonthSelected(monthId);
  }

  return (
    <div className='DropDown'>
      <select id="month" name="month" defaultValue="0"  onChange={handleMonthChange} required>
        <option value='0' disabled>-- Select a month --</option>
        {Object.entries(months).map(([label, value]) => (
          <option key={label} value={label}>{value}</option>
        ))}
      </select>
    </div>
  );
  
}

export default MonthSelect;