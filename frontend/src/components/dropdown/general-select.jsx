import './categories.css';

const GeneralSelect = ({ itemList, itemSelected, setItemSelected, placeholder='-- Select an item --', width='200px', height='35px', fontSize='14px'}) => {

  const handleItemChange = (event) => {
    let item = event.target.value;
    setItemSelected(item);
  };

  return (
    <div className='DropDown'>
      <select 
        id="item" 
        name="item" 
        value={itemSelected}  
        onChange={handleItemChange} 
        required
        style={{
          width,
          height,
          fontSize
        }}
      >
        <option value='' disabled>{placeholder}</option>
        {itemList && itemList.map((item, i) => (
            <option key={i} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
  
}

export default GeneralSelect;