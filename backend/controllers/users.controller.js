const UserModel = require("../data/users.model");
const usersService = require("../services/users.service");

const usersController = {
  getUser: async (req, res) => {
    console.log("Reached GET user controller");
    const userId = req.params.id;
    console.log(req.params.id);
    const userObj = await usersService.getUserById(userId);
    res.status(200).send(userObj);
  },
  createUser: async (req, res) => {
    console.log("Reached user controller");
    const userToBeCreated = req.body;
    console.log(userToBeCreated);

    //validate user object from request
    if (
      !userToBeCreated ||
      !userToBeCreated.id ||
      !userToBeCreated.firstName ||
      !userToBeCreated.lastName ||
      !userToBeCreated.userName
    ) {
      res.status(400).send("Invalid user object");
      return;
    }

    usersService.createUser(userToBeCreated);
    res.status(201).send("User created successfully");
  },
  deleteUser: async (req, res) => {
    console.log(`Deleted user with id: ${userID}`);
    usersService.deleteUser(userID);
  },
};

module.exports = usersController;
