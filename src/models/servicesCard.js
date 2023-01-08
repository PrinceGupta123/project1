const mongoose = require("mongoose");

const servicesCard = mongoose.Schema({
  icon: String,
  title: String,
  subtitle: String,

  linkLabel: String,
  url: String,
});

module.exports = mongoose.model("servicesCard", servicesCard);
