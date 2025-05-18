import React, { useEffect, useState } from 'react';
import useGetData from '../../../hooks/getData';
import { postData, putData, deleteData } from '../../../api/useAxios';
import CategoriesSelect from '../../../components/dropdown/categories-select'
import SubcategoriesSelect from '../../../components/dropdown/subcategories-select'
import PersonnelSelect from '../../../components/dropdown/personnel-select'
import CalenderSelect from '../../../components/date/calender'
import './AddExpense.css';


const AddExpense = () => {
  const { data: categoriesData, loading: loadingCategories, error: errorCategories } = useGetData('categories-view');
  const { data: subcategoriesData, loading: loadingSubategories, error: errorSubategories } = useGetData('subcategories-view');
  const { data: personnelData, loading: loadingPersonnel, error: errorPersonnel } = useGetData('personnel-view');

  const [categoryIDSelected, setCategoryIDSelected] = useState(0);
  const [subcategoryIDSelected, setSubcategoryIDSelected] = useState(0);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [personnelIDSelected, setPersonnelIDSelected] = useState(0);
  const [dateSelected, setDateSelected] = useState(undefined);


  useEffect(() => {
    setSubcategoryIDSelected(0);
    setPersonnelIDSelected(0);
  }, [categoryIDSelected]);



  const validateInputs = () => {
    let msg = '';
    const today = new Date().toISOString().split('T')[0]; 
    if (dateSelected === undefined || dateSelected > today){
      msg += 'Please select a valid date\n';
    }
    if (categoryIDSelected === 0){
      msg += 'Please select a valid category\n';
    }
    if (subcategoryIDSelected === 0){
      msg += 'Please select a valid subcategory\n';
    }
    if (amount === 0){
      msg += 'Please enter a valid amount\n';
    }
    if (personnelIDSelected === 0){
      msg += 'Please select a valid person\n';
    }
    return msg
  }

  const handleAdd = async () =>{
    const msg = validateInputs();
    const compileInputs = {
      date: dateSelected,
      category: categoryIDSelected,
      subcategory: subcategoryIDSelected,
      description: description.trim(),
      amount: amount,
      person: personnelIDSelected
    }
    if (msg === ''){
      try {
        await putData('expense-add', compileInputs);
        alert('Expense added!');
      } catch (error) {
        alert('Failed to add expense.');
      }
    }
    else {
      window.alert(msg)
    }
  }
  
  return (
    <div className='addExpense'>
      <div className='addExpenseTitle'>
        <h1>Add Expense Transaction</h1>
      </div>
      <div className='addExpenseCard'>
        <div className='addExpenseInputSection'>
          <div className='addExpenseInputSectionDate'>
            <p>Date:<span style={{ color: 'red', marginLeft: '4px' }}>*</span></p>
            <CalenderSelect 
              setDateSelected={setDateSelected} 
              width='750px'
              height='50px'
              fontSize='25px'/>
          </div>
          <div className='addExpenseInputSectionCategory'>
            <p>Category:<span style={{ color: 'red', marginLeft: '4px' }}>*</span></p>
            <CategoriesSelect 
              categoryData={categoriesData.filter(category => category.is_expense === 1)}
              categoryIDSelected={categoryIDSelected}
              setCategoryIDSelected={setCategoryIDSelected}
              width='750px'
              height='50px'
              fontSize='25px'
            />
          </div>
          <div className='addExpenseInputSectionSubcategory'>
            <p>Subcategory:<span style={{ color: 'red', marginLeft: '4px' }}>*</span></p>
            <SubcategoriesSelect 
              subcategoryData={subcategoriesData.filter(subcategory => subcategory.is_expense === 1)}
              categoryIDSelected={categoryIDSelected}
              subcategoryIDSelected={subcategoryIDSelected}
              setSubcategoryIDSelected={setSubcategoryIDSelected}
              width='750px'
              height='50px'
              fontSize='25px'
            />
          </div>
          <div className='addExpenseInputSectionDescription'>
            <p>Description:</p>
            <input type="text" id="name" name="name" onChange={(event) => {setDescription(event.target.value)}} style={{width:'750px', height:'50px', fontSize: '25px'}}/>
          </div>
          <div className='addExpenseInputSectionAmount'>
            <p>Amount:<span style={{ color: 'red', marginLeft: '4px' }}>*</span></p>          
            <input type="number" id="amount" name="amount" step="0.01" onChange={(event) => {setAmount(isNaN(parseFloat(event.target.value)) ? 0 : Math.floor(parseFloat(event.target.value) * 100) / 100)}} style={{width:'750px', height:'50px', fontSize: '25px'}}/>
          </div>
          <div className='addExpenseInputSectionPerson'>
            <p>Personnel:<span style={{ color: 'red', marginLeft: '4px' }}>*</span></p>
            <PersonnelSelect 
              personnelData={personnelData}
              personnelIDSelected={personnelIDSelected}
              setPersonnelIDSelected={setPersonnelIDSelected}
              width='750px'
              height='50px'
              fontSize='25px'
            />
          </div>
        </div>
        <div className='addExpenseControl'>
          <button onClick={handleAdd} style={{width:'100px', height:'50px', fontSize: '25px'}}>Add</button>
        </div>
      </div>
    </div>
  );
  
}

export default AddExpense;