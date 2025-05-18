const personnelModel = require('../model/personnel'); 

const getAllPersonnelService = async (req, res) => {
  try {
      const personnel = await personnelModel.getAllPersonnelModel();  // Call the service to get all expenses
      const results = personnel.map(row => {
        return {
            id: row.id,
            name: row.name
        };
    });
     return results;
  } catch (err) {
      res.status(500).json({ error: err.message });  // Handle error
  }
};


module.exports = {
  getAllPersonnelService
};