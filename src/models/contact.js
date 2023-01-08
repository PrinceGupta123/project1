const mongoose=require('mongoose');

const contactus=mongoose.Schema({
    email:String,
    phone:String,
    description:String,
});
module.exports=mongoose.model("contact", contactus);