const response = require('../dbconfig');
const headersettings = require('../headersettings');
const generateotp = require('../generateotp');
const saveotp = require('../saveotp');
const verifyotp = require('../verifyotp');

const getUsers = (req, res) => {

    // Logic to get users (e.g., from a database)

    const contact = req.params.contact;
    req.session.username = contact;

    const sql = "SELECT 1 FROM suppliers WHERE contact=?";

    response.query (sql, [contact], (err,results)=>{

        if(results.length > 0){
            
            headersettings(req,res);
            res.json({ trakcode : 200, message: "return user", sessiondata : req.session.username});
        }

        else{
            headersettings(req,res);
            res.json({trakcode : 800, message : "new user"});
        }
    });
   
};


const sendotp = (req,res) => {

    headersettings(req, res);
    const _tempotp = generateotp(2980,9999);
    //send otp function need to be implemented
  
    saveotp(_tempotp,req.session.username);
    res.json({trakcode : 500, otp : _tempotp, sessiondata : req.session.username});
};


const createUser = (req, res) => {
    // Logic to create a new user (e.g., save to a database)
    const newUser = req.body; // Example: { name: 'John', email: 'john@example.com' }
    res.json({ message: 'User created', user: newUser });
};


const routeverifyotp  = function(req,res) {

    const otp = req.body.otp;

    verifyotp(otp, req.session.username, (err,dataset) => {
    console.log(req.session);
    
    headersettings(req,res);

       if(err){

        res.json({message : err.stack});
       }

       else{
         res.json({message : dataset[0]});
       }
    });
}


module.exports = {createUser,getUsers,sendotp,routeverifyotp};
