const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require ("path");

const logger = require("./middleware/logger.js");
const artistRouter = require("./routes/artists.js");
const genreRouter = require("./routes/genres.js");
const contactRouter = require("./routes/contacts.js"); 
const eventRouter = require("./routes/events.js"); 

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(logger);
app.use(express.static(path.join(__dirname, "client", "build")))

app.use("/api/artists", artistRouter);
app.use("/api/genres", genreRouter);
app.use("/api/contacts", contactRouter); 
app.use("/api/events", eventRouter); 

// updated Mongoose says you don't have to put the MDB port number. Then this is the database name. 
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/people", (err) => {
    if (err) console.error(err);
    console.log("Connected to MongoDB");
})

app.get("*", (req, res) => {  
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log("Server running on port " + port));