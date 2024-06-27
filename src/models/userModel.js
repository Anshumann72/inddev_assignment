const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  company_name: { type: String, required: true },
  age: { type: Number, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: Number, required: true },
  email: { type: String, required: true },
  web: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
