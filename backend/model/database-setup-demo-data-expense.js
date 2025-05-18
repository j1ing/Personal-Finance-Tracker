const dbQuery = require('../database/dbQuery');  // Import the database connection

const insertDataExpenseJan = () => {
  const query = `
  insert into demo_expense.expense_tracker 
  (expense_date, category_id, subcategory_id, expense_description, amount, target_personnel_id)
  VALUES 
  ('2025-01-01', 5, 27, 'January Rent', 1500.00, 1),
  ('2025-01-01', 10, 50, 'Income Tax (Person 1)', 325.00, 1),
  ('2025-01-01', 10, 51, 'Property Tax Payment', 150.00, 1),
  ('2025-01-01', 10, 52, 'Social Security & Medicare Taxes (Person 1)', 248.75, 1),
  ('2025-01-01', 10, 50, 'Income Tax (Person 2)', 295.00, 2),
  ('2025-01-01', 10, 52, 'Social Security & Medicare Taxes (Person 2)', 225.68, 2),
  ('2025-01-02', 1, 2, 'Chicken breasts', 25.50, 2),
  ('2025-01-02', 1, 3, 'Fresh vegetables', 18.90, 3),
  ('2025-01-03', 3, 20, 'Health insurance premium', 420.00, 1), 
  ('2025-01-04', 2, 10, 'Gas refill', 60.00, 2),
  ('2025-01-06', 1, 6, 'Takeout dinner', 45.00, 3),
  ('2025-01-08', 5, 30, 'Electricity bill', 120.00, 1),
  ('2025-01-09', 4, 24, 'Vet visit', 90.00, 1),
  ('2025-01-10', 6, 34, 'Netflix subscription', 15.99, 1),
  ('2025-01-12', 9, 44, 'Toiletries', 22.40, 3),
  ('2025-01-15', 2, 14, 'Auto insurance', 180.00, 2),
  ('2025-01-20', 5, 31, 'Internet bill', 65.00, 1),
  ('2025-01-22', 1, 9, 'Cooking oil & spices', 33.75, 2),
  ('2025-01-24', 8, 40, 'Birthday gift for friend', 40.00, 2),
  ('2025-01-28', 1, 7, 'Snacks', 12.50, 3),
  ('2025-01-03', 1, 4, 'Fruits', 30.00, 1),
  ('2025-01-03', 1, 5, 'Vegetables', 30.00, 1),
  ('2025-01-03', 1, 6, 'Meat & Fish', 50.00, 1),
  ('2025-01-03', 1, 7, 'Grains & Bread', 20.00, 1),
  ('2025-01-03', 1, 8, 'Dairy', 20.00, 1),
  ('2025-01-10', 1, 9, 'Snacks', 15.00, 1),
  ('2025-01-10', 1, 10, 'Takeout', 50.00, 1),
  ('2025-01-15', 1, 11, 'Beverages', 15.00, 1),
  ('2025-01-20', 1, 4, 'More Fruits', 10.00, 1),
  ('2025-01-20', 1, 5, 'More Vegetables', 10.00, 1),
  ('2025-01-03', 1, 4, 'Fruits', 30.00, 2),
  ('2025-01-03', 1, 5, 'Vegetables', 30.00, 2),
  ('2025-01-03', 1, 6, 'Meat & Fish', 50.00, 2),
  ('2025-01-03', 1, 7, 'Grains & Bread', 20.00, 2),
  ('2025-01-03', 1, 8, 'Dairy', 20.00, 2),
  ('2025-01-10', 1, 9, 'Snacks', 15.00, 2),
  ('2025-01-10', 1, 10, 'Takeout', 50.00, 2),
  ('2025-01-15', 1, 11, 'Beverages', 15.00, 2),
  ('2025-01-20', 1, 4, 'More Fruits', 10.00, 2),
  ('2025-01-20', 1, 5, 'More Vegetables', 10.00, 2)
  ;
  `
  return dbQuery(query);
};

const insertDataExpenseFeb = () => {
  const query = `
  insert into demo_expense.expense_tracker 
  (expense_date, category_id, subcategory_id, expense_description, amount, target_personnel_id)
  VALUES 
  ('2025-02-01', 5, 27, 'February Rent', 1500.00, 1),
  ('2025-02-01', 10, 50, 'Income Tax (Person 1)', 325.00, 1),
  ('2025-02-01', 10, 51, 'Property Tax Payment', 150.00, 1),
  ('2025-02-01', 10, 52, 'Social Security & Medicare Taxes (Person 1)', 248.75, 1),
  ('2025-02-01', 10, 50, 'Income Tax (Person 2)', 295.00, 2),
  ('2025-02-01', 10, 52, 'Social Security & Medicare Taxes (Person 2)', 225.68, 2),
  ('2025-02-02', 1, 2, 'Ground beef & tofu', 32.00, 2),
  ('2025-02-03', 1, 4, 'Bananas & apples', 16.30, 3),
  ('2025-02-03', 3, 20, 'Health insurance premium', 420.00, 1),
  ('2025-02-04', 2, 10, 'Gas refill', 58.00, 2),
  ('2025-02-05', 1, 6, 'Valentine dinner', 75.00, 3),
  ('2025-02-06', 5, 30, 'Water bill', 50.00, 1),
  ('2025-02-08', 4, 22, 'Dry dog food', 40.00, 1),
  ('2025-02-10', 6, 34, 'Spotify subscription', 10.99, 1),
  ('2025-02-11', 9, 45, 'Haircut & grooming', 30.00, 3),
  ('2025-02-13', 2, 11, 'Car loan payment', 300.00, 2),
  ('2025-02-15', 5, 31, 'Phone bill', 55.00, 1),
  ('2025-02-16', 1, 9, 'Rice & oil', 28.45, 2),
  ('2025-02-18', 7, 38, 'Spring tuition payment', 900.00, 1),
  ('2025-02-21', 1, 8, 'Frozen meals', 20.25, 3),
  ('2025-02-26', 1, 3, 'Vegetables', 22.00, 2),
  ('2025-02-03', 1, 4, 'Fruits', 28.00, 1),
  ('2025-02-03', 1, 5, 'Vegetables', 30.00, 1),
  ('2025-02-03', 1, 2, 'Proteins (Meat & Fish)', 55.00, 1),
  ('2025-02-03', 1, 5, 'Carbohydrates (Grains & Bread)', 25.00, 1),
  ('2025-02-03', 1, 8, 'Dairy', 18.00, 1),
  ('2025-02-10', 1, 7, 'Snacks & Sweets', 20.00, 1),
  ('2025-02-10', 1, 6, 'Takeout', 45.00, 1),
  ('2025-02-15', 1, 1, 'Beverages', 14.00, 1),
  ('2025-02-20', 1, 4, 'More Fruits', 12.00, 1),
  ('2025-02-20', 1, 3, 'More Vegetables', 13.00, 1),
  ('2025-02-03', 1, 4, 'Fruits', 30.00, 2),
  ('2025-02-03', 1, 5, 'Vegetables', 30.00, 2),
  ('2025-02-03', 1, 2, 'Proteins (Meat & Fish)', 50.00, 2),
  ('2025-02-03', 1, 5, 'Carbohydrates (Grains & Bread)', 25.00, 2),
  ('2025-02-03', 1, 8, 'Dairy', 20.00, 2),
  ('2025-02-10', 1, 7, 'Snacks & Sweets', 15.00, 2),
  ('2025-02-10', 1, 6, 'Takeout', 50.00, 2),
  ('2025-02-15', 1, 1, 'Beverages', 15.00, 2),
  ('2025-02-20', 1, 4, 'More Fruits', 10.00, 2),
  ('2025-02-20', 1, 3, 'More Vegetables', 10.00, 2)
  ;
  `
  return dbQuery(query);
};

