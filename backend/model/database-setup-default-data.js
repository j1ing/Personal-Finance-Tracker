const dbQuery = require('../database/dbQuery');  // Import the database connection

const insertPersonnel = (db) => {
  const query = `
  insert into \`${db}\`.personnel 
  (name)
  values ('Everyone'), ('Person 1'), ('Person 2')
  ;
  `
  return dbQuery(query, { withoutSchema: true });
};

const insertCategories = (db) => {
  const query = `
  insert into \`${db}\`.categories 
  (category,is_expense)
  values ('Food',1),('Auto',1),('Health',1),
  ('Pet',1),('Household',1),('Entertainment',1),
  ('Learning',1),('Miscellaneous',1), ('Personal',1),
  ('Tax',1), ('Income',0)
  ;
  `
  return dbQuery(query, { withoutSchema: true });
};


const insertSubcategories = (db) => {
  const query = `
  insert into \`${db}\`.subcategories 
  (category_id, subcategory, is_essential)
  values (1, 'Beverages',0),
  (1, 'Proteins',0),
  (1, 'Vegetables',0),
  (1, 'Fruits',0),
  (1, 'Carbohydrates',0),
  (1, 'Restaurants & Takeout',0),
  (1, 'Snack & Sweets',0),
  (1, 'Ready-to-Eat',0),
  (1, 'Cooking Essentials',0),
  (2, 'Fuel',0),
  (2, 'Auto Loan Payment',1),
  (2, 'Maintenance & Repairs',0),
  (2, 'Auto Miscellaneous',0),
  (2, 'Auto Insurance',1),
  (2, 'Transportation',0),
  (2, 'Auto Accessories',0),
  (3, 'Dental',0),
  (3, 'Medical',0),
  (3, 'Medications',0),
  (3, 'Health Insurance',1),
  (3, 'Devices & Equipment',0),
  (4, 'Pet Food (Dry)',1),
  (4, 'Pet Food (Wet)',0),
  (4, 'Veterinary Care',1),
  (4, 'Pet Supplies & Accessories',0),
  (4, 'Pet Miscellaneous',0),
  (5, 'Rent & Mortgage',1),
  (5, 'Maintenance & Repairs',0),
  (5, 'Furnishings & Appliances',0),
  (5, 'Utilities & Miscellaneous',1),
  (5, 'Telecommunication & Electronics',1),
  (5, 'Household Accessories',0),
  (5, 'Cleaning Miscellaneous',0),
  (6, 'Subscriptions & Streaming',0),
  (6, 'Events & Activities',0),
  (6, 'Hobbies & Recreation',0),
  (7, 'Learning Materials',0),
  (7, 'Tuition',0),
  (7, 'Tuition Loan Payment',1),
  (8, 'Gifts',0),
  (8, 'Memberships',0),
  (8, 'Emergency Expenses',1),
  (8, 'Other',0),
  (9, 'Personal Hygiene',1),
  (9, 'Grooming & Beauty',0),
  (9, 'Apparel',0),
  (9, 'Footwear',0),
  (9, 'Personal Accessories',0),
  (10, 'Sales Tax',0),
  (10, 'Income Tax',1),
  (10, 'Property Tax',1),
  (10, 'Social Security & Medicare Taxes',1),
  (11, 'Tax Refunds',0),
  (11, 'Salary & Wages',0),
  (11, 'Bonuses, Incentives & Gift',0),
  (11, 'Interest & Cash Back',0),
  (11, 'Reimbursement',0)
  ;
  `
  return dbQuery(query, { withoutSchema: true });
};

module.exports = {
  insertPersonnel,
  insertCategories,
  insertSubcategories
};
