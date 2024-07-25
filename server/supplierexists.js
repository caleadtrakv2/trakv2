const express = require('express');
const app = express();

const traksession = require("express-session");
const requestdb = require('./dbconfig');
const session = require('express-session');

const port = 8787;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/suppliers/:contact', (req, res) => {

    const phone = req.params.contact;
    req.session = phone;
    
    // set request headers 

    req.header('Access-Control-Allow-Origin', 'http://localhost/');
    req.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    const sql = "SELECT 1 FROM suppliers WHERE contact=?";
    requestdb.connection.query(sql, [phone], (err, results) => {

        res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Content-Type', 'application/json');

        if (err) { 
            res.status(404).json({ trakrcode: 400});
        }

        else {

            if(results.length > 0){
                res.status(200).json({traksession : req.session});
            }
        }

    });

});


app.post("/create", (req,res) => {

    const contact = req.body;
    // set req headers
    req.header('Access-Control-Allow-Origin', 'http://localhost/');
    req.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    // set res headers 

    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Content-Type', 'application/json');

    res.status(200).json({trakpostresponse : contact});
});

app.listen(port, (req, res) => {

    console.log('Server Started at :' + port);
});