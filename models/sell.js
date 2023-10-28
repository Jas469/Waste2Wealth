import mongoose from "mongoose";
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.n2e6kfu.mongodb.net/magento");
const ourschema=new mongoose.Schema({
    image:{
        type:String,   
    },
    product:{
        type:String,   
    },
    category:{
        type:String,   
    },
    phone:{
        type:String,   
    }, 
    city:{
        type:String,   
    }, 
    state:{
        type:String,
        
    },   
    location:{
        type:String,
        
    },   
    count:{
        type:String,
       
    },   
    // image,category,product,weight,location,count,phone,city,state
});
mongoose.models={};
export default mongoose.model("sell",ourschema);