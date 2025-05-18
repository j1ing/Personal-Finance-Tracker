const expenseService = require('../service/expenses');  // Import the service

// Controller function to view all expenses
const getAllExpenses = async (req, res) => {
    try {
        const { expenseType } = req.body;
        const results = await expenseService.getAllExpenses(expenseType);  // Call the service to get all expenses
        res.json(results);  // Send the result as a JSON response
    } catch (err) {
        console.error('Error in getAllExpenses:', err.message);
        res.status(500).json({ error: 'Failed to fetch expenses' });
    }
};

// Controller function to view all expenses
const getExpenseTotal = async (req, res) => {
    try {
        const { expenseType, timeFrame, group } = req.body; 
        const results = await expenseService.getExpenseTotal(expenseType, timeFrame, group);  // Call the service to get all expenses
        res.json(results);  // Send the result as a JSON response
    } catch (err) {
        console.error('Error in getExpenseTotal:', err.message);
        res.status(500).json({ error: 'Failed to fetch expense totals' });
    }
};



// Controller function to add a new expense
const addExpense = async (req, res) => {
  const { date, category, subcategory, description, amount, person } = req.body;  // Get data from the request body
  try {
        const newExpense = await expenseService.addExpense(date, category, subcategory, description, amount, person);  // Call service to add a new expense
        res.status(201).json(newExpense);  // Send the result (new expense) as a response
  } catch (err) {
        console.error('Error in addExpense:', err.message);
        res.status(500).json({ error: 'Failed to add expense' });
  }
  
};

// Controller function to edit an existing expense
const editExpense = async (req, res) => {
    const { id, date, category, subcategory, description, amount, person } = req.body;  // Get the updated data from the request body
    try {
        const editedExpense = await expenseService.editExpense(id, date, category, subcategory, description, amount, person);  // Call service to update the expense
        res.status(201).json(editedExpense);  
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ error: err.message }); 
    }
};

// Controller function to delete an existing expense
const deleteExpense = async (req, res) => {
    const { id } = req.body;
    try {
        const deletedExpense = await expenseService.deleteExpense(id);
        res.status(201).json(deletedExpense);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllExpenses,
    getExpenseTotal,
    addExpense,
    editExpense,
    deleteExpense
};
