import React, { useEffect, useState } from 'react';
import useGetData from '../../../hooks/getData';
import { postData, putData, deleteData } from '../../../api/useAxios';
import SubcategoriesSelect from '../../../components/dropdown/subcategories-select'
import CalenderSelect from '../../../components/date/calender'
import './AddIncome.css';


const AddIncome = () => {
  const { data: categoriesData, loading: loadingCategories, error: errorCategories } = useGetData('categories-view');
  const { data: subcategoriesData, loading: loadingSubategories, error: errorSubategories } = useGetData('subcategories-view');


  const [subcategories, setSubcategories] = useState([]);
  const [categoryID, setCategoryID] = useState(null);
  const [subcategoryIDSelected, setSubcategoryIDSelected] = useState(0);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [dateSelected, setDateSelected] = useState(undefined);

  useEffect(() => {
    if (categoriesData.length > 0) {
      setCategoryID(categoriesData.find(category => category.is_expense === 0)?.id || null);
    }
    if (subcategoriesData.length > 0) {
      setSubcategories(subcategoriesData);
    }
  }, [categoriesData, subcategoriesData]);

  const validateInputs = () => {
    let msg = '';
    const today = new Date().toISOString().split('T')[0]; 
    if (dateSelected === undefined || dateSelected > today){
      msg += 'Please select a valid date\n';
    }
    if (subcategoryIDSelected === 0){
      msg += 'Please select a valid subcategory\n';
    }
    if (amount === 0){
      msg += 'Please enter a valid amount\n';
    }
    return msg
  }

  const handleAdd = async () =>{
    const msg = validateInputs();
    const compileInputs = {
      date: dateSelected,
      subcategory: subcategoryIDSelected,
      description: description.trim(),
      amount: amount
    }
    if (msg === ''){
      try {
        await putData('income-add', compileInputs);
        alert('Income added!');
      } catch (error) {
        alert('Failed to add income.');
      }
    }
    else {
      window.alert(msg)
    }
  }

  
  return (
    <div className='addIncome'>
      <div className='addIncomeTitle'>
        <h1>Add Income Transaction</h1>
      </div>
      <div className='addIncomeCard'>
        <div className='addIncomeInputSection'>
          <div className='addIncomeInputSectionDate'>
            <p>Date:<span style={{ color: 'red', marginLeft: '4px' }}>*</span></p>
            <CalenderSelect 
              setDateSelected={setDateSelected} 
              width='750px'
              height='50px'
              fontSize='25px'/>
          </div>
          <div className='addIncomeInputSectionSubcategory'>
            <p>Subcategory:<span style={{ color: 'red', marginLeft: '4px' }}>*</span></p>
            <SubcategoriesSelect 
              subcategoryData={subcategories.filter(subcategory => subcategory.is_expense === 0)}
              categoryIDSelected={categoryID}
              subcategoryIDSelected={subcategoryIDSelected}
              setSubcategoryIDSelected={setSubcategoryIDSelected}
              width='750px'
              height='50px'
              fontSize='25px'
            />
          </div>
          <div className='addIncomeInputSectionDescription'>
            <p>Description:</p>
            <input type="text" id="name" name="name" onChange={(event) => {setDescription(event.target.value)}} style={{width:'750px', height:'50px', fontSize: '25px'}}/>
          </div>
          <div className='addIncomeInputSectionAmount'>
            <p>Amount:<span style={{ color: 'red', marginLeft: '4px' }}>*</span></p>          
            <input type="number" id="amount" name="amount" step="0.01" onChange={(event) => {setAmount(isNaN(parseFloat(event.target.value)) ? 0 : Math.floor(parseFloat(event.target.value) * 100) / 100)}} style={{width:'750px', height:'50px', fontSize: '25px'}}/>
          </div>
        </div>
        <div className='addIncomeControl'>
          <button onClick={handleAdd} style={{width:'100px', height:'50px', fontSize: '25px'}}>Add</button>
        </div>
      </div>
    </div>
  );
  
}

export default AddIncome;