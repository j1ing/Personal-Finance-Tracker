import React, { useEffect, useState, useRef } from 'react';
import useGetData from '../../../hooks/getData';
import getData from '../../../api/getData';
import { postData, putData, deleteData } from '../../../api/useAxios';
import CategoriesSelect from '../../../components/dropdown/categories-select'
import SubcategoriesSelect from '../../../components/dropdown/subcategories-select'
import PersonnelSelect from '../../../components/dropdown/personnel-select'
import CalenderSelect from '../../../components/date/calender'
import './EditExpense.css';


const EditExpense = () => {
  const { data: categoriesData, loading: loadingCategories, error: errorCategories } = useGetData('categories-view');
  const { data: subcategoriesData, loading: loadingSubategories, error: errorSubategories } = useGetData('subcategories-view');
  const { data: personnelData, loading: loadingPersonnel, error: errorPersonnel } = useGetData('personnel-view');

  const categoryChangedByUser = useRef(false);
  const [actionid, setActionid] = useState(0);
  const [findClicked, setFindClicked] = useState(false);
  const [transactionID, setTransactionID] = useState('');
  const [transactionData, setTransactionData] = useState(null);
  const [dateSelected, setDateSelected] = useState(undefined);
  const [categoryIDSelected, setCategoryIDSelected] = useState(0);
  const [subcategoryIDSelected, setSubcategoryIDSelected] = useState(0);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [personnelIDSelected, setPersonnelIDSelected] = useState(0);

  useEffect(() => {
    if (categoriesData.length > 0) {
      setCategoryIDSelected(categoriesData.find(category => category.is_expense === 1)?.id || null);
    }
  }, [categoriesData]);

  useEffect(() => {
    if (!transactionData) return;

    const matchKeyCategory = Object.keys(categoriesData).find(
      key => categoriesData[key].category === transactionData['Expense Category']
    )
    setCategoryIDSelected(categoriesData[matchKeyCategory]?.id);

    const matchKeySubcategory = Object.keys(subcategoriesData).find(
      key => subcategoriesData[key].subcategory === transactionData['Expense Subcategory']
    )
    setSubcategoryIDSelected(subcategoriesData[matchKeySubcategory]?.id);

    const matchKeyPersonnel = Object.keys(personnelData).find(
      key => personnelData[key].name === transactionData['Personnel']
    )
    setPersonnelIDSelected(personnelData[matchKeyPersonnel]?.id);

    setAmount(transactionData['Amount']);
    setDescription(transactionData['Expense Description']);
    setDateSelected(transactionData['Transaction Date']);
    
  }, [transactionData])

  useEffect(() => {
    setTransactionID('')
    setTransactionData(null)
    setFindClicked(false);
  }, [actionid])

  // when user manually selects a category
  const handleCategoryChange = (newCategoryID) => {
    categoryChangedByUser.current = true;
    setCategoryIDSelected(newCategoryID);
  };

  useEffect(() => {
    if (categoryChangedByUser.current) {
      setSubcategoryIDSelected(0);
      categoryChangedByUser.current = false;
    }
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
  const handleDelete = async () => {
    const compileInputs = {
      id: transactionID,
    }
    try {
      const confirmDelete = window.confirm(`Are you sure you want to delete this expense transaction?\nTransaction ID: ${transactionID}`);
      if (!confirmDelete) {
        return; // Do nothing if user cancels
      }
      await deleteData('expense-edit', compileInputs);
      alert('Expense deleted!');
      setActionid(0);
    } catch (error) {
      alert('Failed to delete expense.');
    }
  }
  const handleSave = async () =>{
    const msg = validateInputs();
    const compileInputs = {
      id: transactionID,
      date: dateSelected,
      category: categoryIDSelected,
      subcategory: subcategoryIDSelected,
      description: description.trim(),
      amount: amount,
      person: personnelIDSelected
    }
    if (msg === ''){
      try {
        await putData('expense-edit', compileInputs);
        alert('Expense updated!');
      } catch (error) {
        alert('Failed to update expense.');
      }
    }
    else {
      window.alert(msg)
    }
  }

  const handleActionChange = (event) => {
    let id = parseInt(event.target.value);
    setActionid(id);
  }

  const handleFind = async () => {
    try {
      setFindClicked(true);
      if (Number.isInteger(Number(transactionID))){
        const data = await getData('transactionid', { transactionType: 'expense', transactionID: Number(transactionID) });
        setTransactionData(data);
      }
      else {
        setTransactionData(null);
      }
      
    } catch (error) {
      console.error('Error fetching transaction:', error);
    }
  }
  
  return (
    <div className='editExpense'>
      <div className='editExpenseTitle'>
        <h1>Edit Expense Transaction</h1>
      </div>
      <div className='editExpenseCard'>
        <div className='editExpenseAction'>
          <p>Action:<span style={{ color: 'red', marginLeft: '4px' }}>*</span></p>
          <select 
            id="editExpenseActionList" 
            name="editExpenseActionList" 
            value={actionid}  
            onChange={handleActionChange} 
            style={{width:'750px', height:'50px', fontSize: '25px'}}
          >
              <option value='0' disabled={true}>-- Select an action --</option>
              <option key={1} value={1}>Delete transaction</option>
              <option key={2} value={2}>Update transaction</option>
          </select>
        </div>
        {actionid !== 0 && (
          <div className='editExpenseTransactionID'>
            <p>Enter Transaction ID:<span style={{ color: 'red', marginLeft: '4px' }}>*</span></p>  
            <input type="number" id="transactionid" name="transactionid" step="1"  value={transactionID} onChange={(event) => {setTransactionID(event.target.value)}} style={{width:'750px', height:'50px', fontSize: '25px'}}/>
            <div className='editExpenseTransactionControl'>
              <button onClick={handleFind} style={{width:'100px', height:'50px', fontSize: '25px'}}>Find</button>
            </div>
          </div>
        )}
        {actionid === 1 && transactionID !== 0 && transactionData !== null ? (
          <div className='editExpenseTransactionDelete'>
            <div className='editExpenseTransactionDetail'>
              <table>
                <tbody>
                  <tr>
                    <td className='editExpenseTransactionDetailTableColumn'>Transaction ID</td>
                    <td className='editExpenseTransactionDetailTableValue'>{transactionData['Transaction ID']}</td>
                  </tr>
                  <tr>
                    <td className='editExpenseTransactionDetailTableColumn'>Transaction Date</td>
                    <td className='editExpenseTransactionDetailTableValue'>{transactionData['Transaction Date']}</td>
                  </tr>
                  <tr>
                    <td className='editExpenseTransactionDetailTableColumn'>Expense Category</td>
                    <td className='editExpenseTransactionDetailTableValue'>{transactionData['Expense Category']}</td>
                  </tr>
                  <tr>
                    <td className='editExpenseTransactionDetailTableColumn'>Expense Subcategory</td>
                    <td className='editExpenseTransactionDetailTableValue'>{transactionData['Expense Subcategory']}</td>
                  </tr>
                  <tr>
                    <td className='editExpenseTransactionDetailTableColumn'>Expense Description</td>
                    <td className='editExpenseTransactionDetailTableValue'>{transactionData['Expense Description']}</td>
                  </tr>
                  <tr>
                    <td className='editExpenseTransactionDetailTableColumn'>Amount</td>
                    <td className='editExpenseTransactionDetailTableValue'>${transactionData['Amount']}</td>
                  </tr>
                  <tr>
                    <td className='editExpenseTransactionDetailTableColumn'>Personnel</td>
                    <td className='editExpenseTransactionDetailTableValue'>{transactionData['Personnel']}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='editExpenseTransactionControl'>
              <button onClick={handleDelete} style={{width:'100px', height:'50px', fontSize: '25px'}}>Delete</button>
            </div>
          </div>
        ): actionid === 2 && transactionID !== 0 && transactionData !== null ? (
          <div className='editExpenseTransactionUpdate'>
            <div className='editExpenseInputSection'>
              <div className='editExpenseInputSectionDate'>
                <p>Date:<span style={{ color: 'red', marginLeft: '4px' }}>*</span></p>
                <CalenderSelect 
                  setDateSelected={setDateSelected} 
                  width='750px'
                  height='50px'
                  fontSize='25px'
                  value={dateSelected}
                />
              </div>
              <div className='editExpenseInputSectionCategory'>
                <p>Category:<span style={{ color: 'red', marginLeft: '4px' }}>*</span></p>
                <CategoriesSelect 
                  categoryData={categoriesData.filter(category => category.is_expense === 1)}
                  categoryIDSelected={categoryIDSelected}
                  setCategoryIDSelected={handleCategoryChange}
                  width='750px'
                  height='50px'
                  fontSize='25px'
                />
              </div>
              <div className='editExpenseInputSectionSubcategory'>
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
              <div className='editExpenseInputSectionDescription'>
                <p>Description:</p>
                <input type="text" id="name" name="name"  value={description} onChange={(event) => {setDescription(event.target.value)}} style={{width:'750px', height:'50px', fontSize: '25px'}}/>
              </div>
              <div className='editExpenseInputSectionAmount'>
                <p>Amount:<span style={{ color: 'red', marginLeft: '4px' }}>*</span></p>          
                <input type="number" id="amount" name="amount" step="0.01"  value={amount} onChange={(event) => {setAmount(isNaN(parseFloat(event.target.value)) ? 0 : Math.floor(parseFloat(event.target.value) * 100) / 100)}} style={{width:'750px', height:'50px', fontSize: '25px'}}/>
              </div>
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
            <div className='editExpenseTransactionControl'>
              <button onClick={handleSave} style={{width:'100px', height:'50px', fontSize: '25px'}}>Save</button>
            </div>
          </div>
        ): transactionData === null && findClicked === true ?(<p>No Transaction Found.</p>)
        :(<br/>)
        }
      </div>
    </div>
  );
  
}

export default EditExpense;