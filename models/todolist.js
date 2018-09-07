const orm = require("../config/orm.js");

// Create the code that will call the ORM functions using todo-specific input for the ORM
const todolist = {
    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    create: function(task, cb) {
        orm.insertOne(task, function(res) {
            cb(res);
        });
    },
    update: function(complete, id, cb) {
        orm.updateOne(complete, id, function(res) {
            cb(res);
        });
    },
    delete: function(id, cb) {
        orm.deleteOne(id, function(res) {
            cb(res);
        });
    },
}

module.exports = todolist;