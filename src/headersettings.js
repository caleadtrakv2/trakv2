
const callback = function HeaderSettings(req, res){

    req.header('Access-Control-Allow-Origin', 'http://localhost/');
    req.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    // res header settings
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Content-Type', 'application/json');
}

module.exports = callback;