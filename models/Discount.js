const mongoose = require('mongoose');

const DiscountSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true
    },
    discount_percent:{
        type:Number,
        required:true
    },
    active:{
        type:Boolean,
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

module.exports = mongoose.model("Discount", DiscountSchema);
