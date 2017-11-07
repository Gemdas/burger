var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
router.post("/", function(req, res) {
	burger.create(req.body.name, function(result){
		res.json(result);
	});
});
router.put("/:id", function(req, res) {
	burger.update(req.params.id, "devoured", true, function(result){
		res.json(result);
	});
});
module.exports = router;