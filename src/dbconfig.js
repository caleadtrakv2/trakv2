const mysql = require('mysql2');

const connection = mysql.createConnection({

    host : "localhost",
    user : "root",
    password : "",
    database : "trak"
});

connection.connect((err) =>{

    if(err){    
            return err.stack;
    }

    else{
        return "Database Connected";
    }
});

module.exports = connection;

