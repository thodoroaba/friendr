const UserModel = require('../data/users.model');

const usersService = {
  getUserById: async (userId) => {
    const response = await UserModel.findOne({ id: userId }, { firstName: 1, lastName: 1, _id: 0 });
    return response;
  },
  getUserByUsername: async (username) => {
    const response = await UserModel.findOne({ username: username }, { firstName: 1, lastName: 1, _id: 0 });
    return response;
  },
  createUser: (userObj) => {
    console.log('Reached user service');
    console.log(userObj);
    const userToBeCreated = new UserModel(userObj);
    userToBeCreated.save().then(() => console.log('User created'));
  },
  deleteUser: async (userID) => {
    console.log(`Deleted user ${userID} in service`);
    const response = await UserModel.deleteOne({ id: userID });
    return response;
  },
};

module.exports = usersService;
