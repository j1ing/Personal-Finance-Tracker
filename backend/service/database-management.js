const databaseModel = require('../model/database-management'); 

const updateObjMapping = {
  Category: {
    Add: ['AssignedType','NewName'], //from config.Group.Action.name
    Delete: ['DeleteName'],
    Rename: ['RenameFrom', 'RenameTo']
  },
  Subcategory: {
    Add: ['AssignedType','NewName'],
    Delete: ['DeleteName'],
    Rename: ['RenameFrom', 'RenameTo']
  },
  Personnel: {
    Add: ['NewName'],
    Delete: ['DeleteName'],
    Rename: ['RenameFrom', 'RenameTo']
  }
};

const validateRequest = (updateRequestObj) => {
  console.log('at validateRequest');
  const group = updateRequestObj.Group;
  const action = updateRequestObj.Action;

  if (group === undefined || action === undefined){
    throw new Error(`Neither Group nor Action can be undefined. Received Group: ${group}; Action: ${action}`);
  } 
  else {
    const expectedValueTypeList = updateObjMapping[group][action];
    let missingKeyList = [];
    for (let i=0; i < expectedValueTypeList.length; i++) {
      if (updateRequestObj[expectedValueTypeList[i]] === undefined){
        missingKeyList.push(expectedValueTypeList[i]);
      }
    }
    if (missingKeyList.length > 0){
      throw new Error('The following keys are missing from the request:' + missingKeyList.join(', '));
    }
  }
};

const databaseModelMap = {
    Category : {
      Add: databaseModel.addNewCategory,
      Delete: databaseModel.deleteCategory,
      Rename: databaseModel.renameCategory,
    },
    Subcategory: {
      Add: databaseModel.addNewSubcategory,
      Delete: databaseModel.deleteSubcategory,
      Rename: databaseModel.renameSubcategory,
    },
    Personnel: {
      Add: databaseModel.addNewPersonnel,
      Delete: databaseModel.deletePersonnel,
      Rename: databaseModel.renamePersonnel,
    }
};

const validateDBIfExists = async (updateRequestObj) =>{
  console.log('at validateDBIfExists');
  const group = updateRequestObj.Group;
  const action = updateRequestObj.Action;
  let value;
  switch (action) {
    case 'Add':
      value = updateRequestObj.NewName;
      break;
    case 'Rename':
      value = updateRequestObj.RenameTo;
      break;
    default:
      value = undefined;
  }

  if (value != undefined) {
    const result = await databaseModel.ifExist(value);
    return result;
  }  
  return [];
};

const validateDBDependency = async (updateRequestObj) => {
  console.log('at validateDBDependency');
  const group = updateRequestObj.Group;
  const action = updateRequestObj.Action;
  let result;
  switch (group) {
    case 'Category':
      console.log('at validateDBDependency Category');
      result = await databaseModel.hasChildrenCategory(updateRequestObj.DeleteName);
      console.log(result);
      break;
    case 'Subcategory':
      result = await databaseModel.hasChildrenSubcategory(updateRequestObj.DeleteName);
      break;
    case 'Personnel':
      result = await databaseModel.hasChildrenPersonnel(updateRequestObj.DeleteName);
      break;
    default:
      result = [false];
  }
  return result;
};

const selectService = async (updateRequestObj) => {
  console.log('at model');
  const group = updateRequestObj.Group;
  const action = updateRequestObj.Action;
  const selectedModel = databaseModelMap[group][action];
  const valueKeys  = updateObjMapping[group][action];
  const valueObj = Object.fromEntries(
    valueKeys.map(key => [key, updateRequestObj[key]])
  );
  
  return await selectedModel(valueObj);
};

const updateDatabase = async (updateRequestObj) => {
  console.log('at service');
  try {
    validateRequest(updateRequestObj);
    const resultExists = await validateDBIfExists(updateRequestObj);
    if (resultExists.length != 0) {
      throw new Error('Requested new name already exists. Cannot assign new name.');
    }
    const resultChildren = await validateDBDependency(updateRequestObj);
    if (resultChildren.length != 0) {
      console.log('Requested group cannot be delete due to child record exists.')
      throw new Error('Requested group cannot be deleted due to child record exists.');
    }
    await selectService(updateRequestObj);
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
};


module.exports = {
  updateDatabase
};