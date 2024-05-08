const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database:"test"
})

var del = db._protocol._delegateError;
db._protocol._delegateError = function(err, sequence){
    if (err.fatal) {
        console.trace('fatal error: ' + err.message);
    }
    return del.call(this, err, sequence);
};

module.exports = db;
