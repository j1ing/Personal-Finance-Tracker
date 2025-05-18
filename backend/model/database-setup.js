const dbQuery = require('../database/dbQuery');  // Import the database connection
  
const createDB = (db) => {
  const query = `
  create database IF NOT EXISTS \`${db}\`
  ;
  `
  return dbQuery(query, { withoutSchema: true });
};

const createCategory = (db) => {
  const query = `
  create table IF NOT EXISTS \`${db}\`.categories (
    id int auto_increment,
    category varchar(32) not null,
    is_expense Boolean not null,
    primary key(id)
  );
  `
  return dbQuery(query, { withoutSchema: true });
};

const createSubcategory = (db) => {
  const query = `
  create table IF NOT EXISTS \`${db}\`.subcategories (
    id int auto_increment,
    category_id int not null,
    subcategory varchar(32) not null,
    is_essential Boolean not null,
    primary key(id),
    CONSTRAINT foreign key (category_id) references \`${db}\`.categories(id)
  );
  `
  return dbQuery(query, { withoutSchema: true });
};

const createPersonnel = (db) => {
  const query = `
  create table IF NOT EXISTS \`${db}\`.personnel (
    id int auto_increment,
    name varchar(16) not null,
    primary key(id)
  );
  `
  return dbQuery(query, { withoutSchema: true });
};

const createExpenseTracker = (db) => {
  const query = `
  create table IF NOT EXISTS \`${db}\`.expense_tracker (
    id int auto_increment,
    expense_date date not null,
    category_id int not null,
    subcategory_id int not null,
    expense_description varchar(64) null,
    amount decimal(14,2) not null,
    target_personnel_id int not null,
    primary key (id),
    CONSTRAINT foreign key (category_id) references \`${db}\`.categories(id),
    CONSTRAINT foreign key (subcategory_id) references \`${db}\`.subcategories(id),
    CONSTRAINT foreign key (target_personnel_id) references \`${db}\`.personnel(id)
  );
  `
  return dbQuery(query, { withoutSchema: true });
};


const createIncomeTracker = (db) => {
  const query = `
  create table IF NOT EXISTS \`${db}\`.income_tracker (
    id int auto_increment,
    income_date date not null,
    subcategory_id int not null,
    income_description varchar(64) null,
    amount decimal(14,2) not null,
    primary key (id),
    CONSTRAINT foreign key (subcategory_id) references \`${db}\`.subcategories(id)
  );
  `
  return dbQuery(query, { withoutSchema: true });
};

const createExpenseReportVW = (db) => {
  const query = `
  create table IF NOT EXISTS \`${db}\`.expense_tracker_report_vw AS
    SELECT a.id, year(a.expense_date) as year, quarter(a.expense_date) as quarter, 
    month(a.expense_date) as month, a.expense_date as date,b.category, 
    c.subcategory, a.expense_description as description, a.amount, d.name, c.is_essential
    FROM \`${db}\`.expense_tracker a
    JOIN \`${db}\`.categories b
    on a.category_id = b.id
    JOIN \`${db}\`.subcategories c
    on a.subcategory_id = c.id
    JOIN \`${db}\`.personnel d
    on a.target_personnel_id = d.id
    where b.is_expense = 1
  ;
  `
  return dbQuery(query, { withoutSchema: true });
};

const createIncomeReportVW = (db) => {
  const query = `
  create table IF NOT EXISTS \`${db}\`.income_tracker_report_vw AS
    SELECT a.id, year(a.income_date) as year, quarter(a.income_date) as quarter, 
    month(a.income_date) as month, a.income_date as date, c.subcategory, 
    a.income_description as description, a.amount
    FROM \`${db}\`.income_tracker a
    JOIN \`${db}\`.subcategories c
    on a.subcategory_id = c.id
    order by a.income_date desc, c.subcategory
  ;
  `
  return dbQuery(query, { withoutSchema: true });
};


module.exports = {
  createDB,
  createCategory,
  createSubcategory,
  createPersonnel,
  createExpenseTracker,
  createIncomeTracker,
  createExpenseReportVW,
  createIncomeReportVW
};