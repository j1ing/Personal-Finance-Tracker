const subcategoriesModel = require('../model/subcategories'); 

const getAllSubcategoriesService = async (req, res) => {
  try {
      const subcategories = await subcategoriesModel.getAllSubcategoriesModel();  // Call the service to get all expenses
      const results = subcategories.map(row => {
        return {
            id: row.id,
            category_id: row.category_id,
            subcategory: row.subcategory,
            is_expense: row.is_expense,
            is_essential: row.is_essential
        };
    });
     return results;
  } catch (err) {
      res.status(500).json({ error: err.message });  // Handle error
  }
};


const markEssential = async (selectedSubcategoryList, unselectedSubcategoryList ) => {
  try {
    if (!Array.isArray(selectedSubcategoryList) || !Array.isArray(unselectedSubcategoryList)) {
      throw new Error('Both selected and unselected lists must be arrays');
    }
    // Begin transaction (or use promise.all if no transaction is required)
    const results = await Promise.all([
      selectedSubcategoryList.length > 0 ? subcategoriesModel.markEssential(selectedSubcategoryList) : null,
      unselectedSubcategoryList.length > 0 ? subcategoriesModel.unmarkEssential(unselectedSubcategoryList) : null,
    ]);
    
    // Filter out null results from the Promise.all to handle empty array cases
    return results.filter(result => result !== null);
} catch (err) {
    throw new Error(`Error updating subcategories: ${err.message}`);
}
};



module.exports = {
  getAllSubcategoriesService,
  markEssential
};