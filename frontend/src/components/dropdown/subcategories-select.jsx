import './subcategories.css';


const SubcategoriesSelect = ({ subcategoryData, categoryIDSelected, subcategoryIDSelected, setSubcategoryIDSelected, width='200px', height='35px', fontSize='14px' }) => {

  const subcategoryList  = subcategoryData
    .filter(item => item.category_id === categoryIDSelected)
    .map(({ id, subcategory }) => ({ id, subcategory }));

  const handleSubCategoryChange = (event) => {
    let subcategoryid = parseInt(event.target.value);
    setSubcategoryIDSelected(subcategoryid);
  }

  return (
    <div className='DropDown'>
      <select 
        id="subcategories" 
        name="subcategories" 
        value={subcategoryIDSelected}  
        onChange={handleSubCategoryChange} 
        style={{
          width,
          height,
          fontSize
        }}>
        <option value='0' disabled>-- Select a subcategory --</option>
        {subcategoryList.map((subcategory) => (
            <option key={subcategory.id} value={subcategory.id}>{subcategory.subcategory}</option>
        ))}
      </select>
    </div>
  );
  
}

export default SubcategoriesSelect;