const insertDataExpenseMar = () => {
  const query = `
  insert into demo_expense.expense_tracker 
  (expense_date, category_id, subcategory_id, expense_description, amount, target_personnel_id)
  VALUES 
  ('2025-03-01', 5, 27, 'March Rent', 1500.00, 1),
  ('2025-03-01', 10, 50, 'Income Tax (Person 1)', 325.00, 1),
  ('2025-03-01', 10, 51, 'Property Tax Payment', 150.00, 1),
  ('2025-03-01', 10, 52, 'Social Security & Medicare Taxes (Person 1)', 248.75, 1),
  ('2025-03-01', 10, 50, 'Income Tax (Person 2)', 295.00, 2),
  ('2025-03-01', 10, 52, 'Social Security & Medicare Taxes (Person 2)', 225.68, 2),
  ('2025-03-02', 1, 2, 'Chicken breast & lentils', 35.60, 2),
  ('2025-03-03', 1, 3, 'Broccoli, carrots, spinach', 18.75, 3),
  ('2025-03-04', 2, 10, 'Fuel refill', 60.00, 2),
  ('2025-03-05', 3, 18, 'Doctor visit', 90.00, 3),
  ('2025-03-06', 1, 6, 'Dinner out - friends', 65.00, 3),
  ('2025-03-08', 5, 30, 'Electricity bill', 82.00, 1),
  ('2025-03-09', 4, 25, 'Cat litter & toy', 24.50, 1),
  ('2025-03-10', 6, 34, 'Netflix subscription', 15.49, 1),
  ('2025-03-12', 9, 46, 'Spring jacket', 70.00, 3),
  ('2025-03-13', 2, 14, 'Auto insurance premium', 145.00, 2),
  ('2025-03-15', 5, 31, 'Internet bill', 65.00, 1),
  ('2025-03-17', 1, 9, 'Olive oil, salt, sugar', 25.00, 2),
  ('2025-03-20', 7, 37, 'Textbooks', 110.00, 1),
  ('2025-03-22', 1, 7, 'Cookies & chips', 12.00, 3),
  ('2025-03-26', 1, 4, 'Pineapple, berries', 19.30, 2),
  ('2025-03-03', 1, 4, 'Fruits', 30.00, 1),
  ('2025-03-03', 1, 5, 'Vegetables', 28.00, 1),
  ('2025-03-03', 1, 6, 'Meat & Fish', 50.00, 1),
  ('2025-03-03', 1, 7, 'Grains & Bread', 25.00, 1),
  ('2025-03-03', 1, 8, 'Dairy', 20.00, 1),
  ('2025-03-10', 1, 9, 'Snacks', 15.00, 1),
  ('2025-03-10', 1, 10, 'Takeout', 50.00, 1),
  ('2025-03-15', 1, 11, 'Beverages', 15.00, 1),
  ('2025-03-20', 1, 4, 'More Fruits', 10.00, 1),
  ('2025-03-20', 1, 5, 'More Vegetables', 12.00, 1),
  ('2025-03-03', 1, 4, 'Fruits', 30.00, 2),
  ('2025-03-03', 1, 5, 'Vegetables', 30.00, 2),
  ('2025-03-03', 1, 6, 'Meat & Fish', 50.00, 2),
  ('2025-03-03', 1, 7, 'Grains & Bread', 25.00, 2),
  ('2025-03-03', 1, 8, 'Dairy', 20.00, 2),
  ('2025-03-10', 1, 9, 'Snacks', 15.00, 2),
  ('2025-03-10', 1, 10, 'Takeout', 50.00, 2),
  ('2025-03-15', 1, 11, 'Beverages', 15.00, 2),
  ('2025-03-20', 1, 4, 'More Fruits', 10.00, 2),
  ('2025-03-20', 1, 5, 'More Vegetables', 10.00, 2)
  ;
  `
  return dbQuery(query);
};

