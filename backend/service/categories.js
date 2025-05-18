const categoriesModel = require('../model/categories'); 

const getAllCategoriesService = async (req, res) => {
  try {
      const categories = await categoriesModel.getAllCategoriesModel();  // Call the service to get all expenses
      const results = categories.map(row => {
        return {
            id: row.id,
            category: row.category,
            is_expense: row.is_expense
        };
    });
     return results;
  } catch (err) {
      res.status(500).json({ error: err.message });  // Handle error
  }
};


module.exports = {
  getAllCategoriesService
};