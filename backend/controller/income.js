const incomeService = require('../service/income');  // Import the service

// Controller function to view all income
const getAllIncome = async (req, res) => {
    try {
        const results = await incomeService.getAllIncome();  // Call the service to get all income
        res.json(results);  // Send the result as a JSON response
    } catch (err) {
        console.error('Error in getAllIncome:', err.message);
        res.status(500).json({ error: 'Failed to fetch income' });
    }
};

// Controller function to view all income
const getIncomeTotal = async (req, res) => {
    try {
        const { timeFrame, group } = req.body; 
        const results = await incomeService.getIncomeTotal(timeFrame, group);  // Call the service to get all incomes
        res.json(results);  // Send the result as a JSON response
    } catch (err) {
        console.error('Error in getIncomeTotal:', err.message);
        res.status(500).json({ error: 'Failed to fetch income totals' });
    }
};


// Controller function to add a new income
const addIncome = async (req, res) => {
  const { date, subcategory, description, amount } = req.body;  // Get data from the request body
  try {
      const newIncome = await incomeService.addIncome(date, subcategory, description, amount);  // Call service to add a new income
      res.status(201).json(newIncome);  // Send the result (new income) as a response
  } catch (err) {
        console.error('Error in addIncome:', err.message);
        res.status(500).json({ error: 'Failed to add income' });
  }
};

// Controller function to edit an existing income
const editIncome = async (req, res) => {
    const { id, date, subcategory, description, amount } = req.body;  // Get the updated data from the request body
    try {
        const editedIncome = await incomeService.editIncome(id, date, subcategory, description, amount);  // Call service to update the income
        res.status(201).json(editedIncome); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Controller function to delete an existing income
const deleteIncome = async (req, res) => {
    const { id } = req.body;
    console.log(id)
    try {
        const deletedIncome = await incomeService.deleteIncome(id);
        res.status(201).json(deletedIncome);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllIncome,
    getIncomeTotal,
    addIncome,
    editIncome,
    deleteIncome
};
