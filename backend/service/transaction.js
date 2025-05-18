const expenseService = require('./expenses');
const incomeService = require('./income')

// Controller function to view all expenses
const getTransaction = async (transactionType, transactionID) => {
    try {
        let data = [];
        if(transactionType.toLowerCase()==='expense'){
          data = await expenseService.getAllExpenses('all');
        }
        else if(transactionType.toLowerCase() === 'income') {
          data = await incomeService.getAllIncome();
        }
        else {
          throw new Error("Invalid transaction type");
        }

        const results = data.reduce((found, item) => {
          return found || (item['Transaction ID'] === transactionID ? item : null);
        }, null);

        return results;  // Return the formatted results
      } catch (err) {
          console.error(err.message);  // Log the error
          throw new Error('Could not fetch transaction');  // Throw a more general error
    }
};

module.exports = {
  getTransaction,
};