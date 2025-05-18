const concateCategoriesWithSubcategories = (categoriesData, subcategoriesData) => {
  return subcategoriesData.map(subcategory => {
    const category = categoriesData.find(cat => cat.id === subcategory.category_id);
    return {
      id: subcategory.id,
      concatedName: `${category.category}/ ${subcategory.subcategory}`
    };
  });
};

export default concateCategoriesWithSubcategories;
