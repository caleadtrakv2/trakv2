const connection = require('./dbconfig');
const verifyotp = function(otp, contact, cb){

    const sql = "SELECT 1 FROM sotp WHERE otp=? AND contact=?";
    const sqlparams = [otp,contact];

    connection.query(sql, sqlparams,function(err,results) { 
        cb(err,results);
        console.log(results);

    });
}

module.exports = verifyotp;