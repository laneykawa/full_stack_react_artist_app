const express = require("express");
const genreRouter = express.Router();

const GenreModel = require("../models/genres.js");

genreRouter.route("/")
    .get((req, res) => {
        GenreModel.find(req.query, (err, foundGenres) => {
            if (err) return res.send(err);
            res.status(200).send(foundGenres);
        });
    })
    .post((req, res) => {
        const newGenre = new GenreModel(req.body);
        newGenre.save((err, savedGenre) => {
            if (err) return res.send(err);
            res.status(201).send(savedGenre);
        });
    })

module.exports = genreRouter;