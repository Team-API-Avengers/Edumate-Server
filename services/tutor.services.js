const Tutor = require("../models/Tutor");


// create tutor service ------------------
exports.createTutorService = async (data) => {
    const result = await Tutor.create(data);
    return result;
};

// get Tutor services --------------
exports.getTutorsService = async () => {
    const results = await Tutor.find({});
    return results;
};


// get Tutor by background --------------
exports.getTutorsCategoryService = async (category) => {
    const result = await Tutor.find({ background: category });
    return result;
};


// get Tutor by id ----------------------
exports.getTutorByService = async (id) => {
    const result = await Tutor.findOne({ _id: id });
    return result;
};




// update tutor service-------------------
exports.updateTutorService = async (tutorId, data) => {
    const result = await Tutor.updateOne({ _id: tutorId }, { $set: data }, { runValidators: true });
    return result;
};

// delete tutor service ---------------
exports.deleteTutorService = async (id) => {
    const result = await Tutor.deleteOne({ _id: id })
    return result
};

// get tutor by category ------------

/* exports.getTutorByCategoryServices=async()=>{
    const result = await Tutor.find({background : {$eq : "background"}})
    return result
} */

// search tutors by location ---------

exports.getTutorByLocationServices = async (location) => {
    console.log(location);
    const result = await Tutor.find({ location: location })
    return result
};

