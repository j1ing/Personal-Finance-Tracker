const expenseModel = require('../model/expenses');  // Import the service

// Helper functions to validate expenseType
const selectExpenseType = (expenseType) => {
    const types = { 'essential': [1], 'non-essential': [0], 'all': [0, 1] };
    return types[expenseType] || undefined;
}

// Helper functions to validate timeFrame
const selectTimeFrame = (timeFrame) => {
    const acceptableTimeFrames = ['all-time','ytd','yearly','quarterly','monthly']
    return acceptableTimeFrames.includes(timeFrame) ? timeFrame : undefined;
}

// Helper functions to validate group
const selectGroup = (group) => {
    const acceptableGroups = ['all-group','category','subcategory']
    return acceptableGroups.includes(group) ? group : undefined;
}

// Helper functions to map data into result sending back to client
const mapData = (data) => {
    return data.map(row => ({
            year: row.year,
            quarter: row.quarter,
            month: row.month, 
            category: row.category,
            subcategory: row.subcategory,
            totalExpense: row.total_expense // Adjust based on your data structure
        }));
};

//Helper variable to get the correct model given params
const expenseTotalModelMap = {
    'category': {
        'ytd': expenseModel.getExpenseTotalYTDByCategory,
        'yearly': expenseModel.getExpenseTotalByCategoryYearly,
        'quarterly': expenseModel.getExpenseTotalQrtByCategoryYearly,
        'monthly': expenseModel.getExpenseTotalMonthByCategoryYearly,
        'default': expenseModel.getExpenseTotalByCategory
    },
    'subcategory': {
        'ytd': expenseModel.getExpenseTotalYTDBySubcategory,
        'yearly': expenseModel.getExpenseTotalBySubcategoryYearly,
        'quarterly': expenseModel.getExpenseTotalQrtBySubcategoryYearly,
        'monthly': expenseModel.getExpenseTotalMonthBySubcategoryYearly,
        'default': expenseModel.getExpenseTotalBySubcategory
    },
    'all-group': {
        'ytd': expenseModel.getExpenseTotalYTD,
        'yearly': expenseModel.getExpenseTotalYearly,
        'quarterly': expenseModel.getExpenseTotalQrtYearly,
        'monthly': expenseModel.getExpenseTotalMonthYearly,
        'default': expenseModel.getExpenseTotal
    }
};


// service function to fetch all expenses
const getAllExpenses = async (expenseType) => {  // Make the function async
    try {
        const typeSelected = selectExpenseType(expenseType);  // Get the expense type array
        if (!typeSelected) throw new Error("Invalid expense type");

        const data = await expenseModel.getAllExpenses(typeSelected);  // Await the result from the model
        // Format the results
        const results = data.map(row => ({
            'Transaction ID': row.id,
            'Transaction Date': row.date.toISOString().split('T')[0],  // Format date as 'YYYY-MM-DD'
            'Expense Category': row.category,
            'Expense Subcategory': row.subcategory,
            'Expense Description': row.description,
            'Amount': row.amount,
            'Personnel': row.name
        }));
        
        return results;  // Return the formatted results
    } catch (err) {
        console.error(err.message);  // Log the error
        throw new Error('Could not fetch expenses');  // Throw a more general error
    }
};

// service function to fetch all expenses given the params
const getExpenseTotal = async (expenseType, timeFrame, group) => {  // Make the function async
    try {
        const typeSelected = selectExpenseType(expenseType);  // Get the expense type array
        if (!typeSelected) throw new Error("Invalid expense type");

        const timeSelected = selectTimeFrame(timeFrame);  // Get the expense time array
        if (!timeSelected) throw new Error("Invalid time frame");

        const groupSelected = selectGroup(group);  // Get the expense group array
        if (!groupSelected) throw new Error("Invalid expense group");

        const selectedModel = expenseTotalModelMap[group][timeFrame] || expenseTotalModelMap[group].default;
        const data = await selectedModel(typeSelected);
        const results = mapData(data)

        return results;  // Return the formatted results
    } catch (err) {
        console.error(err.message);  // Log the error
        throw new Error('Could not fetch expenses');  // Throw a more general error
    }
};


// Controller function to add a new expense
const addExpense = (date, category, subcategory, description, amount, person) => {
    return expenseModel.addExpense(date, category, subcategory, description, amount, person);
};

// Controller function to edit an existing expense
const editExpense = (id, date, category, subcategory, description, amount, person) => {
    console.log(expenseModel.editExpense(id, date, category, subcategory, description, amount, person));
    return expenseModel.editExpense(id, date, category, subcategory, description, amount, person);
};

// Controller function to edit an existing expense
const deleteExpense = (id) => {
    return expenseModel.deleteExpense(id);
};

module.exports = {
  getAllExpenses,
  getExpenseTotal,
  addExpense,
  editExpense,
  deleteExpense
};
