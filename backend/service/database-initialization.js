const databaseSetupModel = require('../model/database-setup'); 
const databaseCheckModel = require('../model/database-setup-checking');
const databaseDemoDataExpenseModel = require('../model/database-setup-demo-data-expense');
const databaseDemoDataIncomeModel = require('../model/database-setup-demo-data-income');
const databaseSetupDefaultModel = require('../model/database-setup-default-data');

const createTable = (tableName, db) => {
  if (!/^[a-zA-Z0-9_]+$/.test(tableName)) {
    throw new Error('Invalid table name');
  }
};

const dbCheck = async (db) => {
  const result = await databaseCheckModel.checkIfDBExist(db);
  return result.length > 0;
}

const dbBuild = async (db) => {
  try {
    await databaseSetupModel.createDB(db);
    await databaseSetupModel.createCategory(db);
    await databaseSetupModel.createSubcategory(db);
    await databaseSetupModel.createPersonnel(db);
    await databaseSetupModel.createExpenseTracker(db);
    await databaseSetupModel.createIncomeTracker(db);
    await databaseSetupModel.createExpenseReportVW(db);
    await databaseSetupModel.createIncomeReportVW(db);
  } catch (error) {
    throw new Error(`❌ Failed to build database [${db}]: \n${error}`);
  }
};

const insertDefaultData = async (db) => {
  try {
    await databaseSetupDefaultModel.insertPersonnel(db);
    await databaseSetupDefaultModel.insertCategories(db);
    await databaseSetupDefaultModel.insertSubcategories(db);
  } catch (error) {
    throw new Error(`❌ Failed to insert default data into [${db}]: \n${error}`);
  }
}


const insertMonthlyDemoData = async (model, label) => {
  try {
    for (const month of [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ]) {
      await model[`insertData${label}${month}`]();
    }
  } catch (error) {
    throw new Error(`❌ Failed to insert ${label.toLowerCase()} data into demo_expense: \n${error}`);
  }
};

const demoSetup = async () => {
  const db = 'demo_expense'
  console.log(`Checking if exist: ${db}`);
  try {
    const demoExist = await dbCheck(db);
    console.log(demoExist);
    // if !demoExist => demoExist is false => demo_expense doesnt exists, build.
    if (!demoExist) {
      //create schema
      console.log(`Building database schema: ${db}`);
      await dbBuild(db);
      //check after build
      console.log(`Checking if exist: ${db}`);
      const demoExistAfter = await dbCheck(db);
      console.log(demoExistAfter);
      if (demoExistAfter) {
        console.log(`${db} schema build successful`);
        //insert deafult data setup like personnel, categories, subcategories
        console.log(`Inserting default data into ${db}...`);
        await insertDefaultData(db);
        console.log(`Insert default data into ${db} completed.`);
        //insert demo data expense
        console.log('Inserting demo expense data...');
        await insertMonthlyDemoData(databaseDemoDataExpenseModel, 'Expense');
        console.log('Insert demo expense completed.');
        //insert demo data expense
        console.log('Inserting demo income data...');
        await insertMonthlyDemoData(databaseDemoDataIncomeModel, 'Income');
        console.log('Insert demo income completed.');
      }
      else {
        //build failed
        throw new Error(`❌ Failed to create ${db}: \n${error}`);
      }
    }
  } catch (error) {
      throw new Error(`❌ Failed to build ${db}: \n${error}`);
  }
};

const realSetup = async () => {
  const db = 'expense'
  console.log(`Checking if exist: ${db}`);
  try {
    const realExist = await dbCheck(db);
    console.log(realExist);
    if (!realExist) {
      console.log(`Building database schema: ${db}`);
      await dbBuild(db);
      console.log(`${db} schema build successful`);
      //check after build
      console.log(`Checking if exist: ${db}`);
      const realExistAfter = await dbCheck(db);
      console.log(realExistAfter);
      if (realExistAfter) {
        //insert deafult data setup like personnel, categories, subcategories
        console.log(`Inserting default data into ${db}...`);
        await insertDefaultData(db);
        console.log(`Insert default data into ${db} completed.`);
      }
      else {
        //build failed
        throw new Error(`❌ Failed to create ${db}`);
      }
    }
  } catch (error) {
    throw new Error(`❌ Failed to build database [${db}]: \n${error}`);
  }
}

const runSetup = async () => {
  try {
    //demo_expense
    await demoSetup();
    //expense
    await realSetup();
  } catch (error) {
    throw new Error(`❌ Failed to build database setup: \n${error}`);
  }
};



module.exports = {
  runSetup
};