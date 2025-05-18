const subcategoriesService = require('../service/subcategories');

// Controller function to view all expenses
const getAllSubcategoriesController = async (req, res) => {
    try {
        const subcategories = await subcategoriesService.getAllSubcategoriesService();  // Call the service to get all expenses
        res.json(subcategories);  // Send the result as a JSON response
    } catch (err) {
      console.log(err.message)
        res.status(500).json({ error: err.message });  // Handle error
    }
};


// Controller function to add a new expense
const markEssential = async (req, res) => {
  const { selectedSubcategoryList, unselectedSubcategoryList } = req.body;  // Get data from the request body
  try {
      const results = await subcategoriesService.markEssential(selectedSubcategoryList, unselectedSubcategoryList );  // Call service to add a new expense
      res.status(201).json(results);  // Send the result (new expense) as a response
  } catch (err) {
      res.status(500).json({ error: err.message });  // Handle error
  }
  
};


module.exports = {
  getAllSubcategoriesController,
  markEssential
};