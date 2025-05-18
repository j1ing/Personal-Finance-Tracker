const dbQuery = require('../database/dbQuery');  // Import the database connection

// Function to fetch all income
const getAllIncome = () => {
    const query = `
        SELECT id, date, subcategory, description, amount
        FROM income_tracker_report_vw
        order by date desc, subcategory
        ;
        `
    return dbQuery(query);
};


// Function to fetch sum of all income
const getIncomeTotal = () => {
    const query = `
        select sum(amount) as total_income
        FROM income_tracker_report_vw
        ;
        `
    return dbQuery(query);
};

// Function to fetch sum of all income by subcategory
const getIncomeTotalBySubcategory = () => {
    const query = `
        select subcategory, sum(amount) as total_income
        FROM income_tracker_report_vw
        group by subcategory
        order by total_income desc
        ;
        `
    return dbQuery(query);
};


// Function to fetch sum of all income year to date
const getIncomeTotalYTD = () => {
    const query = `
        select sum(amount) as total_income
        FROM income_tracker_report_vw
        where year = year(current_date())
        ;
        `
    return dbQuery(query);
};

// Function to fetch sum of all income by subcategory year to date
const getIncomeTotalYTDBySubcategory = () => {
    const query = `
        select subcategory, sum(amount) as total_income
        FROM income_tracker_report_vw
        where year = year(current_date())
        group by subcategory
        order by total_income desc
        ;
        `
    return dbQuery(query);
};

// Function to fetch sum of all income by year
const getIncomeTotalYearly = () => {
    const query = `
        select year, sum(amount) as total_income
        FROM income_tracker_report_vw
        group by year
        order by year desc
        ;
        `
    return dbQuery(query);
};

// Function to fetch sum of all income by subcategory by year
const getIncomeTotalYearBySubcategoryYearly = () => {
    const query = `
        select year, subcategory, sum(amount) as total_income
        FROM income_tracker_report_vw
        group by year, subcategory
        order by year desc, total_income desc
        ;
        `
    return dbQuery(query);
};

// Function to fetch sum of all income quarterly by year
const getIncomeTotalQrtYearly = () => {
    const query = `
        select year, quarter, sum(amount) as total_income
        FROM income_tracker_report_vw
        group by year, quarter
        order by year desc, quarter
        ;
        `
    return dbQuery(query);
};

// Function to fetch sum of all income by subcategory quarterly by year
const getIncomeTotalQrtBySubcategoryYearly = () => {
    const query = `
        select year, quarter, subcategory, sum(amount) as total_income
        FROM income_tracker_report_vw
        group by year, quarter, subcategory
        order by year desc, quarter, total_income desc
        ;
        `
    return dbQuery(query);
};

// Function to fetch sum of all income monthly by year
const getIncomeTotalMonthYearly = () => {
    const query = `
        select year, month, sum(amount) as total_income
        FROM income_tracker_report_vw
        group by year, month
        order by year desc, month
        ;
        `
    return dbQuery(query);
};

// Function to fetch sum of all income by subcategory monthly by year
const getIncomeTotalMonthBySubcategoryYearly = () => {
    const query = `
        select year, month, subcategory, sum(amount) as total_income
        FROM income_tracker_report_vw
        group by year, month, subcategory
        order by year desc, month, total_income desc
        ;
        `
    return dbQuery(query);
};


// add new income
const addIncome = (date, subcategory, description, amount) => {
    const query = `
        INSERT INTO income_tracker 
        (income_date, subcategory_id, income_description, amount)
        VALUES
        (?,?,?,?);`
    
    return dbQuery(query, [date, subcategory, description, amount]);
};


// edit selected income
const editIncome = (id, date, subcategory, description, amount) => {
    const query = `
    UPDATE income_tracker
    SET income_date = ?,
    subcategory_id = ?,
    income_description = ?,
    amount = ?
    WHERE id = ?
    ;
    `
    return dbQuery(query, [date, subcategory, description, amount, id]);
};

// edit selected income
const deleteIncome = (id) => {
    const query = `
    DELETE FROM income_tracker
    WHERE id = ?
    ;
    `
    return dbQuery(query, [id]);
};

module.exports = {
    getAllIncome,
    getIncomeTotal,
    getIncomeTotalBySubcategory,
    getIncomeTotalYTD,
    getIncomeTotalYTDBySubcategory,
    getIncomeTotalYearly,
    getIncomeTotalYearBySubcategoryYearly,
    getIncomeTotalQrtYearly,
    getIncomeTotalQrtBySubcategoryYearly,
    getIncomeTotalMonthYearly,
    getIncomeTotalMonthBySubcategoryYearly,
    addIncome,
    editIncome,
    deleteIncome
};