const insertDataExpenseApr = () => {
  const query = `
  insert into demo_expense.expense_tracker 
  (expense_date, category_id, subcategory_id, expense_description, amount, target_personnel_id)
  VALUES 
  ('2025-04-01', 5, 27, 'April Rent', 1500.00, 1),
  ('2025-04-01', 10, 50, 'Income Tax (Person 1)', 325.00, 1),
  ('2025-04-01', 10, 51, 'Property Tax Payment', 150.00, 1),
  ('2025-04-01', 10, 52, 'Social Security & Medicare Taxes (Person 1)', 248.75, 1),
  ('2025-04-01', 10, 50, 'Income Tax (Person 2)', 295.00, 2),
  ('2025-04-01', 10, 52, 'Social Security & Medicare Taxes (Person 2)', 225.68, 2),
  ('2025-04-02', 1, 5, 'Rice, pasta, oats', 33.25, 2),
  ('2025-04-03', 1, 3, 'Spinach, bell pepper, tomato', 21.50, 3),
  ('2025-04-04', 2, 10, 'Gas station refill', 58.30, 2),
  ('2025-04-06', 3, 17, 'Dental cleaning', 120.00, 3),
  ('2025-04-07', 1, 6, 'Fast food lunch', 18.00, 2),
  ('2025-04-08', 5, 30, 'Water & trash bill', 45.00, 1),
  ('2025-04-10', 4, 22, 'Pet dry food', 38.90, 1),
  ('2025-04-11', 6, 34, 'Spotify subscription', 10.99, 1),
  ('2025-04-13', 9, 44, 'Shampoo, soap, toothpaste', 14.75, 3),
  ('2025-04-14', 2, 15, 'Public transit card', 25.00, 2),
  ('2025-04-15', 5, 31, 'Cell phone bill', 68.00, 1),
  ('2025-04-17', 1, 9, 'Spices & cooking oil', 27.10, 2),
  ('2025-04-18', 7, 38, 'Tuition fee installment', 500.00, 1),
  ('2025-04-21', 1, 8, 'Frozen meals', 30.00, 3),
  ('2025-04-23', 1, 1, 'Juices & sparkling water', 16.25, 2),
  ('2025-04-03', 1, 4, 'Fruits', 30.00, 1),
  ('2025-04-03', 1, 5, 'Vegetables', 28.00, 1),
  ('2025-04-03', 1, 6, 'Meat & Fish', 50.00, 1),
  ('2025-04-03', 1, 7, 'Grains & Bread', 25.00, 1),
  ('2025-04-03', 1, 8, 'Dairy', 20.00, 1),
  ('2025-04-10', 1, 9, 'Snacks', 15.00, 1),
  ('2025-04-10', 1, 10, 'Takeout', 50.00, 1),
  ('2025-04-15', 1, 11, 'Beverages', 15.00, 1),
  ('2025-04-20', 1, 4, 'More Fruits', 10.00, 1),
  ('2025-04-20', 1, 5, 'More Vegetables', 7.00, 1),
  ('2025-04-03', 1, 4, 'Fruits', 30.00, 2),
  ('2025-04-03', 1, 5, 'Vegetables', 30.00, 2),
  ('2025-04-03', 1, 6, 'Meat & Fish', 50.00, 2),
  ('2025-04-03', 1, 7, 'Grains & Bread', 25.00, 2),
  ('2025-04-03', 1, 8, 'Dairy', 20.00, 2),
  ('2025-04-10', 1, 9, 'Snacks', 15.00, 2),
  ('2025-04-10', 1, 10, 'Takeout', 50.00, 2),
  ('2025-04-15', 1, 11, 'Beverages', 15.00, 2),
  ('2025-04-20', 1, 4, 'More Fruits', 10.00, 2),
  ('2025-04-20', 1, 5, 'More Vegetables', 10.00, 2)
  ;
  `
  return dbQuery(query);
};

const insertDataExpenseMay = () => {
  const query = `
  insert into demo_expense.expense_tracker 
  (expense_date, category_id, subcategory_id, expense_description, amount, target_personnel_id)
  VALUES 
  ('2025-05-01', 5, 27, 'May Rent', 1500.00, 1),
  ('2025-05-01', 10, 50, 'Income Tax (Person 1)', 325.00, 1),
  ('2025-05-01', 10, 51, 'Property Tax Payment', 150.00, 1),
  ('2025-05-01', 10, 52, 'Social Security & Medicare Taxes (Person 1)', 248.75, 1),
  ('2025-05-01', 10, 50, 'Income Tax (Person 2)', 295.00, 2),
  ('2025-05-01', 10, 52, 'Social Security & Medicare Taxes (Person 2)', 225.68, 2),
  ('2025-05-02', 1, 5, 'Rice, pasta, oats', 30.00, 2),
  ('2025-05-03', 1, 3, 'Spinach, tomatoes, onions', 25.00, 3),
  ('2025-05-04', 2, 10, 'Gas station refill', 60.00, 2),
  ('2025-05-06', 3, 18, 'Medical checkup', 150.00, 1),
  ('2025-05-07', 1, 6, 'Fast food dinner', 20.00, 3),
  ('2025-05-09', 5, 30, 'Water & trash bill', 45.00, 1),
  ('2025-05-11', 4, 22, 'Pet dry food', 40.00, 1),
  ('2025-05-13', 6, 34, 'Netflix subscription', 15.99, 1),
  ('2025-05-15', 9, 44, 'Shampoo, conditioner, toothpaste', 18.50, 2),
  ('2025-05-16', 2, 15, 'Public transit card', 26.00, 2),
  ('2025-05-17', 5, 31, 'Cell phone bill', 70.00, 1),
  ('2025-05-19', 1, 9, 'Spices, oil, and vinegar', 28.00, 3),
  ('2025-05-20', 7, 38, 'Tuition fee installment', 500.00, 1),
  ('2025-05-22', 1, 8, 'Frozen meals', 32.00, 2),
  ('2025-05-24', 1, 1, 'Juices & soda', 18.75, 3),
  ('2025-05-03', 1, 4, 'Fruits', 32.00, 1),
  ('2025-05-03', 1, 5, 'Vegetables', 30.00, 1),
  ('2025-05-03', 1, 6, 'Meat & Fish', 50.00, 1),
  ('2025-05-03', 1, 7, 'Grains & Bread', 25.00, 1),
  ('2025-05-03', 1, 8, 'Dairy', 20.00, 1),
  ('2025-05-10', 1, 9, 'Snacks', 15.00, 1),
  ('2025-05-10', 1, 10, 'Takeout', 50.00, 1),
  ('2025-05-15', 1, 11, 'Beverages', 13.00, 1),
  ('2025-05-20', 1, 4, 'More Fruits', 10.00, 1),
  ('2025-05-20', 1, 5, 'More Vegetables', 5.00, 1),
  ('2025-05-03', 1, 4, 'Fruits', 30.00, 2),
  ('2025-05-03', 1, 5, 'Vegetables', 30.00, 2),
  ('2025-05-03', 1, 6, 'Meat & Fish', 50.00, 2),
  ('2025-05-03', 1, 7, 'Grains & Bread', 25.00, 2),
  ('2025-05-03', 1, 8, 'Dairy', 20.00, 2),
  ('2025-05-10', 1, 9, 'Snacks', 15.00, 2),
  ('2025-05-10', 1, 10, 'Takeout', 50.00, 2),
  ('2025-05-15', 1, 11, 'Beverages', 13.00, 2),
  ('2025-05-20', 1, 4, 'More Fruits', 10.00, 2),
  ('2025-05-20', 1, 5, 'More Vegetables', 5.00, 2)
  ;
  `
  return dbQuery(query);
};

