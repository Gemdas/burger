var express = require("express");
var bodyParser = require("body-parser");
var burgerController = require("./controllers/burger_controller.js");
var burger = require("./models/burger.js");
var port =  process.env.PORT||3000;
var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.get("/", function(req, res) {
	burger.all(function(data){
		var renderData = {
			burger:data
		};
		res.render("index", renderData);
	});
});
app.use("/", burgerController);
app.listen(port);