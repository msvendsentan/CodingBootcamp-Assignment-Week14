// Dependencies
const express = require("express");
const router = express.Router();

const todolist = require("../models/todolist.js");

router.get("/", function(req, res) {
    res.render("index");
});

router.post("/api/create", function(req, res) {
    console.log(req.body.task);
    todolist.create([req.body.task], function(result) {
        res.json(result.id);
    });
})

module.exports = router;