const mongoose = require('mongoose');

const UserModel = mongoose
.model('User',
    {
        id: String,
        firstName: String,
        lastName: String,
        username: String,
        birthYear: Number
    }
);

module.exports = UserModel;

    