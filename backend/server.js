const express = require('express');
const { createDbConnection, switchDatabaseMode }  = require('./database/dbConnection'); 
const expenseController = require('./controller/expenses'); 
const incomeController = require('./controller/income');
const personnelController = require('./controller/personnel'); 
const categoriesController = require('./controller/categories');
const subcategoriesController = require('./controller/subcategories');
const dashboardIncomeController = require('./controller/dashboard-income-ytd');
const transactionController = require('./controller/transaction');
const databaseController = require('./controller/database-management');
const databaseInitialization = require('./service/database-initialization');
const cors = require('cors');


const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());


(async () => {
    const rootDb = createDbConnection({ withoutSchema: true }); // Connect without selecting a DB
    try {
        await rootDb.connect();
        console.log('Connected to MySQL without schema');

        console.log('Checking database schema requirements');
        await databaseInitialization.runSetup(); // Check & create schemas/tables

        console.log('✅ Schemas and tables ready.');

        const db = createDbConnection();
        db.connect(err => {
            if (err) {
                console.error('Database connection failed: ', err);
            } else {
                console.log('Connected to MySQL Default Database: demo_expense');
            }
        });

        // Route to switch between demo and real databases
        app.post('/api/set-mode', (req, res) => {
        const { mode } = req.body;
        try {
            // Switch the database mode dynamically
            switchDatabaseMode(mode);
            res.send({ message: `Switched to ${mode} mode.` });
        } catch (error) {
            res.status(400).send(error.message);
        }
        });

        // Route to view all expenses
        app.post('/expense-view', expenseController.getAllExpenses);
        app.get('/income-view', incomeController.getAllIncome);
        app.get('/personnel-view', personnelController.getAllPersonnelController);
        app.get('/categories-view', categoriesController.getAllCategoriesController);
        app.get('/subcategories-view', subcategoriesController.getAllSubcategoriesController);

        app.post('/expense-total', expenseController.getExpenseTotal)
        app.post('/income-total', incomeController.getIncomeTotal)

        app.get('/dashboard-income-ytd', dashboardIncomeController.getIncomeYTD);
        app.get('/dashboard-income-ytd-subcategories', dashboardIncomeController.getIncomeYTDBySubcategory);


        app.post('/transactionid', transactionController.getTransaction);

        app.put('/expense-add', expenseController.addExpense);
        app.put('/expense-edit', expenseController.editExpense);
        app.put('/income-add', incomeController.addIncome);
        app.put('/income-edit', incomeController.editIncome);
        app.put('/essential-categories-selected', subcategoriesController.markEssential)
        app.put('/update-database', databaseController.updateDatabase)


        app.delete('/expense-edit', expenseController.deleteExpense);
        app.delete('/income-edit', incomeController.deleteIncome);

        // Start Server
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        })
    } catch (err) {
        console.error('❌ Schema initialization failed:', err.message);
        process.exit(1);
    }
})();
