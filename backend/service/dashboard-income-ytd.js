const dashboardIncomeModel = require('../model/dashboard-income-ytd');  // Import the service

// Controller function to view all income
const getIncomeYTD = async (req, res) => {
  try {
      const data = await dashboardIncomeModel.getIncomeTotalYTD();  // Call the service to get all income
      const results = data.map(row => {
        return {
            ytd_income: row.ytd_income
        };
    });
     return results;
  } catch (err) {
      res.status(500).json({ error: err.message });  // Handle error
  }
};

const getIncomeYTDBySubcategory = async (req, res) => {
  try {
      const data = await dashboardIncomeModel.getIncomeTotalYTDBySubcategory();  // Call the service to get all income
      console.log(data)
      const results = data.map(row => {
        return {
          subcategory: row.subcategory,
          ytd_income: row.ytd_income
        };
    });
     return results;
  } catch (err) {
      res.status(500).json({ error: err.message });  // Handle error
  }
};

module.exports = {
  getIncomeYTD,
  getIncomeYTDBySubcategory
};
