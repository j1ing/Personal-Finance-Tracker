const dbQuery = require('../database/dbQuery');  // Import the database connection

// fetch all expenses
const getAllExpenses = (expenseType) => {
  const query = `
  SELECT id, date, category, subcategory, description, amount, name
  FROM expense_tracker_report_vw
  where is_essential in (?)
  order by date desc,  category, subcategory, name
  ;
  `
  return dbQuery(query, [expenseType]);
};

// fetch sum of all expenses
const getExpenseTotal = (expenseType) => {
  const query = `
  SELECT sum(amount) as total_expense
  FROM expense_tracker_report_vw
  where is_essential in (?)
  ;
  `
  return dbQuery(query, [expenseType]);
};

// fetch sum of all expenses by category
const getExpenseTotalByCategory = (expenseType) => {
  const query = `
  SELECT category, sum(amount) as total_expense
  FROM expense_tracker_report_vw
  where is_essential in (?)
  group by category
  order by category
  ;
  `
  return dbQuery(query, [expenseType]);
};

// fetch sum of all expenses by subcategory
const getExpenseTotalBySubcategory = (expenseType) => {
  const query = `
  SELECT category, subcategory, sum(amount) as total_expense
  FROM expense_tracker_report_vw
  where is_essential in (?)
  group by category, subcategory
  order by category, subcategory
  ;
  `
  return dbQuery(query, [expenseType]);
};

// fetch sum of all expenses year to date
const getExpenseTotalYTD = (expenseType) => {
  const query = `
  SELECT sum(amount) as total_expense
  FROM expense_tracker_report_vw
  where is_essential in (?)
  and year = year(current_date())
  ;
  `
  return dbQuery(query, [expenseType]);
};

// fetch sum of all expenses by category year to date
const getExpenseTotalYTDByCategory = (expenseType) => {
  const query = `
  SELECT category, sum(amount) as total_expense
  FROM expense_tracker_report_vw
  where is_essential in (?)
  and year = year(current_date())
  group by category
  order by category
  ;
  `
  return dbQuery(query, [expenseType]);
};

// fetch sum of all expenses by subcategory year to date
const getExpenseTotalYTDBySubcategory = (expenseType) => {
  const query = `
  SELECT category, subcategory, sum(amount) as total_expense
  FROM expense_tracker_report_vw
  where is_essential in (?)
  and year = year(current_date())
  group by category, subcategory
  order by category, subcategory
  ;
  `
  return dbQuery(query, [expenseType]);
};

// fetch sum of all expenses by year
const getExpenseTotalYearly = (expenseType) => {
  const query = `
  SELECT year, sum(amount) as total_expense
  FROM expense_tracker_report_vw
  where is_essential in (?)
  group by year
  order by year desc
  ;
  `
  return dbQuery(query, [expenseType]);
};
  
// fetch sum of all expenses by category by year
const getExpenseTotalByCategoryYearly = (expenseType) => {
  const query = `
  SELECT year, category, sum(amount) as total_expense
  FROM expense_tracker_report_vw
  where is_essential in (?)
  group by year, category
  order by year desc, category
  ;
  `
  return dbQuery(query, [expenseType]);
};

// fetch sum of all expenses by subcategory by year
const getExpenseTotalBySubcategoryYearly = (expenseType) => {
  const query = `
  SELECT year, category, subcategory, sum(amount) as total_expense
  FROM expense_tracker_report_vw
  where is_essential in (?)
  group by year, category, subcategory
  order by year desc, category, subcategory
  ;
  `
  return dbQuery(query, [expenseType]);
};

// fetch sum of all expenses quarterly by year
const getExpenseTotalQrtYearly = (expenseType) => {
  const query = `
  SELECT year, quarter, sum(amount) as total_expense
  FROM expense_tracker_report_vw
  where is_essential in (?)
  group by year, quarter
  order by year desc, quarter
  ;
  `
  return dbQuery(query, [expenseType]);
};