const insertDataExpenseJun = () => {
  const query = `
  insert into demo_expense.expense_tracker 
  (expense_date, category_id, subcategory_id, expense_description, amount, target_personnel_id)
  VALUES 
  ('2025-06-01', 5, 27, 'June Rent', 1500.00, 1),
  ('2025-06-01', 10, 50, 'Income Tax (Person 1)', 325.00, 1),
  ('2025-06-01', 10, 51, 'Property Tax Payment', 150.00, 1),
  ('2025-06-01', 10, 52, 'Social Security & Medicare Taxes (Person 1)', 248.75, 1),
  ('2025-06-01', 10, 50, 'Income Tax (Person 2)', 295.00, 2),
  ('2025-06-01', 10, 52, 'Social Security & Medicare Taxes (Person 2)', 225.68, 2),
  ('2025-06-02', 1, 3, 'Lettuce, cucumbers, peppers', 20.00, 3),
  ('2025-06-03', 2, 10, 'Gas station refill', 55.00, 2),
  ('2025-06-04', 1, 6, 'Takeout dinner', 25.00, 3),
  ('2025-06-05', 3, 20, 'Health insurance payment', 350.00, 1),
  ('2025-06-07', 5, 30, 'Utilities payment', 65.00, 1),
  ('2025-06-09', 4, 22, 'Pet food (dry)', 40.00, 1),
  ('2025-06-10', 6, 34, 'Spotify subscription', 9.99, 2),
  ('2025-06-12', 9, 44, 'Personal hygiene products', 22.00, 1),
  ('2025-06-15', 2, 15, 'Car maintenance', 180.00, 2),
  ('2025-06-16', 5, 31, 'Cell phone bill', 70.00, 1),
  ('2025-06-17', 1, 1, 'Juices & soda', 18.75, 2),
  ('2025-06-19', 1, 8, 'Frozen meals', 30.00, 3),
  ('2025-06-21', 8, 42, 'Emergency expense (urgent repair)', 250.00, 1),
  ('2025-06-23', 5, 27, 'Mortgage insurance', 120.00, 1),
  ('2025-06-25', 1, 9, 'Spices, oil, and vinegar', 28.00, 3),
  ('2025-06-03', 1, 4, 'Fruits', 28.00, 1),
  ('2025-06-03', 1, 5, 'Vegetables', 32.00, 1),
  ('2025-06-03', 1, 6, 'Meat & Fish', 50.00, 1),
  ('2025-06-03', 1, 7, 'Grains & Bread', 22.00, 1),
  ('2025-06-03', 1, 8, 'Dairy', 20.00, 1),
  ('2025-06-10', 1, 9, 'Snacks', 15.00, 1),
  ('2025-06-10', 1, 10, 'Takeout', 50.00, 1),
  ('2025-06-15', 1, 11, 'Beverages', 13.00, 1),
  ('2025-06-20', 1, 4, 'More Fruits', 10.00, 1),
  ('2025-06-20', 1, 5, 'More Vegetables', 10.00, 1),
  ('2025-06-03', 1, 4, 'Fruits', 28.00, 2),
  ('2025-06-03', 1, 5, 'Vegetables', 32.00, 2),
  ('2025-06-03', 1, 6, 'Meat & Fish', 50.00, 2),
  ('2025-06-03', 1, 7, 'Grains & Bread', 22.00, 2),
  ('2025-06-03', 1, 8, 'Dairy', 20.00, 2),
  ('2025-06-10', 1, 9, 'Snacks', 15.00, 2),
  ('2025-06-10', 1, 10, 'Takeout', 50.00, 2),
  ('2025-06-15', 1, 11, 'Beverages', 13.00, 2),
  ('2025-06-20', 1, 4, 'More Fruits', 10.00, 2),
  ('2025-06-20', 1, 5, 'More Vegetables', 10.00, 2)
  ;
  `
  return dbQuery(query);
};

