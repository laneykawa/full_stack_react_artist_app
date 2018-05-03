const mongoose = require("mongoose");

const { Schema } = mongoose;

const eventSchema = new Schema({
    name: String,
    description: String,
    location: String, 
    date: Date,
    artistId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Artist"
    }]
})

const EventModel = mongoose.model("Event", eventSchema);

module.exports = EventModel;