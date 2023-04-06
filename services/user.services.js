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
    const result = await UserModel.findOne({ _id: id });
    return result;
};


// update a User ---------
exports.updateAUserServices = async (id, data) => {
    const result = await UserModel.updateOne({ _id: id }, { $set: data });
    return result;
};


// delete a User --------
exports.deleteAUserService = async (id) => {
    const result = await UserModel.deleteOne({ _id: id });
    return result;
};

// get user by email-------------
exports.getUserByEmailServices=async(email)=>{
    const result = await UserModel.findOne({email : email})
    return result
}