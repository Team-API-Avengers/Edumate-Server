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

// delete a feedback --------------------------------------------
exports.deleteAfeedbackServices=async(id)=>{
    const result =await feedBackModel.deleteOne({_id : id})
    return result;
}

// update a feedback ----------------------------------------------
exports.updateAfeedbackServices = async(id, body)=>{
    const result = feedBackModel.updateOne({_id : id},{$set : body})
    return result
}