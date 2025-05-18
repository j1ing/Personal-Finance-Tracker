import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ToggleMode from '../toggle-switch/ToggleMode';
import './NavBar.css';


const NavBar = () => {  
  return (
	<div className='navbar'>
        <div className="navbardropdown">
            <button className="navbardropbtn">Dashboard</button>
            <div className="navbardropdown-content">
                <Link to="/" className="nav-link">View All</Link>
                <Link to="/dashboard-view-ytd" className="nav-link">View YTD</Link>
                <Link to="/dashboard-view-year" className="nav-link">View By Year</Link>
                <Link to="/dashboard-view-quarter" className="nav-link">View By Quarter</Link>
                <Link to="/dashboard-view-month" className="nav-link">View By Month</Link>
            </div>
        </div> 
        <div className="navbardropdown">
            <button className="navbardropbtn">Income</button>
            <div className="navbardropdown-content">
                <Link to="/income-view" className="nav-link">View Income</Link>
                <Link to="/income-edit" className="nav-link">Edit Income</Link>
                <Link to="/income-add" className="nav-link">Add Income</Link>
            </div>
        </div> 
        <div className="navbardropdown">
            <button className="navbardropbtn">Expense</button>
            <div className="navbardropdown-content">
                <Link to="/expense-view" className="nav-link">View Expense</Link>
                <Link to="/expense-edit" className="nav-link">Edit Expense</Link>
                <Link to="/expense-add" className="nav-link">Add Expense</Link>
            </div>
        </div> 
        <div className="navbardropdown">
            <button className="navbardropbtn">Database Managemet</button>
            <div className="navbardropdown-content">
                <Link to="/database-health" className="nav-link">Database Health</Link>
                <Link to="/database-update" className="nav-link">Update Database</Link>
            </div>
        </div>
        <div className="navbardropdown">
            <button className="navbardropbtn">Settings</button>
            <div className="navbardropdown-content">
                <Link to="/settings-essential" className="nav-link">Essential Categories</Link>
            </div>
        </div>
        <div className='togglemodeswitch'>
            <ToggleMode/>
        </div>
	</div>
  );
}

export default NavBar;
