const mongoose=require('mongoose');
const Slider=mongoose.Schema({
    sliderImageUrl: String,
});

module.exports=mongoose.model('slider', Slider);