const insertDataExpenseJul = () => {
  const query = `
  insert into demo_expense.expense_tracker 
  (expense_date, category_id, subcategory_id, expense_description, amount, target_personnel_id)
  VALUES 
  ('2025-07-01', 5, 27, 'July Rent', 1500.00, 1),
  ('2025-07-01', 10, 50, 'Income Tax (Person 1)', 325.00, 1),
  ('2025-07-01', 10, 51, 'Property Tax Payment', 150.00, 1),
  ('2025-07-01', 10, 52, 'Social Security & Medicare Taxes (Person 1)', 248.75, 1),
  ('2025-07-01', 10, 50, 'Income Tax (Person 2)', 295.00, 2),
  ('2025-07-01', 10, 52, 'Social Security & Medicare Taxes (Person 2)', 225.68, 2),
  ('2025-07-02', 1, 3, 'Tomatoes, cucumbers, lettuce', 15.00, 3),
  ('2025-07-03', 2, 10, 'Gas station refill', 60.00, 2),
  ('2025-07-04', 1, 6, 'Restaurant dinner', 40.00, 3),
  ('2025-07-06', 3, 20, 'Health insurance payment', 350.00, 1),
  ('2025-07-08', 5, 30, 'Utilities payment', 70.00, 1),
  ('2025-07-10', 4, 22, 'Pet food (wet)', 25.00, 1),
  ('2025-07-12', 6, 34, 'Netflix subscription', 12.99, 2),
  ('2025-07-14', 9, 44, 'Toiletries & personal care', 18.00, 1),
  ('2025-07-15', 2, 11, 'Auto loan payment', 200.00, 1),
  ('2025-07-17', 5, 31, 'Cell phone bill', 72.00, 1),
  ('2025-07-19', 1, 1, 'Soda and snacks', 15.00, 2),
  ('2025-07-20', 1, 8, 'Frozen pizza and meals', 28.00, 3),
  ('2025-07-22', 8, 42, 'Emergency expenses (urgent plumbing)', 150.00, 1),
  ('2025-07-24', 5, 27, 'Mortgage insurance', 120.00, 1),
  ('2025-07-26', 1, 9, 'Spices, oil, and vinegar', 22.00, 3),
  ('2025-07-03', 1, 4, 'Fruits', 30.00, 1),
  ('2025-07-03', 1, 5, 'Vegetables', 30.00, 1),
  ('2025-07-03', 1, 6, 'Meat & Fish', 50.00, 1),
  ('2025-07-03', 1, 7, 'Grains & Bread', 20.00, 1),
  ('2025-07-03', 1, 8, 'Dairy', 20.00, 1),
  ('2025-07-10', 1, 9, 'Snacks', 15.00, 1),
  ('2025-07-10', 1, 10, 'Takeout', 50.00, 1),
  ('2025-07-15', 1, 11, 'Beverages', 15.00, 1),
  ('2025-07-20', 1, 4, 'More Fruits', 10.00, 1),
  ('2025-07-20', 1, 5, 'More Vegetables', 10.00, 1),
  ('2025-07-03', 1, 4, 'Fruits', 30.00, 2),
  ('2025-07-03', 1, 5, 'Vegetables', 30.00, 2),
  ('2025-07-03', 1, 6, 'Meat & Fish', 50.00, 2),
  ('2025-07-03', 1, 7, 'Grains & Bread', 20.00, 2),
  ('2025-07-03', 1, 8, 'Dairy', 20.00, 2),
  ('2025-07-10', 1, 9, 'Snacks', 15.00, 2),
  ('2025-07-10', 1, 10, 'Takeout', 50.00, 2),
  ('2025-07-15', 1, 11, 'Beverages', 15.00, 2),
  ('2025-07-20', 1, 4, 'More Fruits', 10.00, 2),
  ('2025-07-20', 1, 5, 'More Vegetables', 10.00, 2)
  ;
  `
  return dbQuery(query);
};

const insertDataExpenseAug = () => {
  const query = `
  insert into demo_expense.expense_tracker 
  (expense_date, category_id, subcategory_id, expense_description, amount, target_personnel_id)
  VALUES 
  ('2025-08-01', 5, 27, 'August Rent', 1500.00, 1),
  ('2025-08-01', 10, 50, 'Income Tax (Person 1)', 325.00, 1),
  ('2025-08-01', 10, 51, 'Property Tax Payment', 150.00, 1),
  ('2025-08-01', 10, 52, 'Social Security & Medicare Taxes (Person 1)', 248.75, 1),
  ('2025-08-01', 10, 50, 'Income Tax (Person 2)', 295.00, 2),
  ('2025-08-01', 10, 52, 'Social Security & Medicare Taxes (Person 2)', 225.68, 2),
  ('2025-08-03', 1, 3, 'Cucumbers, lettuce, and carrots', 18.00, 2),
  ('2025-08-04', 2, 10, 'Gas station refill', 55.00, 1),
  ('2025-08-06', 1, 6, 'Restaurant dinner for two', 45.00, 3),
  ('2025-08-07', 3, 20, 'Health insurance payment', 350.00, 1),
  ('2025-08-09', 5, 30, 'Electricity bill payment', 80.00, 1),
  ('2025-08-11', 4, 22, 'Pet food (dry)', 30.00, 1),
  ('2025-08-13', 6, 34, 'Spotify subscription', 9.99, 2),
  ('2025-08-14', 9, 44, 'Toiletries and grooming products', 20.00, 2),
  ('2025-08-16', 2, 11, 'Auto loan payment', 200.00, 1),
  ('2025-08-18', 5, 31, 'Phone bill', 75.00, 2),
  ('2025-08-20', 1, 1, 'Beverages (Soda and Juice)', 12.00, 1),
  ('2025-08-22', 1, 8, 'Ready-to-eat meals for convenience', 30.00, 3),
  ('2025-08-24', 8, 42, 'Emergency expenses (medical)', 120.00, 2),
  ('2025-08-26', 5, 27, 'Mortgage payment', 1200.00, 1),
  ('2025-08-28', 1, 9, 'Cooking ingredients (herbs, oils)', 25.00, 2),
  ('2025-08-03', 1, 4, 'Fruits', 30.00, 1),
  ('2025-08-03', 1, 5, 'Vegetables', 30.00, 1),
  ('2025-08-03', 1, 6, 'Meat & Fish', 50.00, 1),
  ('2025-08-03', 1, 7, 'Grains & Bread', 20.00, 1),
  ('2025-08-03', 1, 8, 'Dairy', 20.00, 1),
  ('2025-08-10', 1, 9, 'Snacks', 15.00, 1),
  ('2025-08-10', 1, 10, 'Takeout', 50.00, 1),
  ('2025-08-15', 1, 11, 'Beverages', 15.00, 1),
  ('2025-08-20', 1, 4, 'More Fruits', 10.00, 1),
  ('2025-08-20', 1, 5, 'More Vegetables', 10.00, 1),
  ('2025-08-03', 1, 4, 'Fruits', 30.00, 2),
  ('2025-08-03', 1, 5, 'Vegetables', 30.00, 2),
  ('2025-08-03', 1, 6, 'Meat & Fish', 50.00, 2),
  ('2025-08-03', 1, 7, 'Grains & Bread', 20.00, 2),
  ('2025-08-03', 1, 8, 'Dairy', 20.00, 2),
  ('2025-08-10', 1, 9, 'Snacks', 15.00, 2),
  ('2025-08-10', 1, 10, 'Takeout', 50.00, 2),
  ('2025-08-15', 1, 11, 'Beverages', 15.00, 2),
  ('2025-08-20', 1, 4, 'More Fruits', 10.00, 2),
  ('2025-08-20', 1, 5, 'More Vegetables', 10.00, 2)
  ;
  `
  return dbQuery(query);
};

