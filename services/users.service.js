const usersService = {
    createUser: (userObj) => {
        console.log("Reached user service");
        console.log(userObj);
    },
    deleteUser: (userID) => {
        console.log(`Deleted user ${userID} in service`);
    }
}

module.exports = usersService;