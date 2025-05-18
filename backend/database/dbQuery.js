const { createDbConnection }  = require('./dbConnection'); 

const dbQuery = (query, params, options = {}) => {
  const db = createDbConnection(options);
  return new Promise((resolve, reject) =>
    db.query(query, params, (err, results) => {
      db.end(); // ✅ Always close connection after query
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
  }))
};

module.exports = dbQuery;