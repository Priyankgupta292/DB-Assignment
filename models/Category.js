const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now(),
    },
    modified_at:{
        type:Date,
       
    },
    deleted_at:{
        type:Date,
       
    }

})

module.exports = mongoose.model("Category", CategorySchema);
