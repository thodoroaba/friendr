const usersService = require("../services/users.service");

const usersController = {
    createUser: (userObj) => {
        console.log("Reached user controller");
        console.log(userObj);
        usersService.createUser(userObj);
    },
    delete: (userID) => {
        console.log(`Deleted user with id: ${userID}`);
        usersService.deleteUser(userID);
    }
}

module.exports = usersController;