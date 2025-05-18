import './calender.css';


const CalenderSelect = ({ setDateSelected,  width='200px', height='35px', fontSize='14px', value }) => {
  return (
    <div className='calender'>
      <input 
        type="date" 
        id="date" 
        name="date" 
        value={value}
        onChange={(event) => {setDateSelected(event.target.value)}}
        style={{
          width,
          height,
          fontSize
        }}>
      </input>
    </div>
  );
}

export default CalenderSelect;