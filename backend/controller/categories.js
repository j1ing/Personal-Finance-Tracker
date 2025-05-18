const categoriesService = require('../service/categories');

// Controller function to view all expenses
const getAllCategoriesController = async (req, res) => {
    try {
        const categories = await categoriesService.getAllCategoriesService();  // Call the service to get all expenses
        res.json(categories);  // Send the result as a JSON response
    } catch (err) {
      console.log(err.message)
        res.status(500).json({ error: err.message });  // Handle error
    }
};



module.exports = {
  getAllCategoriesController
};
