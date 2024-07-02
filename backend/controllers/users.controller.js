const usersService = require('../services/users.service');

const usersController = {
  getUser: async (req, res) => {
    console.log('Reached GET user controller');
    const username = req.params.username;
    console.log(username);
    const userObj = await usersService.getUserByUsername(username);
    if (!userObj) {
      res.status(404).send('Username not found');
      return;
    }
    res.status(200).send(userObj);
  },
  createUser: async (req, res) => {
    console.log('Reached user controller');
    const userToBeCreated = req.body;
    console.log(userToBeCreated);

    //validate user object from request
    if (!userToBeCreated || !userToBeCreated.id || !userToBeCreated.firstName || !userToBeCreated.lastName || !userToBeCreated.username) {
      res.status(400).send('Invalid user object');
      return;
    }

    usersService.createUser(userToBeCreated);
    res.status(201).send('User created successfully');
  },
  deleteUser: async (req, res) => {
    console.log(`Deleted user with id: ${req.params.id}`);
    const response = await usersService.deleteUser(req.params.id);
    console.log(response);
    res.send(response);
  },
};

module.exports = usersController;
