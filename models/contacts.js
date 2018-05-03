const mongoose = require("mongoose");

const { Schema } = mongoose;

const contactSchema = new Schema({
    name: String,
    email: String, 
    inquiry: String
});

module.exports = mongoose.model("contacts", contactSchema);
