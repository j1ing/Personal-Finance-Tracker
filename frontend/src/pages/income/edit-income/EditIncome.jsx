import React, { useEffect, useState } from 'react';
import useGetData from '../../../hooks/getData';
import getData from '../../../api/getData';
import { postData, putData, deleteData } from '../../../api/useAxios';
import SubcategoriesSelect from '../../../components/dropdown/subcategories-select'
import CalenderSelect from '../../../components/date/calender'
import './EditIncome.css';


const EditIncome = () => {
  const { data: categoriesData, loading: loadingCategories, error: errorCategories } = useGetData('categories-view');
  const { data: subcategoriesData, loading: loadingSubategories, error: errorSubategories } = useGetData('subcategories-view');

  const [actionid, setActionid] = useState(0);
  const [findClicked, setFindClicked] = useState(false);
  const [transactionID, setTransactionID] = useState('');
  const [transactionData, setTransactionData] = useState(null);
  const [categoryID, setCategoryID] = useState(null);
  const [subcategoryIDSelected, setSubcategoryIDSelected] = useState(0);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [dateSelected, setDateSelected] = useState(undefined);

  useEffect(() => {
    if (categoriesData.length > 0) {
      setCategoryID(categoriesData.find(category => category.is_expense === 0)?.id || null);
    }
  }, [categoriesData, subcategoriesData]);

  useEffect(() => {
    if (!transactionData) return;

    const matchKey = Object.keys(subcategoriesData).find(
      key => subcategoriesData[key].subcategory === transactionData['Income Subcategory']
    )
    setSubcategoryIDSelected(subcategoriesData[matchKey]?.id);
    setAmount(transactionData['Amount']);
    setDescription(transactionData['Income Description']);
    setDateSelected(transactionData['Transaction Date']);
    
  }, [transactionData])

  useEffect(() => {
    setTransactionID('')
    setTransactionData(null)
    setFindClicked(false);
  }, [actionid])


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
  const handleDelete = async () => {
    const compileInputs = {
      id: transactionID,
    }
    try {
      const confirmDelete = window.confirm(`Are you sure you want to delete this income transaction?\nTransaction ID: ${transactionID}`);
      if (!confirmDelete) {
        return; // Do nothing if user cancels
      }
      await deleteData('income-edit', compileInputs);
      alert('Income deleted!');
      setActionid(0);
    } catch (error) {
      alert('Failed to delete income.');
    }
  }
  const handleSave = async () =>{
    const msg = validateInputs();
    const compileInputs = {
      id: transactionID,
      date: dateSelected,
      subcategory: subcategoryIDSelected,
      description: description.trim(),
      amount: amount
    }
    if (msg === ''){
      try {
        await putData('income-edit', compileInputs);
        alert('Income updated!');
      } catch (error) {
        alert('Failed to update income.');
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
        const data = await getData('transactionid', { transactionType: 'income', transactionID: Number(transactionID) });
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
    <div className='editIncome'>
      <div className='editIncomeTitle'>
        <h1>Edit Income Transaction</h1>
      </div>
      <div className='editIncomeCard'>
        <div className='editIncomeAction'>
          <p>Action:<span style={{ color: 'red', marginLeft: '4px' }}>*</span></p>
          <select 
            id="editIncomeActionList" 
            name="editIncomeActionList" 
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
          <div className='editIncomeTransactionID'>
            <p>Enter Transaction ID:<span style={{ color: 'red', marginLeft: '4px' }}>*</span></p>  
            <input type="number" id="transactionid" name="transactionid" step="1"  value={transactionID} onChange={(event) => {setTransactionID(event.target.value)}} style={{width:'750px', height:'50px', fontSize: '25px'}}/>
            <div className='editIncomeTransactionControl'>
              <button onClick={handleFind} style={{width:'100px', height:'50px', fontSize: '25px'}}>Find</button>
            </div>
          </div>
        )}
        {actionid === 1 && transactionID !== 0 && transactionData !== null ? (
          <div className='editIncomeTransactionDelete'>
            <div className='editIncomeTransactionDetail'>
              <table>
                <tbody>
                  <tr>
                    <td className='editIncomeTransactionDetailTableColumn'>Transaction ID</td>
                    <td className='editIncomeTransactionDetailTableValue'>{transactionData['Transaction ID']}</td>
                  </tr>
                  <tr>
                    <td className='editIncomeTransactionDetailTableColumn'>Transaction Date</td>
                    <td className='editIncomeTransactionDetailTableValue'>{transactionData['Transaction Date']}</td>
                  </tr>
                  <tr>
                    <td className='editIncomeTransactionDetailTableColumn'>Income Subcategory</td>
                    <td className='editIncomeTransactionDetailTableValue'>{transactionData['Income Subcategory']}</td>
                  </tr>
                  <tr>
                    <td className='editIncomeTransactionDetailTableColumn'>Income Description</td>
                    <td className='editIncomeTransactionDetailTableValue'>{transactionData['Income Description']}</td>
                  </tr>
                  <tr>
                    <td className='editIncomeTransactionDetailTableColumn'>Amount</td>
                    <td className='editIncomeTransactionDetailTableValue'>${transactionData['Amount']}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='editIncomeTransactionControl'>
              <button onClick={handleDelete} style={{width:'100px', height:'50px', fontSize: '25px'}}>Delete</button>
            </div>
          </div>
        ): actionid === 2 && transactionID !== 0 && transactionData !== null ? (
          <div className='editIncomeTransactionUpdate'>
            <div className='editIncomeInputSection'>
              <div className='editIncomeInputSectionDate'>
                <p>Date:<span style={{ color: 'red', marginLeft: '4px' }}>*</span></p>
                <CalenderSelect 
                  setDateSelected={setDateSelected} 
                  width='750px'
                  height='50px'
                  fontSize='25px'
                  value={dateSelected}
                />
              </div>
              <div className='editIncomeInputSectionSubcategory'>
                <p>Subcategory:<span style={{ color: 'red', marginLeft: '4px' }}>*</span></p>
                <SubcategoriesSelect 
                  subcategoryData={subcategoriesData.filter(subcategory => subcategory.is_expense === 0)}
                  categoryIDSelected={categoryID}
                  subcategoryIDSelected={subcategoryIDSelected}
                  setSubcategoryIDSelected={setSubcategoryIDSelected}
                  width='750px'
                  height='50px'
                  fontSize='25px'
                />
              </div>
              <div className='editIncomeInputSectionDescription'>
                <p>Description:</p>
                <input type="text" id="name" name="name"  value={description} onChange={(event) => {setDescription(event.target.value)}} style={{width:'750px', height:'50px', fontSize: '25px'}}/>
              </div>
              <div className='editIncomeInputSectionAmount'>
                <p>Amount:<span style={{ color: 'red', marginLeft: '4px' }}>*</span></p>          
                <input type="number" id="amount" name="amount" step="0.01"  value={amount} onChange={(event) => {setAmount(isNaN(parseFloat(event.target.value)) ? 0 : Math.floor(parseFloat(event.target.value) * 100) / 100)}} style={{width:'750px', height:'50px', fontSize: '25px'}}/>
              </div>
            </div>
            <div className='editIncomeTransactionControl'>
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

export default EditIncome;