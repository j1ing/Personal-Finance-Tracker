const config = (categoryList, subcategoryList, personnelList) => {
  return {
    'Expense Category': {
      Add: [
        {
          type: 'input',
          name: 'NewName',
          label: 'Enter New Expense Category Name'
        }        
      ],
      Delete: [
        {
          type: 'select',
          name: 'DeleteName',
          label: 'Select Expense Category',
          itemList: categoryList.filter(item => item !== 'Income')
        }
      ],
      Rename: [
        {
          type: 'select',
          name: 'RenameFrom',
          label: 'Rename From',
          itemList: categoryList.filter(item => item !== 'Income')
        },
        {
          type: 'input',
          name: 'RenameTo',
          label: 'Enter New Expense Category Name'
        }
      ]
    },
    'Income/ Expense Subcategory': {
      Add: [
        {
          type: 'select',
          name: 'AssignedType',
          label: 'Select Category Type',
          itemList: categoryList
        },
        {
          type: 'input',
          name: 'NewName',
          label: 'Enter New Subcategory Name'
        }
      ],
      Delete: [
        {
          type: 'select',
          name: 'DeleteName',
          label: 'Select Subcategory',
          itemList: subcategoryList
        }
      ],
      Rename: [
        {
          type: 'select',
          name: 'RenameFrom',
          label: 'Rename From',
          itemList: subcategoryList
        },
        {
          type: 'input',
          name: 'RenameTo',
          label: 'Enter New Subategory Name'
        }
      ]
    },
    Personnel: {
      Add: [
        {
          type: 'input',
          name: 'NewName',
          label: 'Enter New Personnel Name'
        }
      ],
      Delete: [
        {
          type: 'select',
          name: 'DeleteName',
          label: 'Select Personnel',
          itemList: personnelList
        }
      ],
      Rename: [
        {
          type: 'select',
          name: 'RenameFrom',
          label: 'Rename From',
          itemList: personnelList
        },
        {
          type: 'input',
          name: 'RenameTo',
          label: 'Enter New Personnel Name'
        }
      ]
    }
  }
};

export default config;
