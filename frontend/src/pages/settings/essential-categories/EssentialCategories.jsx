import React, { use, useEffect, useState } from 'react';
import useGetData from '../../../hooks/getData';
import { postData, putData, deleteData } from '../../../api/useAxios';
import './EssentialCategories.css'


const EssentialCategories = () => {
  const { data: categoriesData, loading: loadingCategories, error: errorCategories } = useGetData('categories-view');
  const { data: subcategoriesData, loading: loadingSubategories, error: errorSubategories } = useGetData('subcategories-view');

  const [categoryList, setCategoryList] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [unselectedSubcategories, setUnselectedSubcategories] = useState([]);

  useEffect(() => {
    setCategoryList(categoriesData.filter(category => category.is_expense === 1));
    setSelectedSubcategories(subcategoriesData.filter(subcategory => subcategory.is_essential === 1).map(subcategory => subcategory.id));
  }, [categoriesData, subcategoriesData]);

  const handleCheckboxChange = (event) => {
    const value = parseInt(event.target.value); // Get the id of the checkbox as an integer
    const isChecked = event.target.checked; // Check if the checkbox is checked
  
    setSelectedSubcategories((prevSelected) => {
      if (isChecked) {
        // If checked, add the value to the selected subcategories
        return [...prevSelected, value];
      } else {
        // If unchecked, remove the value from the selected subcategories
        return prevSelected.filter((id) => id !== value);
      }
    });

    setUnselectedSubcategories((prevUnselected) => {
      if (!isChecked) {
        // If checked, add the value to the selected subcategories
        return [...prevUnselected, value];
      } else {
        // If unchecked, remove the value from the selected subcategories
        return prevUnselected.filter((id) => id !== value);
      }
    });
  };


  const handleSave = async () =>{
    const compileInputs = {
      selectedSubcategoryList: selectedSubcategories,
      unselectedSubcategoryList: unselectedSubcategories
    }
    try {
      await putData('essential-categories-selected', compileInputs);
      alert('Essential category selection saved!');
    } catch (error) {
      alert('Failed to save  essential category selection.');
    }
  }

  const handleReset = () =>{
    setSelectedSubcategories([]);
  }
  
  return (
    <div className='essentialcategories'>
      <div className='essentialcategoriesheader'>
        <h1>Essential Category Setting</h1>
        <span style={{fontStyle:"italic"}}>
          <p>Edit essential category selection by checking or unchecking items.</p>
          <p>This list of selections is used to calculate Net Income.</p>
        </span>
      </div>
      {categoryList.map((category) => (
        <div key={category.id} className='categoryheader'>
          <br/>
          <h2>{category.category}</h2>
          <div className='subcategorylist'>
          {subcategoriesData
            .filter(item => item.category_id === category.id)
            .map(({ id, subcategory}) => (
                <label>
                  <input 
                    type="checkbox" 
                    value={id} 
                    checked={selectedSubcategories.includes(id)} // Conditionally pre-check if "is_essential" is 1
                    onChange={handleCheckboxChange} // Optional: You can add an onChange handler to manage checkbox state
                  />
                  {subcategory}
                </label>
            ))
          }
          </div>
        </div>
      ))}
      <div className='essentialcategoriescontrol'>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
  
}

export default EssentialCategories;