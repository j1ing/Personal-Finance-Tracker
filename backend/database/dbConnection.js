require('dotenv').config();  // Load environment variables
const mysql = require('mysql');

// In-memory variable to store the current database mode (default to 'real')
let currentDatabase = 'demo_expense';  // Initial mode

// Function to update the database mode (switch between 'demo' and 'real')
const switchDatabaseMode = (mode) => {
  if (mode === 'demo') {
    currentDatabase = 'demo_expense';
  } else if (mode === 'real') {
    currentDatabase = 'expense';
  } else {
    throw new Error('Invalid mode. Please select either "demo" or "real".');
  }
  console.log(`Database switched. Current Database: ${currentDatabase}`)

  const db = createDbConnection();
  db.connect(err => {
    if (err) {
        console.error('Database connection failed: ', err);
    } else {
        console.log(`Connected to MySQL Database: ${currentDatabase}`);
    }
  });
};

// Function to create a new DB connection based on the current mode
const createDbConnection = ({ withoutSchema = false } = {}) => {
  const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ...(withoutSchema ? {} : { database: currentDatabase }), // include schema only if not skipping
  };

  return mysql.createConnection(config);
};


module.exports = { createDbConnection, switchDatabaseMode };