const tableSearch = (data,searchValue) => {
  return data.filter(obj => 
    Object.values(obj).some(value => 
      String(value).toLowerCase().includes(searchValue.toLowerCase())
    )
  );
};

export default tableSearch;