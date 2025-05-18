const dbQuery = require('../database/dbQuery');  // Import the database connection

// Function to fetch all expenses
const getAllCategoriesModel = () => {
  const query = `
  SELECT id, category, is_expense
  FROM categories
  order by category
  ;
  `
  return dbQuery(query, []);
};


module.exports = {
  getAllCategoriesModel
};