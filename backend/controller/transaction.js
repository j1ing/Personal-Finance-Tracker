const transactionService = require('../service/transaction');  // Import the service

// Controller function to view all expenses
const getTransaction = async (req, res) => {
    try {
        const { transactionType, transactionID } = req.body;
        const results = await transactionService.getTransaction(transactionType, transactionID);  
        res.json(results);  // Send the result as a JSON response
    } catch (err) {
        console.error('Error in getTransaction:', err.message);
        res.status(500).json({ error: 'Failed to fetch transaction' });
    }
};

module.exports = {
  getTransaction,
};