const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    subject : {
        
    }
})

const Test = mongoose.model('Test', testSchema)
module.exports = testSchema;