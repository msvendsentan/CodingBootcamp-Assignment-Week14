// Dependency
const connection = require("./connection.js");

const orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM todolist", function(error, result) {
            if (error) throw error;
            cb(result);
        });
    },
    insertOne: function(task, cb) {
        connection.query("INSERT INTO todolist SET ?", task, function(error, result) {
            if (error) throw error;
            cb(result);
        });
    },
    updateOne: function(complete, id, cb) {
        connection.query("UPDATE todolist SET ? WHERE id = ?", [complete, id], function(error, result) {
            if (error) throw error;
            cb(result);
        });
    },
    deleteOne: function(id, cb) {
        connection.query("DELETE FROM todolist WHERE id = ?", id, function(error, result) {
            if (error) throw error;
            cb(result);
        });
    }
};

module.exports = orm;