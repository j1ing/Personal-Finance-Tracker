import './personnel.css';


const PersonnelSelect = ({ personnelData, personnelIDSelected, setPersonnelIDSelected, width='200px', height='35px', fontSize='14px' }) => {
  const handlePersonnelChange = (event) => {
    let personnelid = parseInt(event.target.value);
    setPersonnelIDSelected(personnelid);
  }

  return (
    <div className='DropDown'>
      <select 
        id="personnel" 
        name="personnel" 
        value={personnelIDSelected}  
        onChange={handlePersonnelChange} 
        style={{
          width,
          height,
          fontSize
        }}>
        <option value='0' disabled>-- Select a person --</option>
        {personnelData.map((personnel) => (
            <option key={personnel.id} value={personnel.id}>{personnel.name}</option>
        ))}
      </select>
    </div>
  );
  
}

export default PersonnelSelect;