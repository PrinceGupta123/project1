const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const Detail = require("./src/models/Details");
const sliderImage = require("./src/models/sliderImage");
const servicesCard = require("./src/models/servicesCard");
const contactUs=require("./src/models/contact");
const { response } = require("express");

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials("views/partials");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const details = await Detail.findOne({ _id: "63863cbef6555be8645a3cb4" });
  const slidersImages = await sliderImage.find();
  const servicescard=await servicesCard.find();
  //console.log(servicescard);

  res.render("index", { details: details, sliders: slidersImages, card:servicescard});

  // console.log(slidersImages)
});

mongoose.connect("mongodb://localhost/freelance_project", () => {
  console.log("db connected");

  

  // servicesCard.create({
  //  icon:"fa-solid fa-book",
  //   title: "Our Courses",
  //   subtitle: "We provides best courses for student to grab placements",

  //   linkLabel: "Learn",
  //   url: "/",
  // },
  // {
  //   icon:"fa-solid fa-book",
  //    title: "Our Courses",
  //    subtitle: "We provides best courses for student to grab placements",
 
  //    linkLabel: "Learn",
  //    url: "/",
  //  },
  //  {
  //   icon:"fa-solid fa-book",
  //    title: "Our Courses",
  //    subtitle: "We provides best courses for student to grab placements",
 
  //    linkLabel: "Learn",
  //    url: "/",
  //  });

  // sliderImage.create([
  //   {
  //     sliderImageUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvl5S9w6oluQl0ziZ6i7psNJHWBeCwq14pSA&usqp=CAU",
  //   },
  //   {
  //     sliderImageUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvl5S9w6oluQl0ziZ6i7psNJHWBeCwq14pSA&usqp=CAU",
  //   },
  //   {
  //     sliderImageUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvl5S9w6oluQl0ziZ6i7psNJHWBeCwq14pSA&usqp=CAU",
  //   }
  // ]);

  //   Detail.create({
  //     brandName: "Info Tech Solution",
  //     imageLogo: "/",

  //     Links: [{
  //       label:"Home",
  //         url:"/",
  //     },
  //     {
  //       label:"Services",
  //         url:"/",
  //     },
  //     {
  //       label:"Gallery",
  //         url:"/",
  //     },
  //     {
  //       label:"About us",
  //         url:"/",
  //     },
  //     {
  //       label:"Contact Us",
  //         url:"/",
  //     }
  //   ]
  // })
});

app.post("/process-data", async(req, res)=>{
  console.log("db saved")
  // console.log(req.body);
  try{
      const data= await contactUs.create(req.body);
      console.log(data);
      res.redirect("/");
  }catch(e){
    console.log(e);
    res.redirect("/");
  }
});

app.listen(process.env.PORT | 3000, function () {
  console.log("the server is started at 3000");
});
