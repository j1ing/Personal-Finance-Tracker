const personnelService = require('../service/personnel');

// Controller function to view all expenses
const getAllPersonnelController = async (req, res) => {
    try {
        const personnel = await personnelService.getAllPersonnelService();  // Call the service to get all expenses
        res.json(personnel);  // Send the result as a JSON response
    } catch (err) {
      console.log(err.message)
        res.status(500).json({ error: err.message });  // Handle error
    }
};



module.exports = {
  getAllPersonnelController
};
