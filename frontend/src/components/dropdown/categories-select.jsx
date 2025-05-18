import './categories.css';


const CategoriesSelect = ({ categoryData, categoryIDSelected, setCategoryIDSelected, width='200px', height='35px', fontSize='14px'}) => {
  const handleCategoryChange = (event) => {
    let categoryid = parseInt(event.target.value);
    setCategoryIDSelected(categoryid);
  }

  return (
    <div className='DropDown'>
      <select 
        id="categories" 
        name="categories" 
        value={categoryIDSelected}  
        onChange={handleCategoryChange} 
        style={{
          width,
          height,
          fontSize
        }}
        required>
        <option value='0' disabled>-- Select a category --</option>
        {categoryData.map((category) => (
            <option key={category.id} value={category.id}>{category.category}</option>
        ))}
      </select>
    </div>
  );
  
}

export default CategoriesSelect;