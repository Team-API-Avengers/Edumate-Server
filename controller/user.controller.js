const { createAUserServices, getAllUserServices, getAUserByIdServices, updateAUserServices, deleteAUserService, getUserByEmailServices, getUserAsStudentServices, getUserAsTeacherServices, getUserAsAdminServices } = require("../services/user.services");


// create a user -------
exports.createAUser = async (req, res, next) => {
    try {
        const result = await createAUserServices(req.body)

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
};


// get all user -------
exports.getAllUser = async (req, res, next) => {
    try {
        const result = await getAllUserServices()

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
};



// get a user by their id -----
exports.getAUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await getAUserByIdServices(id);

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
};


// update a user by their id -----
exports.updateAUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await updateAUserServices(id, req.body);

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
};



// delete a user by their id -----
exports.deleteAUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await deleteAUserService(id);

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


};

// get user by email 
exports.getUserByEmail=async(req, res, next)=>{
    try {
        const email = req.params.email;
        console.log(email)
        const result = await getUserByEmailServices(email);

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

// get user as an student ------------------------
exports.getUserAsStudent = async(req, res, next)=>{
    try {
        const result= await getUserAsStudentServices()
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

// get all user as an teacher-----------------------
exports.getUserAsTeacher = async(req, res, next)=>{
    try {
        const result= await getUserAsTeacherServices()
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

// get all user as an admin-----------------------
exports.getUserAsAdmin = async(req, res, next)=>{
    try {
        const result= await getUserAsAdminServices()
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