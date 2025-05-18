const db = require('../database/dbConnection');  // Import the database connection

// Function to fetch all expenses
const getIncomeTotalYTD = () => {
    return new Promise((resolve, reject) => {
        query = `
        select sum(amount) as ytd_income
        FROM income_tracker
        where year(income_date) = year(current_date())
        ;
        `
        db.query(query, (err, results) => {
            if (err) {
                reject(err);  // Reject the promise if there's an error
            } else {
                resolve(results);  // Resolve the promise with the results
            }
        });
    });
};



const getIncomeTotalYTDBySubcategory = () => {
    return new Promise((resolve, reject) => {
        query = `
        select b.subcategory, sum(amount) as ytd_income
        FROM income_tracker a
        join subcategories b
        on a.subcategory_id = b.id
        where year(income_date) = year(current_date())
        group by b.subcategory
        order by sum(amount) desc
        ;
        `
        db.query(query, (err, results) => {
            if (err) {
                reject(err);  // Reject the promise if there's an error
            } else {
                resolve(results);  // Resolve the promise with the results
            }
        });
    });
  };



module.exports = {
  getIncomeTotalYTD,
  getIncomeTotalYTDBySubcategory
};