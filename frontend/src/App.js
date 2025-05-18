import './App.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardViewAll from './pages/dashboard/view-all/DashboardViewAll';
import DashboardViewYTD from './pages/dashboard/view-ytd/DashboardViewYTD'
import DashboardViewYear from './pages/dashboard/view-year/DashboardViewYear';
import DashboardViewQuarter from './pages/dashboard/view-quarter/DashboardViewQuarter'
import DashboardViewMonth from './pages/dashboard/view-month/DashboardViewMonth';
import ViewIncome from './pages/income/view-income/ViewIncome';
import EditIncome from './pages/income/edit-income/EditIncome';
import AddIncome from './pages/income/add-income/AddIncome';
import ViewExpense from './pages/expense/view-expense/ViewExpenses';
import EditExpense from './pages/expense/edit-expense/EditExpense';
import AddExpense from './pages/expense/add-expense/AddExpense';
import DatabaseHealth from './pages/database-management/DatabaseHealth';
import UpdateDatabase from './pages/database-management/UpdateDatabase';
import EssentialCategories from './pages/settings/essential-categories/EssentialCategories';


function App() {

  return (
    <Router>
      <NavBar />
      <div className='displaycontent'>
        <Routes>
          //dashboard
          <Route path="/" element={<DashboardViewAll />} />
          <Route path="/dashboard-view-ytd" element={<DashboardViewYTD />} />
          <Route path="/dashboard-view-year" element={<DashboardViewYear />} />
          <Route path="/dashboard-view-quarter" element={<DashboardViewQuarter />} />
          <Route path="/dashboard-view-month" element={<DashboardViewMonth />} />
          //income
          <Route path="/income-view" element={<ViewIncome />} />
          <Route path="/income-edit" element={<EditIncome />} />
          <Route path="/income-add" element={<AddIncome />} />
          //expense
          <Route path="/expense-view" element={<ViewExpense />} />
          <Route path="/expense-edit" element={<EditExpense />} />
          <Route path="/expense-add" element={<AddExpense />} />
          //database management
          <Route path="/database-health" element={<DatabaseHealth />} />
          <Route path="/database-update" element={<UpdateDatabase />} />
          //settings
          <Route path="/settings-essential" element={<EssentialCategories/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
