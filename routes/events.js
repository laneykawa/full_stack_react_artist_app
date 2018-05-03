const express = require("express");
const eventRouter = express.Router();

const EventModel = require("../models/events.js");
const ArtistModel = require("../models/artists.js");

eventRouter.route("/")
    .get((req, res) => {
        EventModel.find(req.query)
            .populate("genreId")
            .exec((err, foundEvents) => {
                if (err) return res.send(err);
                res.status(200).send(foundEvents)
            });
    })
    .post((req, res) => {
        const newEvent = new EventModel(req.body);
        newEvent.save((err, savedEvent) => {
            if (err) return res.send(err);
            res.status(201).send(savedEvent)
        });
    });

eventRouter.route("/:id")
    .get((req, res) => {
        EventModel.findOne({ _id: req.params.id })
            .populate("artistId")
            .exec((err, foundEvent) => {
                if (err) return res.send(err);
                if (!foundEvent) return res.status(404).send({ message: "Event Not Found" })
                res.status(200).send(foundEvent)
            })
    })

    .delete((req, res) => {
        EventModel.findOneAndRemove({ _id: req.params.id }, (err, deletedEvent) => {
            if (err) return res.send(err);
            if (!deletedEvent) return res.status(404).send({ message: "Event Not Found" })
            res.status(204).send();
        })
    })

    .put((req, res) => {
        EventModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            // .populate("genreId")
            .exec((err, updatedEvent) => {
                if (err) return res.send(err);
                if (!updatedEvent) return res.status(404).send({ message: "Event Not Found" });
                res.status(200).send(updatedEvent);
            })
    })

module.exports = eventRouter;