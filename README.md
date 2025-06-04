# 💰Personal Finance Tracker
A full-stack web application designed to help users track their income and expenses, providing insights into their financial health.

## ✨Features
### ✅Income & Expense Tracking: 

- Log and categorize your financial transactions.

- Consistent UI for:
  - Viewing: Table view of all transactions.

  - Adding: Form to log new transactions.
  
  - Editing: Update or delete existing transactions by transaction ID.

### 📊Dashboard Overview: 

- Visualize your financial data with charts and summaries by selected time period.
  - Time filters:
    - All time
    - Year-to-date (YTD)
    - By Year / Quarter / Month
- Chart Types:
  - Ring charts: Income (green) vs. Expense (red)
  - Radar charts: Spending distribution by category

### ⚙️Database Management & Settings: 

- Customize and manage categories, subcategories, and personnel.
- Update “essential expense” categories to fine-tune net income calculations.

### 💾Data Persistence: 
- Data is stored in destinated schemas in MySQL database.

### 🧪Demo:
- Test the application using pre-loaded demo data without affecting real records.

## 🛠️Tech Stack
<pre><code>
Layer/ Tech
Frontend:  React.js
Backend:  Node.js, Express.js
Database:  MySQL

🔐 Note: No user authentication — this is built for personal/local use.
</code></pre>

## 🚀Getting Started
Prerequisites
- Node.js (v14 or later)
- MySQL

## 1. Setup Environment
Create a .env file inside the backend/ directory (Insert your password. Change host and user if applicable):
<pre><code>
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
</code></pre>

## 2. Install and Run Backend, Frontend
Open 2 command prompts, rename one to 'frontend', another 'backend'

In the 'backend' cmd
<pre><code>
cd bakcend
npm install
npm start
</code></pre>
- On startup, the server connects to MySQL and:
  - Checks if required schemas exist
  - If missing, creates them (real + demo)
  - Populates demo data automatically

In the 'frontend' cmd
<pre><code>
cd frontend
npm install
npm start
</code></pre>
- App will launch in the browser displaying demo data
- Use the toggle button (top right) to switch between demo and real database

## 📂 Project Structure
<pre><code>
/
├── frontend/       # React frontend
├── backend/        # Express backend
└── README.md
</code></pre>


## 🛠️ Future Improvement
### High Priority
- Dockerize
- Add chart title
- Filter input needs to be case insensitive
- Filter operator for date
- Show where to find transaction ID from edit page
- Restrict transation ID finder to only positive values
- Show transaction ID after adding
- Conflict states between toggle btn and data schema when refresh btn is clicked
### Medium Priority
- Show amount and definition for gross and net income
- Saving target adjustment UI
- Incoporate keystroke Enter as submit
- Date select, backspace not working
### Low Priority
- Improve filters on dashboard. Change data when selected not when clicked button.
- Refresh page after update transaction
- Essential categories is not saving an empty list after reset button
### Completed
- Standardize naming convention for personnel (2025-05-15)
- Refactor update database logic: Only expense category can be added. (2025-05-15)