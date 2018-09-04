const orm = require("../config/orm.js");

// Create the code that will call the ORM functions using todo-specific input for the ORM
const todolist = {
    all: function() {},
    create: function(task, cb) {
        orm.insertOne(task, function(res) {
            cb(res);
        });
    },
    complete: function() {},
    delete: function() {},
}

module.exports = todolist;