const feedBackModel = require("../models/Feedback")
const { saveAfeedBackServices, getAllFeedbackServices, getFeedbackByEmailServices, deleteAfeedbackServices, updateAfeedbackServices } = require("../services/feedback.services")


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

// delete a feedback -----------------------------------
exports.deleteAfeedback = async(req, res, next)=>{
    try {
        const id = req.params.id 
        const result = await deleteAfeedbackServices(id)
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


// update a feedback -------------------------------------
exports.updateAfeedback=async(req, res, next)=>{
    try {

        const id = req.params.id
        const body = req.body 
        const result = await updateAfeedbackServices(id, body)
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
