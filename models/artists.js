const mongoose = require("mongoose");

const { Schema } = mongoose;

const artistSchema = new Schema({
    name: String,
    img: String, 
    bookingCost: Number,
    bio: String,
    eventIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    }],
    genreId: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: "genres"
    }
})

// upper case single since this ties to the products. 

const ArtistModel = mongoose.model("Artist", artistSchema);

module.exports = ArtistModel;