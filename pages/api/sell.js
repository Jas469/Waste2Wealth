import sell from "../../models/sell";
import registeration from "../../models/sell";
import mongoose from "mongoose";
// import cookie from 'js-cookie'
// import jwt from 'jsonwebtoken'
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.n2e6kfu.mongodb.net/magento");
export default async function handler(req, res) {
        if(req.method==='POST'){
            let p=new sell(req.body);
          
                    await p.save(); 
                //     let data=await registeration.findOne({email:req.body.email})
                //    let token=jwt.sign({user:data._id},"mynameisdavinderkumar");   

                    res.status(200).json({message:"Success"});
                
                
                
        }
        else{  
                let data= await sell.find({});
                res.status(200).json(data);
        }
}