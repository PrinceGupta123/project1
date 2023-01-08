const mongoose= require('mongoose');
const Detail=mongoose.Schema({
    brandName: String,
    imageLogo: String,

    Links: [{
        label:String,
        url:String,
    }]

   
});


module.exports = mongoose.model("project1", Detail);
