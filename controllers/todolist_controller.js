// Dependencies
const express = require("express");
const router = express.Router();

const todolist = require("../models/todolist.js");

// Serve Pages
router.get("/", function(req, res) {
    todolist.all(function(result) {
        let todoObj = {
            tasks: result
        };
        res.render("index", todoObj);
    });
});

// API Calls
router.get("/api/all", function(req, res) {
    todolist.all(function(result) {
        res.json(result);
    });
});

router.post("/api/create", function(req, res) {
    todolist.create(req.body, function(result) {
        res.json(result.insertId);
    });
});

router.put("/api/update/:id", function(req, res) {
    todolist.update(req.body, req.params.id, function(result) {
        res.json(result);
    });
});

router.delete("/api/delete/:id", function(req, res) {
    todolist.delete(req.params.id, function(result) {
        res.json(result);
    });
});

module.exports = router;