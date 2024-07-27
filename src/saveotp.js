const connection = require('./dbconfig');
const otp_status = 1;

const saveotp = function(_tempotp, _contact) {

const userdata = {contact : _contact, otp : _tempotp, created : GetDate(), status : otp_status};
const sql = "INSERT INTO sotp SET ?";
connection.query(sql, userdata, (err, result)=> {

    if(result){
        return 1;
    }
    else if(err){
        console.log(err.stack);
    }
    
    connection.end();
});


}


function GetDate(){

    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}


module.exports = saveotp;