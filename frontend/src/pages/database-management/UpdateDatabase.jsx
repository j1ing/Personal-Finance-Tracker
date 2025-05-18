import React, { useEffect, useState, useRef } from 'react';
import useGetData from '../../hooks/getData';
import { postData, putData, deleteData } from '../../api/useAxios';
import GeneralSelect from '../../components/dropdown/general-select';
import config from '../../utils/updateDBOperationConfig';
import concateCategoriesWithSubcategories from '../../utils/concateCategorySubCategory';
import './UpdateDatabase.css';


const UpdateDatabase = () => {
  const { data: categoriesData, loading: loadingCategories, error: errorCategories, refetch: refechCategories } = useGetData('categories-view');
  const { data: subcategoriesData, loading: loadingSubategories, error: errorSubategories, refetch: refechSubcategories } = useGetData('subcategories-view');
  const { data: personnelData, loading: loadingPersonnel, error: errorPersonnel, refetch: refechPersonnel } = useGetData('personnel-view');

  const mergedSubcatgoryData = concateCategoriesWithSubcategories(categoriesData, subcategoriesData);
  const categoryList = categoriesData.map(item => item.category).sort();
  const subCategoryList = mergedSubcatgoryData.map(item => item.concatedName).sort();
  const personnelList = personnelData.map(item => item.name).sort();
  const operationConfig = config(categoryList, subCategoryList, personnelList);

  
  const [groupSelected, setGroupSelected] = useState('');
  const [actionSelected, setActionSelected] = useState('');
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setActionSelected('');
  }, [groupSelected]);

  useEffect(() => {
    setFormData({});
  }, [actionSelected]);

  const validateInputs = () => {
    let msg = '';
    console.log(formData)
    console.log(Object.keys(formData).length === 0);
    if (groupSelected === ''){
      msg += 'Please select a valid group\n';
    }
    if (actionSelected === ''){
      msg += 'Please select a valid action\n';
    }
    if (Object.keys(formData).length === 0) {
      console.log(operationConfig[groupSelected][actionSelected])
      msg += 'No values submitted\n';
    }
    else {
      operationConfig[groupSelected][actionSelected].forEach((item)=>{
        const value = formData[item.name]
        if (
          value === '' ||
          value === undefined ||
          value === null ||
          !isNaN(value)
        ) {
          msg += `Please input a valid value for "${item.label}"\n`;
        }
      })
    }
    return msg
  };

  const translateInput = () =>{
    if(groupSelected === 'Category'){
      if(actionSelected === 'Add'){
        return {NewName: formData.NewName, AssignedType: 1};
      }
      else if (actionSelected === 'Delete'){
        const id = categoriesData.find(item => item.category === formData.DeleteName).id;
        return {DeleteName: id};
      }
      else if (actionSelected === 'Rename'){
        const renameFromID = categoriesData.find(item => item.category === formData.RenameFrom).id;
        return {RenameFrom: renameFromID, RenameTo:formData.RenameTo};
      }
      else {
        return {};
      }
    }
    else if(groupSelected === 'Subcategory'){
      if(actionSelected === 'Add'){
        const assignedType = categoriesData.find(item => item.category === formData.AssignedType).id;
        return {NewName: formData.NewName, AssignedType: assignedType};
      }
      else if (actionSelected === 'Delete'){
        const id = mergedSubcatgoryData.find(item => item.concatedName === formData.DeleteName).id;
        return {DeleteName: id};
      }
      else if (actionSelected === 'Rename'){
        const renameFromID = mergedSubcatgoryData.find(item => item.concatedName === formData.RenameFrom).id;
        return {RenameFrom: renameFromID, RenameTo:formData.RenameTo};
      }
      else {
        return {};
      }
    }
    else if(groupSelected === 'Personnel'){
      if(actionSelected === 'Add'){
        return {NewName: formData.NewName};
      }
      else if (actionSelected === 'Delete'){
        const id = personnelData.find(item => item.name === formData.DeleteName).id;
        return {DeleteName: id};
      }
      else if (actionSelected === 'Rename'){
        const renameFromID = personnelData.find(item => item.name === formData.RenameFrom).id;
        return {RenameFrom: renameFromID, RenameTo:formData.RenameTo};
      }
      else {
        return {};
      }
    }
    else {
      return {};
    }
  };

  const handleSubmit = async () =>{
    const msg = validateInputs();
    if (msg === '') {
      const translatedObj = translateInput();
      const compileInputs = {
        Group: groupSelected,
        Action: actionSelected,
        ...formData
      };
      console.log(compileInputs)
      const translatedInputs = {
        Group: groupSelected,
        Action: actionSelected,
        ...translatedObj
      };
      console.log(translatedInputs);
    
      const confirmRequest = window.confirm(
        'Please confirm and review the following service request:\n\n' +
        Object.entries(compileInputs).map(([key, value]) => `${key}:  ${value}`).join('\n')
      );
      if (!confirmRequest) {
        return; // Do nothing if user cancels
      }
      try {
        await putData('update-database', translatedInputs);
        alert('Request has been successfully executed!');
        setFormData({});
        refechCategories();
        refechPersonnel();
        refechSubcategories();
      } catch (error) {
        const errorMessage = error.response?.data?.error || error.message || 'Unknown error';
        alert('Failed to execute update request.\n' + errorMessage);
      }
    }
    else {
      window.alert(msg)
    }
  };

  return (
    <div className='editExpense'>
      <div className='editExpenseTitle'>
        <h1>Update Database</h1>
      </div>
      <div className='editExpenseCard'>
        <div className='editExpenseAction'>
          <p>Manage Group:<span style={{ color: 'red', marginLeft: '4px' }}>*</span></p>
          <GeneralSelect 
            itemList={Object.keys(operationConfig).sort()} 
            itemSelected={groupSelected} 
            setItemSelected={setGroupSelected} 
            placeholder='-- Select a group --'
            width='750px'
            height='50px'
            fontSize='25px'
          />
        </div>
        {groupSelected !== '' && (
          <div className='editExpenseAction'>
            <p>Action:<span style={{ color: 'red', marginLeft: '4px'}}>*</span></p>
            <GeneralSelect 
              itemList={Object.keys(operationConfig[groupSelected]).sort()} 
              itemSelected={actionSelected} 
              setItemSelected={setActionSelected} 
              placeholder='-- Select an action --'
              width='750px'
              height='50px'
              fontSize='25px'
            />
          </div>
        )}
        {actionSelected !== '' && operationConfig[groupSelected][actionSelected].map((item, index) => {
            if (item.type === 'select') {
              return (
                <div key={index}>
                  <p>{item.label}:<span style={{ color: 'red', marginLeft: '4px'}}>*</span></p>
                  <GeneralSelect 
                    itemList={item.itemList.sort()} 
                    itemSelected={formData[item.name] || ''} 
                    setItemSelected={(val) => setFormData(prev => ({ ...(prev || {}), [item.name]: val }))}
                    placeholder='-- Select an item --'
                    width='750px'
                    height='50px'
                    fontSize='25px'
                  />
                </div>
            )}
            else if (item.type === 'input') {
              return (
                <div key={index}>
                  {groupSelected === 'Subcategory' && actionSelected === 'Rename' ? (
                    <div>
                      <p style={{marginBottom:0, paddingBottom:0}}>{item.label}:<span style={{ color: 'red', marginLeft: '4px'}}>*</span></p>
                      <p style={{fontSize:"15px", marginTop:0, paddingTop:0}}>Note: Listed subcategories are shown as <strong>Category/ Subcategory</strong>. Only enter new name for subcategory.</p>
                    </div>
                  ) : (
                    <p>{item.label}:<span style={{ color: 'red', marginLeft: '4px'}}>*</span></p>
                  )}                  
                  <input 
                    type="text" 
                    id="name" 
                    name="name"  
                    value={formData[item.name] || ''} 
                    onChange={(event) => setFormData(prev => ({ ...(prev || {}), [item.name]: event.target.value }))}
                    style={{width:'750px', height:'50px', fontSize: '25px'}}
                  />
                </div>
              )
            }
        })}
        {actionSelected !== '' && (
          <div className='editExpenseTransactionControl'>
            <button onClick={handleSubmit} style={{width:'150px', height:'50px', fontSize: '25px'}}>{actionSelected}</button>
          </div>
        )}
      </div>
    </div>
  );
  
}

export default UpdateDatabase;