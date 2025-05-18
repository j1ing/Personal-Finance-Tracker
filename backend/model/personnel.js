const dbQuery = require('../database/dbQuery');  // Import the database connection

// Function to fetch all expenses
const getAllPersonnelModel = () => {
    const query = `
    SELECT id, name
    FROM personnel
    ;
    `
    return dbQuery(query, []);
};


module.exports = {
    getAllPersonnelModel
};