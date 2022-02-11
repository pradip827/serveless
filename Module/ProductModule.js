
const mongoose = require("mongoose");

var productSchema = new mongoose.Schema( {
    
    product_name: {
        type:String, default: null
       
       
    },
    Product_discription: {
        type: String, default: null
        
        
    },
    product_rating: {                     
        type: Number, default: null
        
        
        
    },
    created_at: {                      
        type: Date, default: null
        
        
        
    },
    updated_at: {                       
        type: Date, default: null
       
 
    },
    is_active: {                       
        type: Boolean, default: null 
        
 
    },
    

}, {
    freezTableName: true,
    timeStamps: false,
    createdAt: false,
    updatedAt: false, 
});

module.exports = mongoose.model("product", productSchema);