const insertDataExpenseSept = () => {
  const query = `
  insert into demo_expense.expense_tracker 
  (expense_date, category_id, subcategory_id, expense_description, amount, target_personnel_id)
  VALUES 
  ('2025-09-01', 10, 50, 'Income Tax (Person 1)', 325.00, 1),
  ('2025-09-01', 10, 51, 'Property Tax Payment', 150.00, 1),
  ('2025-09-01', 10, 52, 'Social Security & Medicare Taxes (Person 1)', 248.75, 1),
  ('2025-09-01', 10, 50, 'Income Tax (Person 2)', 295.00, 2),
  ('2025-09-01', 10, 52, 'Social Security & Medicare Taxes (Person 2)', 225.68, 2),
  ('2025-09-02', 5, 27, 'September Rent', 1500.00, 1),
  ('2025-09-03', 1, 3, 'Mixed vegetables', 22.00, 2),
  ('2025-09-04', 2, 10, 'Gas station refill', 50.00, 1),
  ('2025-09-06', 1, 6, 'Dinner takeout for two', 38.00, 3),
  ('2025-09-07', 3, 20, 'Health insurance payment', 350.00, 1),
  ('2025-09-09', 5, 30, 'Water bill payment', 45.00, 1),
  ('2025-09-10', 4, 22, 'Pet food (dry)', 32.00, 1),
  ('2025-09-12', 6, 34, 'Netflix subscription', 12.99, 2),
  ('2025-09-14', 9, 44, 'Personal care items', 28.00, 2),
  ('2025-09-16', 2, 11, 'Auto loan payment', 200.00, 1),
  ('2025-09-18', 5, 31, 'Internet bill', 65.00, 2),
  ('2025-09-20', 1, 1, 'Beverages (Coke, Juice)', 18.00, 1),
  ('2025-09-22', 1, 8, 'Frozen meals', 28.00, 3),
  ('2025-09-24', 8, 42, 'Emergency expenses (dental)', 100.00, 2),
  ('2025-09-26', 5, 27, 'Mortgage payment', 1200.00, 1),
  ('2025-09-28', 1, 9, 'Cooking spices and sauces', 27.00, 2),
  ('2025-09-03', 1, 4, 'Fruits', 30.00, 1),
  ('2025-09-03', 1, 5, 'Vegetables', 30.00, 1),
  ('2025-09-03', 1, 6, 'Meat & Fish', 50.00, 1),
  ('2025-09-03', 1, 7, 'Grains & Bread', 20.00, 1),
  ('2025-09-03', 1, 8, 'Dairy', 20.00, 1),
  ('2025-09-10', 1, 9, 'Snacks', 15.00, 1),
  ('2025-09-10', 1, 10, 'Takeout', 50.00, 1),
  ('2025-09-15', 1, 11, 'Beverages', 15.00, 1),
  ('2025-09-20', 1, 4, 'More Fruits', 10.00, 1),
  ('2025-09-20', 1, 5, 'More Vegetables', 10.00, 1),
  ('2025-09-03', 1, 4, 'Fruits', 30.00, 2),
  ('2025-09-03', 1, 5, 'Vegetables', 30.00, 2),
  ('2025-09-03', 1, 6, 'Meat & Fish', 50.00, 2),
  ('2025-09-03', 1, 7, 'Grains & Bread', 20.00, 2),
  ('2025-09-03', 1, 8, 'Dairy', 20.00, 2),
  ('2025-09-10', 1, 9, 'Snacks', 15.00, 2),
  ('2025-09-10', 1, 10, 'Takeout', 50.00, 2),
  ('2025-09-15', 1, 11, 'Beverages', 15.00, 2),
  ('2025-09-20', 1, 4, 'More Fruits', 10.00, 2),
  ('2025-09-20', 1, 5, 'More Vegetables', 10.00, 2)
  ;
  `
  return dbQuery(query);
};

