const incomeModel = require('../model/income');  // Import the service

// Helper functions to validate timeFrame
const selectTimeFrame = (timeFrame) => {
    const acceptableTimeFrames = ['all-time','ytd','yearly','quarterly','monthly']
    return acceptableTimeFrames.includes(timeFrame) ? timeFrame : undefined;
}

// Helper functions to validate group
const selectGroup = (group) => {
    const acceptableGroups = ['all','subcategory']
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
            totalIncome: row.total_income // Adjust based on your data structure
        }));
};

//Helper variable to get the correct model given params
const incomeTotalModelMap = {
    'subcategory': {
        'ytd': incomeModel.getIncomeTotalYTDBySubcategory,
        'yearly': incomeModel.getIncomeTotalYearBySubcategoryYearly,
        'quarterly': incomeModel.getIncomeTotalQrtBySubcategoryYearly,
        'monthly': incomeModel.getIncomeTotalMonthBySubcategoryYearly,
        'default': incomeModel.getIncomeTotalBySubcategory
    },
    'all': {
        'ytd': incomeModel.getIncomeTotalYTD,
        'yearly': incomeModel.getIncomeTotalYearly,
        'quarterly': incomeModel.getIncomeTotalQrtYearly,
        'monthly': incomeModel.getIncomeTotalMonthYearly,
        'default': incomeModel.getIncomeTotal
    }
};

// Controller function to view all incomes
const getAllIncome = async () => {
    try {
        const data = await incomeModel.getAllIncome();  // Call the service to get all incomes
        const results = data.map(row => ({
              'Transaction ID': row.id,
              'Transaction Date': row.date.toISOString().split('T')[0],
              'Income Subcategory': row.subcategory,
              'Income Description': row.description,
              'Amount': row.amount
          }));

       return results;
    } catch (err) {
        console.error(err.message);  // Log the error
        throw new Error('Could not fetch income');  // Throw a more general error
    }
};

// service function to fetch all income given the params
const getIncomeTotal = async (timeFrame, group) => {  // Make the function async
    try {
        const timeSelected = selectTimeFrame(timeFrame);  // Get the income time array
        if (!timeSelected) throw new Error("Invalid time frame");

        const groupSelected = selectGroup(group);  // Get the income group array
        if (!groupSelected) throw new Error("Invalid income group");

        const selectedModel = incomeTotalModelMap[group][timeFrame] || incomeTotalModelMap[group].default;
        const data = await selectedModel();
        const results = mapData(data)

        return results;  // Return the formatted results
    } catch (err) {
        console.error(err.message);  // Log the error
        throw new Error('Could not fetch incomes');  // Throw a more general error
    }
};


// Controller function to add a new income
const addIncome = (date, subcategory, description, amount) => {
    return incomeModel.addIncome(date, subcategory, description, amount);  // Call service to add a new income
};

// Controller function to edit an existing income
const editIncome = (id, date, subcategory, description, amount) => {
    return incomeModel.editIncome(id, date, subcategory, description, amount);  // Call service to update the income
};

// Controller function to edit an existing income
const deleteIncome = (id) => {
    return incomeModel.deleteIncome(id);  // Call service to update the income
};

module.exports = {
  getAllIncome,
  getIncomeTotal,
  addIncome,
  editIncome,
  deleteIncome
};
