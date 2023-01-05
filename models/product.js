const mongoose=require("mongoose")

const Product=mongoose.Schema({
    name:{
        type:String,
        require:true
    },    
    price:{
        type:Number,
        require:true
    },    
    description:{
        type:String,
        require:true
    },    
    category:{
        type:String
    },    
    rating:{
        type:Number
    }    
});

module.exports=mongoose.model("products",Product)