const dbQuery = require('../database/dbQuery');  // Import the database connection

const checkIfDBExist = (db) => {
  const query = `
  SELECT SCHEMA_NAME 
  FROM information_schema.schemata 
  WHERE SCHEMA_NAME = ?
  ;
  `
  return dbQuery(query, [db], { withoutSchema: true });
};

module.exports = {
  checkIfDBExist
};