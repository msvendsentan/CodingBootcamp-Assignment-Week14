// Dependency
const connection = require("./connection.js");

const orm = {
    // define my functions here
    selectAll: function() {},
    insertOne: function(task, cb) {
        console.log(`this is the task: ${task}`);
        connection.query("INSERT INTO todolist SET ?", {task: task}, function(error, result) {
            if (error) throw error;
            cb(result);
        });
    },
    updateOne: function() {},
    deleteOne: function() {}
};

module.exports = orm;