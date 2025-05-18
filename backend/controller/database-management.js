const databaseService = require('../service/database-management');  // Import the service

const updateDatabase = async (req, res) => {
    console.log('at controller');
    const result = await databaseService.updateDatabase(req.body);  
    if (result.success) {
      res.status(200).json({ message: 'Update successful' });
    } else {
      console.log(result.error);
      res.status(400).json({ error: result.error });      
    }
};

module.exports = {
  updateDatabase
};
