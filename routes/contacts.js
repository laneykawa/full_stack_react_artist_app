const express = require("express");
const contactRouter = express.Router();

const ContactModel = require("../models/contacts.js");

contactRouter.route("/")
    .get((req, res) => {
        ContactModel.find(req.query, (err, foundContacts) => {
            if (err) return res.send(err);
            res.status(200).send(foundContacts);
        });
    })
    .post((req, res) => {
        const newContact = new ContactModel(req.body);
        newContact.save((err, savedContact) => {
            if (err) return res.send(err);
            res.status(201).send(savedContact);
        });
    })

module.exports = contactRouter;