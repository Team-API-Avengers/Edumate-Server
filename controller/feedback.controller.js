const feedBackModel = require("../models/Feedback")
const { saveAfeedBackServices, getAllFeedbackServices, getFeedbackByEmailServices } = require("../services/feedback.services")


// save a feedback -------------------------------
exports.createAfeedBack = async(req, res, next)=>{
    try {

        const result = await saveAfeedBackServices(req.body)
        res.status(200).json({
            status: 'success',
            massage: "Data inserted Successfully!",
            data: result
        })
    }
     catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }
}

// get all feedback ------------------------------------
exports.getAllFeedback= async(req, res, next)=>{
    try {
        const result= await getAllFeedbackServices()
        res.status(200).json({
            status: 'success',
            massage: "Data inserted Successfully!",
            data: result
        })
    } 
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }
}

// get feedback by email ---------------------------------
exports.getFeedbackByEmail = async(req, res, next)=>{
    try {

        const email =  req.params.email
        const result = await getFeedbackByEmailServices(email)
        res.status(200).json({
            status: 'success',
            massage: "Data inserted Successfully!",
            data: result
        })
    } 
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }
}