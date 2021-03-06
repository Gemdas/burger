var orm = require("../config/orm.js");
var burger = {
	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},
	create: function(val, cb) {
    	orm.create("burgers", "burger_name", val, function(res) {
    		cb(res);
    	});
  	},
  	update: function(id, col, val, cb){
  		orm.update("burgers", id, col, val, function(res){
  			cb(res);
  		});
  	}
}
module.exports = burger;