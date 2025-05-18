const dashboardIncomeService = require('../service/dashboard-income-ytd');

// Controller function to view all income
const getIncomeYTD = async (req, res) => {
    try {
        const data = await dashboardIncomeService.getIncomeYTD();  // Call the service to get all income
        res.json(data);  // Send the result as a JSON response
    } catch (err) {
      console.log(err.message)
        res.status(500).json({ error: err.message });  // Handle error
    }
};


const getIncomeYTDBySubcategory = async (req, res) => {
  try {
      const data = await dashboardIncomeService.getIncomeYTDBySubcategory();  // Call the service to get all income
      res.json(data);  // Send the result as a JSON response
  } catch (err) {
    console.log(err.message)
      res.status(500).json({ error: err.message });  // Handle error
  }
};



module.exports = {
  getIncomeYTD,
  getIncomeYTDBySubcategory
};
