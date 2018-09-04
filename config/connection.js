// Dependency for MySQL
const mysql = require("mysql");

// Define connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "todo_db"
});

// Create connection
connection.connect(function(err) {
    if (err) {
        console.log(`There's an error: ${err}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

// Export
module.exports = connection;