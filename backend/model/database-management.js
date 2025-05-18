const dbQuery = require('../database/dbQuery');  // Import the database connection

// edit selected income
const ifExist = (value) => {
    const query = `
    select *
    from (
        select category as val
        from categories 
        union all
        select concat(category,'/ ',subcategory) as val
        from categories a
        join subcategories b
        on a.id = b.category_id
        union all
        select name as val
        from personnel
    ) as combined
    where val = ?
    ;
    `
    return dbQuery(query, [value]);
};

const hasChildrenCategory = (id) => {
    const query = `
    select *
    from (
        select category_id, subcategory_id, target_personnel_id
        from expense_tracker
        union all 
        select null as category_id, subcategory_id, null as target_personnel_id
        from income_tracker
    ) combined
    where category_id = ?
    limit 1
    ;
    `
    console.log(id)
    console.log(dbQuery(query, [id]))
    return dbQuery(query, [id]);
};

const hasChildrenSubcategory = (id) => {
    const query = `
    select *
    from (
        select category_id, subcategory_id, target_personnel_id
        from expense_tracker
        union all 
        select null as category_id, subcategory_id, null as target_personnel_id
        from income_tracker
    ) combined
    where subcategory_id = ?
    limit 1
    ;
    `
    return dbQuery(query, [id]);
};


const hasChildrenPersonnel = (id) => {
    const query = `
    select *
    from (
        select category_id, subcategory_id, target_personnel_id
        from expense_tracker
        union all 
        select null as category_id, subcategory_id, null as target_personnel_id
        from income_tracker
    ) combined
    where target_personnel_id = ?
    limit 1
    ;
    `
    return dbQuery(query, [id]);
};


const addNewCategory = (valueObj) => {
    const query = `
    INSERT INTO categories (category, is_expense)
    VALUES(?,?)
    ;
    `
    return dbQuery(query, [valueObj.NewName, valueObj.AssignedType]);
};

const deleteCategory = (valueObj) => {
    const query = `
    DELETE FROM  categories
    where id = ?
    ;
    `
    return dbQuery(query, [valueObj.DeleteName]);
};

const renameCategory = (valueObj) => {
    const query = `
    UPDATE categories
    SET category = ?
    WHERE id = ?
    ;
    `
    return dbQuery(query, [valueObj.RenameTo, valueObj.RenameFrom]);
};


const addNewSubcategory = (valueObj) => {
    const query = `
    INSERT INTO subcategories (category_id, subcategory, is_essential)
    VALUES(?,?,0)
    ;
    `
    return dbQuery(query, [valueObj.AssignedType, valueObj.NewName]);
};
const deleteSubcategory = (valueObj) => {
    const query = `
    DELETE FROM  subcategories
    where id = ?
    ;
    `
    return dbQuery(query, [valueObj.DeleteName]);
};
const renameSubcategory = (valueObj) => {
    const query = `
    UPDATE subcategories
    SET subcategory = ?
    WHERE id = ?
    ;
    `
    return dbQuery(query, [valueObj.RenameTo, valueObj.RenameFrom]);
};

const addNewPersonnel = (valueObj) => {
    const query = `
    INSERT INTO personnel (name)
    VALUES(?)
    ;
    `
    return dbQuery(query, [valueObj.NewName]);
};
const deletePersonnel = (valueObj) => {
    const query = `
    DELETE FROM  personnel
    where id = ?
    ;
    `
    return dbQuery(query, [valueObj.DeleteName]);
};
const renamePersonnel = (valueObj) => {
    const query = `
    UPDATE personnel
    SET name = ?
    WHERE id = ?
    ;
    `
    return dbQuery(query, [valueObj.RenameTo, valueObj.RenameFrom]);
};


module.exports = {
    ifExist,
    hasChildrenCategory,
    hasChildrenSubcategory,
    hasChildrenPersonnel,
    addNewCategory,
    deleteCategory,
    renameCategory,
    addNewSubcategory,
    deleteSubcategory,
    renameSubcategory,
    addNewPersonnel,
    deletePersonnel,
    renamePersonnel
};