const insertDataExpenseOct = () => {
  const query = `
  insert into demo_expense.expense_tracker 
  (expense_date, category_id, subcategory_id, expense_description, amount, target_personnel_id)
  VALUES 
  ('2025-10-01', 10, 50, 'Income Tax (Person 1)', 325.00, 1),
  ('2025-10-01', 10, 51, 'Property Tax Payment', 150.00, 1),
  ('2025-10-01', 10, 52, 'Social Security & Medicare Taxes (Person 1)', 248.75, 1),
  ('2025-10-01', 10, 50, 'Income Tax (Person 2)', 295.00, 2),
  ('2025-10-01', 10, 52, 'Social Security & Medicare Taxes (Person 2)', 225.68, 2),
  ('2025-10-02', 5, 27, 'October Rent', 1500.00, 1),
  ('2025-10-03', 1, 5, 'Carbohydrates (bread, rice)', 15.00, 2),
  ('2025-10-05', 2, 10, 'Gas refill', 48.00, 3),
  ('2025-10-07', 1, 6, 'Takeout dinner for family', 45.00, 1),
  ('2025-10-08', 3, 20, 'Health insurance premium', 350.00, 1),
  ('2025-10-10', 5, 30, 'Electric bill payment', 60.00, 2),
  ('2025-10-12', 4, 22, 'Pet food (wet)', 28.00, 1),
  ('2025-10-14', 6, 34, 'Amazon Prime subscription', 14.00, 2),
  ('2025-10-16', 9, 44, 'Personal care products', 25.00, 2),
  ('2025-10-18', 2, 11, 'Auto loan payment', 200.00, 1),
  ('2025-10-20', 5, 31, 'Mobile phone bill', 50.00, 2),
  ('2025-10-22', 1, 1, 'Beverages (coffee, juice)', 22.00, 1),
  ('2025-10-24', 1, 8, 'Frozen dinners for the week', 30.00, 3),
  ('2025-10-26', 8, 42, 'Emergency expenses (eye care)', 85.00, 2),
  ('2025-10-28', 5, 27, 'Mortgage payment', 1200.00, 1),
  ('2025-10-30', 1, 9, 'Cooking essentials (spices, oil)', 18.00, 2),
  ('2025-10-03', 1, 4, 'Fruits', 30.00, 1),
  ('2025-10-03', 1, 5, 'Vegetables', 30.00, 1),
  ('2025-10-03', 1, 6, 'Meat & Fish', 50.00, 1),
  ('2025-10-03', 1, 7, 'Grains & Bread', 20.00, 1),
  ('2025-10-03', 1, 8, 'Dairy', 20.00, 1),
  ('2025-10-10', 1, 9, 'Snacks', 15.00, 1),
  ('2025-10-10', 1, 10, 'Takeout', 50.00, 1),
  ('2025-10-15', 1, 11, 'Beverages', 15.00, 1),
  ('2025-10-20', 1, 4, 'More Fruits', 10.00, 1),
  ('2025-10-20', 1, 5, 'More Vegetables', 10.00, 1),
  ('2025-10-03', 1, 4, 'Fruits', 30.00, 2),
  ('2025-10-03', 1, 5, 'Vegetables', 30.00, 2),
  ('2025-10-03', 1, 6, 'Meat & Fish', 50.00, 2),
  ('2025-10-03', 1, 7, 'Grains & Bread', 20.00, 2),
  ('2025-10-03', 1, 8, 'Dairy', 20.00, 2),
  ('2025-10-10', 1, 9, 'Snacks', 15.00, 2),
  ('2025-10-10', 1, 10, 'Takeout', 50.00, 2),
  ('2025-10-15', 1, 11, 'Beverages', 15.00, 2),
  ('2025-10-20', 1, 4, 'More Fruits', 10.00, 2),
  ('2025-10-20', 1, 5, 'More Vegetables', 10.00, 2)
  ;
  `
  return dbQuery(query);
};

const insertDataExpenseNov = () => {
  const query = `
  insert into demo_expense.expense_tracker 
  (expense_date, category_id, subcategory_id, expense_description, amount, target_personnel_id)
  VALUES 
  ('2025-11-01', 5, 27, 'November Rent', 1500.00, 1),
  ('2025-11-01', 10, 50, 'Income Tax (Person 1)', 325.00, 1),
  ('2025-11-01', 10, 51, 'Property Tax Payment', 150.00, 1),
  ('2025-11-01', 10, 52, 'Social Security & Medicare Taxes (Person 1)', 248.75, 1),
  ('2025-11-01', 10, 50, 'Income Tax (Person 2)', 295.00, 2),
  ('2025-11-01', 10, 52, 'Social Security & Medicare Taxes (Person 2)', 225.68, 2),
  ('2025-11-02', 1, 4, 'Fruits (apples, oranges)', 18.00, 2),
  ('2025-11-05', 2, 10, 'Gas refill', 50.00, 1),
  ('2025-11-06', 1, 7, 'Snacks for family', 20.00, 3),
  ('2025-11-08', 3, 20, 'Health insurance premium', 350.00, 1),
  ('2025-11-09', 5, 30, 'Electric bill payment', 62.00, 2),
  ('2025-11-11', 4, 22, 'Pet food (dry)', 35.00, 1),
  ('2025-11-14', 6, 34, 'Netflix subscription', 16.00, 2),
  ('2025-11-16', 9, 44, 'Personal care products', 30.00, 3),
  ('2025-11-17', 2, 11, 'Auto loan payment', 200.00, 1),
  ('2025-11-20', 5, 31, 'Mobile phone bill', 52.00, 2),
  ('2025-11-22', 1, 1, 'Beverages (coffee, juice)', 25.00, 1),
  ('2025-11-24', 1, 6, 'Takeout dinner for family', 48.00, 1),
  ('2025-11-26', 8, 42, 'Emergency expenses (eye care)', 90.00, 1),
  ('2025-11-28', 5, 27, 'Mortgage payment', 1200.00, 2),
  ('2025-11-30', 1, 9, 'Cooking essentials (spices, oil)', 20.00, 2),
  ('2025-11-03', 1, 4, 'Fruits', 30.00, 1),
  ('2025-11-03', 1, 5, 'Vegetables', 30.00, 1),
  ('2025-11-03', 1, 6, 'Meat & Fish', 50.00, 1),
  ('2025-11-03', 1, 7, 'Grains & Bread', 20.00, 1),
  ('2025-11-03', 1, 8, 'Dairy', 20.00, 1),
  ('2025-11-10', 1, 9, 'Snacks', 15.00, 1),
  ('2025-11-10', 1, 10, 'Takeout', 50.00, 1),
  ('2025-11-15', 1, 11, 'Beverages', 15.00, 1),
  ('2025-11-20', 1, 4, 'More Fruits', 10.00, 1),
  ('2025-11-20', 1, 5, 'More Vegetables', 10.00, 1),
  ('2025-11-03', 1, 4, 'Fruits', 30.00, 2),
  ('2025-11-03', 1, 5, 'Vegetables', 30.00, 2),
  ('2025-11-03', 1, 6, 'Meat & Fish', 50.00, 2),
  ('2025-11-03', 1, 7, 'Grains & Bread', 20.00, 2),
  ('2025-11-03', 1, 8, 'Dairy', 20.00, 2),
  ('2025-11-10', 1, 9, 'Snacks', 15.00, 2),
  ('2025-11-10', 1, 10, 'Takeout', 50.00, 2),
  ('2025-11-15', 1, 11, 'Beverages', 15.00, 2),
  ('2025-11-20', 1, 4, 'More Fruits', 10.00, 2),
  ('2025-11-20', 1, 5, 'More Vegetables', 10.00, 2)
  ;
  `
  return dbQuery(query);
};

