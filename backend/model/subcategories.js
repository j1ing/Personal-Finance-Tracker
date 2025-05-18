const dbQuery = require('../database/dbQuery');  // Import the database connection

// Function to fetch all expenses
const getAllSubcategoriesModel = () => {
  const query = `
  SELECT a.id, a.category_id, a.subcategory, b.is_expense, a.is_essential
  FROM subcategories a
  JOIN categories b
  on a.category_id = b.id
  order by subcategory
  ;
  `
  return dbQuery(query);
};

// Function to fetch all expenses
const markEssential = (selectedSubcategoryList) => {
  const query = `
    update subcategories
    set is_essential = 1
    where id in (?);
    `
  return dbQuery(query, [selectedSubcategoryList]);
};

const unmarkEssential = (unselectedSubcategoryList) => {
  const query = `
    update subcategories
    set is_essential = 0
    where id in (?);
    `
  return dbQuery(query, [unselectedSubcategoryList]);
};

module.exports = {
  getAllSubcategoriesModel,
  markEssential,
  unmarkEssential
};