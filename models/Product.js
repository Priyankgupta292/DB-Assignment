const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  

    name:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    SKU:{
        type:String,
        require:true,
    },
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    inventory_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Inventory"
    },
    price:{
        type:Number,
        required:true
    },
    discount_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Discount"
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

module.exports = mongoose.model("Product", ProductSchema);