const insertDataExpenseDec = () => {
  const query = `
  insert into demo_expense.expense_tracker 
  (expense_date, category_id, subcategory_id, expense_description, amount, target_personnel_id)
  VALUES 
  ('2025-12-01', 5, 27, 'December Rent', 1500.00, 1),
  ('2025-12-01', 10, 50, 'Income Tax (Person 1)', 325.00, 1),
  ('2025-12-01', 10, 51, 'Property Tax Payment', 150.00, 1),
  ('2025-12-01', 10, 52, 'Social Security & Medicare Taxes (Person 1)', 248.75, 1),
  ('2025-12-01', 10, 50, 'Income Tax (Person 2)', 295.00, 2),
  ('2025-12-01', 10, 52, 'Social Security & Medicare Taxes (Person 2)', 225.68, 2),
  ('2025-12-02', 1, 5, 'Carbohydrates (bread, pasta)', 15.00, 2),
  ('2025-12-05', 2, 10, 'Gas refill', 60.00, 1),
  ('2025-12-07', 1, 8, 'Ready-to-Eat meal for family', 30.00, 2),
  ('2025-12-09', 3, 20, 'Health insurance premium', 350.00, 1),
  ('2025-12-10', 5, 30, 'Electric bill payment', 65.00, 2),
  ('2025-12-12', 4, 22, 'Pet food (dry)', 38.00, 1),
  ('2025-12-15', 6, 34, 'Netflix subscription', 16.00, 2),
  ('2025-12-17', 9, 44, 'Personal care products', 28.00, 3),
  ('2025-12-18', 2, 11, 'Auto loan payment', 200.00, 1),
  ('2025-12-20', 5, 31, 'Mobile phone bill', 55.00, 2),
  ('2025-12-22', 1, 1, 'Beverages (coffee, juice)', 25.00, 1),
  ('2025-12-24', 1, 6, 'Takeout dinner for family', 50.00, 1),
  ('2025-12-26', 8, 42, 'Emergency expenses (dental)', 120.00, 1),
  ('2025-12-28', 5, 27, 'Mortgage payment', 1200.00, 2),
  ('2025-12-30', 1, 9, 'Cooking essentials (spices, oil)', 22.00, 2),
  ('2025-12-03', 1, 4, 'Fruits', 30.00, 1),
  ('2025-12-03', 1, 5, 'Vegetables', 30.00, 1),
  ('2025-12-03', 1, 6, 'Meat & Fish', 50.00, 1),
  ('2025-12-03', 1, 7, 'Grains & Bread', 20.00, 1),
  ('2025-12-03', 1, 8, 'Dairy', 20.00, 1),
  ('2025-12-10', 1, 9, 'Snacks', 15.00, 1),
  ('2025-12-10', 1, 10, 'Takeout', 50.00, 1),
  ('2025-12-15', 1, 11, 'Beverages', 15.00, 1),
  ('2025-12-20', 1, 4, 'More Fruits', 10.00, 1),
  ('2025-12-20', 1, 5, 'More Vegetables', 10.00, 1),
  ('2025-12-03', 1, 4, 'Fruits', 30.00, 2),
  ('2025-12-03', 1, 5, 'Vegetables', 30.00, 2),
  ('2025-12-03', 1, 6, 'Meat & Fish', 50.00, 2),
  ('2025-12-03', 1, 7, 'Grains & Bread', 20.00, 2),
  ('2025-12-03', 1, 8, 'Dairy', 20.00, 2),
  ('2025-12-10', 1, 9, 'Snacks', 15.00, 2),
  ('2025-12-10', 1, 10, 'Takeout', 50.00, 2),
  ('2025-12-15', 1, 11, 'Beverages', 15.00, 2),
  ('2025-12-20', 1, 4, 'More Fruits', 10.00, 2),
  ('2025-12-20', 1, 5, 'More Vegetables', 10.00, 2)
  ;
  `
  return dbQuery(query);
};

module.exports = {
  insertDataExpenseJan,
  insertDataExpenseFeb,
  insertDataExpenseMar,
  insertDataExpenseApr,
  insertDataExpenseMay,
  insertDataExpenseJun,
  insertDataExpenseJul,
  insertDataExpenseAug,
  insertDataExpenseSept,
  insertDataExpenseOct,
  insertDataExpenseNov,
  insertDataExpenseDec
};
