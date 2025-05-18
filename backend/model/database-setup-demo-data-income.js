const dbQuery = require('../database/dbQuery');  // Import the database connection

const insertDataIncomeJan = () => {
  const query = `
  insert into demo_expense.income_tracker 
  (income_date, subcategory_id, income_description, amount)
  VALUES 
  ('2025-01-01', 54, 'Salary - Person 1', 3200.00),
  ('2025-01-01', 54, 'Salary - Person 2', 2900.00),
  ('2025-01-15', 56, 'Credit card cashback', 12.75),
  ('2025-01-20', 57, 'Health reimbursement', 80.00)
  ;
  `
  return dbQuery(query);
};

const insertDataIncomeFeb = () => {
  const query = `
  insert into demo_expense.income_tracker 
  (income_date, subcategory_id, income_description, amount)
  VALUES 
  ('2025-02-01', 54, 'Salary - Person 1', 3200.00),
  ('2025-02-01', 54, 'Salary - Person 2', 2900.00),
  ('2025-02-22', 56, 'Credit card cashback', 11.20)
  ;
  `
  return dbQuery(query);
};

const insertDataIncomeMar = () => {
  const query = `
  insert into demo_expense.income_tracker 
  (income_date, subcategory_id, income_description, amount)
  VALUES 
  ('2025-03-01', 54, 'Salary - Person 1', 3200.00),
  ('2025-03-01', 54, 'Salary - Person 2', 2900.00),
  ('2025-03-05', 56, 'Bank interest', 6.80),
  ('2025-03-25', 55, 'Project milestone reward', 200.00)
  ;
  `
  return dbQuery(query);
};

const insertDataIncomeApr = () => {
  const query = `
  insert into demo_expense.income_tracker 
  (income_date, subcategory_id, income_description, amount)
  VALUES 
  ('2025-04-01', 54, 'Salary - Person 1', 3200.00),
  ('2025-04-01', 54, 'Salary - Person 2', 2900.00),
  ('2025-04-06', 56, 'Bank interest', 5.95),
  ('2025-04-28', 55, 'Quarterly bonus', 300.00)
  ;
  `
  return dbQuery(query);
};

const insertDataIncomeMay = () => {
  const query = `
  insert into demo_expense.income_tracker 
  (income_date, subcategory_id, income_description, amount)
  VALUES 
  ('2025-05-01', 54, 'Salary - Person 1', 3200.00),
  ('2025-05-01', 54, 'Salary - Person 2', 2900.00),
  ('2025-05-05', 56, 'Bank interest', 6.10)
  ;
  `
  return dbQuery(query);
};

const insertDataIncomeJun = () => {
  const query = `
  insert into demo_expense.income_tracker 
  (income_date, subcategory_id, income_description, amount)
  VALUES 
  ('2025-06-01', 54, 'Salary - Person 1', 3200.00),
  ('2025-06-01', 54, 'Salary - Person 2', 2900.00),
  ('2025-06-10', 56, 'Bank interest', 6.50)
  ;
  `
  return dbQuery(query);
};

const insertDataIncomeJul = () => {
  const query = `
  insert into demo_expense.income_tracker 
  (income_date, subcategory_id, income_description, amount)
  VALUES 
  ('2025-07-01', 54, 'Salary - Person 1', 3200.00),
  ('2025-07-01', 54, 'Salary - Person 2', 2900.00),
  ('2025-07-10', 56, 'Bank interest', 5.80)
  ;
  `
  return dbQuery(query);
};

const insertDataIncomeAug = () => {
  const query = `
  insert into demo_expense.income_tracker 
  (income_date, subcategory_id, income_description, amount)
  VALUES 
  ('2025-08-01', 54, 'Salary - Person 1', 3200.00),
  ('2025-08-01', 54, 'Salary - Person 2', 2900.00),
  ('2025-08-15', 56, 'Cash back reward', 15.00),
  ('2025-08-31', 55, 'Quarterly bonus', 400.00)
  ;
  `
  return dbQuery(query);
};

const insertDataIncomeSept = () => {
  const query = `
  insert into demo_expense.income_tracker 
  (income_date, subcategory_id, income_description, amount)
  VALUES 
  ('2025-09-01', 54, 'Salary - Person 1', 3200.00),
  ('2025-09-01', 54, 'Salary - Person 2', 2900.00),
  ('2025-09-15', 56, 'Cash back reward', 18.00)
  ;
  `
  return dbQuery(query);
};

const insertDataIncomeOct = () => {
  const query = `
  insert into demo_expense.income_tracker 
  (income_date, subcategory_id, income_description, amount)
  VALUES 
  ('2025-10-01', 54, 'Salary - Person 1', 3200.00),
  ('2025-10-01', 54, 'Salary - Person 2', 2900.00),
  ('2025-10-15', 56, 'Cash back reward', 20.00)
  ;
  `
  return dbQuery(query);
};

const insertDataIncomeNov = () => {
  const query = `
  insert into demo_expense.income_tracker 
  (income_date, subcategory_id, income_description, amount)
  VALUES 
  ('2025-11-01', 54, 'Salary - Person 1', 3250.00),
  ('2025-11-01', 54, 'Salary - Person 2', 2950.00),
  ('2025-11-15', 56, 'Cash back reward', 30.00),
  ('2025-11-30', 55, 'Quarterly bonus', 500.00)
  ;
  `
  return dbQuery(query);
};

const insertDataIncomeDec = () => {
  const query = `
  insert into demo_expense.income_tracker 
  (income_date, subcategory_id, income_description, amount)
  VALUES 
  ('2025-12-01', 54, 'Salary - Person 1', 3250.00),
  ('2025-12-01', 54, 'Salary - Person 2', 2950.00),
  ('2025-12-15', 56, 'Cash back reward', 40.00),
  ('2025-12-30', 55, 'Bonus - Person 1', 500.00)
  ;
  `
  return dbQuery(query);
};


module.exports = {
  insertDataIncomeJan,
  insertDataIncomeFeb,
  insertDataIncomeMar,
  insertDataIncomeApr,
  insertDataIncomeMay,
  insertDataIncomeJun,
  insertDataIncomeJul,
  insertDataIncomeAug,
  insertDataIncomeSept,
  insertDataIncomeOct,
  insertDataIncomeNov,
  insertDataIncomeDec
};