// fetch sum of all expenses by category quarterly by year
const getExpenseTotalQrtByCategoryYearly = (expenseType) => {
  const query = `
  SELECT year, quarter, category, sum(amount) as total_expense
  FROM expense_tracker_report_vw
  where is_essential in (?)
  group by year, quarter, category
  order by year desc, quarter, category
  ;
  `
  return dbQuery(query, [expenseType]);
};


// fetch sum of all expenses by subcategory quarterly by year
const getExpenseTotalQrtBySubcategoryYearly = (expenseType) => {
  const query = `
  SELECT year, quarter, category, subcategory, sum(amount) as total_expense
  FROM expense_tracker_report_vw
  where is_essential in (?)
  group by year, quarter, category, subcategory
  order by year desc, quarter, category, subcategory
  ;
  `
  return dbQuery(query, [expenseType]);
};

// fetch sum of all expenses monthly by year
const getExpenseTotalMonthYearly = (expenseType) => {
  const query = `
  SELECT year, month, sum(amount) as total_expense
  FROM expense_tracker_report_vw
  where is_essential in (?)
  group by year, month
  order by year desc, month
  ;
  `
  return dbQuery(query, [expenseType]);
};

// fetch sum of all expenses by category monthly by year
const getExpenseTotalMonthByCategoryYearly = (expenseType) => {
  const query = `
  SELECT year, month, category, sum(amount) as total_expense
  FROM expense_tracker_report_vw
  where is_essential in (?)
  group by year, month, category
  order by year desc, month, category
  ;
  `
  return dbQuery(query, [expenseType]);
};

// fetch sum of all expenses by subcategory monthly by year
const getExpenseTotalMonthBySubcategoryYearly = (expenseType) => {
  const query = `
  SELECT year, month, category, subcategory, sum(amount) as total_expense
  FROM expense_tracker_report_vw
  where is_essential in (?)
  group by year, month, category, subcategory
  order by year desc, month, category, subcategory
  ;
  `
  return dbQuery(query, [expenseType]);
};

// add new expenses
const addExpense = (date, category, subcategory, description, amount, person) => {
  const query = `
  INSERT INTO expense_tracker 
  (expense_date, category_id, subcategory_id, expense_description, amount, target_personnel_id)
  VALUES
  (?,?,?,?,?,?)
  ;
  `
  return dbQuery(query, [date, category, subcategory, description, amount, person]);
};


// edit selected expenses
const editExpense = (id, date, category, subcategory, description, amount, person) => {
  const query = `
  UPDATE expense_tracker
  SET expense_date = ?,
  category_id = ?,
  subcategory_id = ?,
  expense_description = ?,
  amount = ?,
  target_personnel_id = ?
  WHERE id = ?
  ;
  `
  return dbQuery(query, [date, category, subcategory, description, amount, person, id]);
};


// edit selected expenses
const deleteExpense = (id) => {
  const query = `
  DELETE FROM expense_tracker
  WHERE id = ?
  ;
  `
  return dbQuery(query, [id]);
};

module.exports = {
  getAllExpenses,
  getExpenseTotal,
  getExpenseTotalByCategory,
  getExpenseTotalBySubcategory,
  getExpenseTotalYTD,
  getExpenseTotalYTDByCategory,
  getExpenseTotalYTDBySubcategory,
  getExpenseTotalYearly,
  getExpenseTotalByCategoryYearly,
  getExpenseTotalBySubcategoryYearly,
  getExpenseTotalQrtYearly,
  getExpenseTotalQrtByCategoryYearly,
  getExpenseTotalQrtBySubcategoryYearly,
  getExpenseTotalMonthYearly,
  getExpenseTotalMonthByCategoryYearly,
  getExpenseTotalMonthBySubcategoryYearly,
  addExpense,
  editExpense,
  deleteExpense
};