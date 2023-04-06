const UserModel = require("../models/User");

// create a user
exports.createAUserServices = async (data) => {
    const result = await UserModel.create(data);
    return result;
};


// get all user --------
exports.getAllUserServices = async () => {
    const result = await UserModel.find({});
    return result;
};


// get a User By Id ------
exports.getAUserByIdServices = async (id) => {
    const result = await UserModel.find({ _id: id });
    return result;
};