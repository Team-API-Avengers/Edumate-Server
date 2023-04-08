const feedBackModel = require('../models/Feedback')

// save a feedBack services ---------------------------
exports.saveAfeedBackServices = async(data)=>{
    const result = await feedBackModel.create(data)
    return result;
}

// get all feedback from database ----------------------
exports.getAllFeedbackServices=async()=>{
    const result = await feedBackModel.find({})
    return result;
}

// get feedback by email from database ----------------------
exports.getFeedbackByEmailServices=async(email)=>{
    const result = await feedBackModel.find({email : email})
    return result
}