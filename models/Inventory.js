const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
   quantity:{
    type:Number,
    required:true,
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

module.exports = mongoose.model("Inventory", InventorySchema);
