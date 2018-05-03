const express = require("express"); 
const artistRouter = express.Router(); 

const ArtistModel = require("../models/artists.js"); 
const GenreModel = require ("../models/genres.js"); 

artistRouter.route("/")
    .get((req, res)=> {
        ArtistModel.find(req.query)
            .populate("genreId")
            .exec((err, foundArtists) => {
                if (err) return res.send(err); 
                res.status(200).send(foundArtists)
            });
    })
    .post((req, res) => {
        const newArtist = new ArtistModel(req.body); 
        newArtist.save((err, savedArtist) => {
            if (err) return res.send(err); 
            ArtistModel.populate(savedArtist, { path: "genreId "}, (err, popArtist) => {
                if(err) return res.send(err); 
                res.status(201).send(popArtist)
            });
        });
    });

artistRouter.route("/:id")
    .get((req, res) => {
        ArtistModel.findOne({ _id: req.params.id })
        //populate will show the id in full so it's the document associated with the id.
            .populate("genreId")

        // now execute query
            .exec((err, foundArtist) => {
                if (err) return res.send(err); 
                if(!foundArtist) return res.status(404).send({ message: "Artist Not Found" })
                res.status(200).send(foundArtist)
            })
    })

    .delete((req, res) => {
        ArtistModel.findOneAndRemove({ _id: req.params.id }, (err, deletedArtist) => {
            if(err) return res.send(err); 
            if(!deletedArtist) return res.status(404).send({ message: "Artist Not Found"})
            res.status(204).send(); 
        })
    })

    .put((req, res) => {
        ArtistModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            // .populate("genreId")
            .exec((err, updatedArtist) => {
                if (err) return res.send(err);
                if (!updatedArtist) return res.status(404).send({ message: "Artist Not Found" });
                res.status(200).send(updatedArtist);
            })
    })

module.exports = artistRouter;