var connection = require("./connection.js");
var orm={
	all: function(table, cb) {
    	var query = "SELECT * FROM " + table + ";";
    	connection.query(query, function(err, result) {
    	  if (err) throw err;
    	  cb(result);
    	});
	},
	create: function(table, col, val, cb){
  		var query = "INSERT INTO " + table;
  		query+=" (" + col + ")";
  		query+=" VALUES ('" + val + "')";
  		console.log(query);
  		connection.query(query, function(err, result) {
    	  if (err) throw err;
    	  cb(result);
    	});
	},
	update: function(table, id, col, val, cb){
		var query = "UPDATE "+ table;
		query+= " SET " + col + "=" + val;
		query+= " WHERE  id =" + id;
		connection.query(query, function(err, result) {
    	  if (err) {
    	    return cb(false);
    	  }
	   	cb(true);
    	});
	}
}
module.exports = orm;