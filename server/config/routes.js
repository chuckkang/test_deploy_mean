//////  ROUTES
var controller = require('../controllers/main_controller.js');
var path = require('path');
// var Survey = mongoose.model('surveys');
module.exports = function Route(app){
app.get("/", controller.index),
app.get("/all", controller.all), //showall appointments
// app.get("/allanswers/:questionid", controller.questionandanswers),
app.post("/add/new", controller.add),
app.delete("/delete/:id", controller.delete),
app.get("/data", controller.data), //add data to the db
// app.post("/question/add", controller.add),
// app.get("/question/:id", controller.getone),
// app.post("/answer/add", controller.addanswer),
// 	app.get("/answer/:id", controller.allanswers),
// 	app.get("/like/:id", controller.updatelike),
// app.delete("/surveys/:id", controller.delete),

app.all("*", (req, res, next) => {
	res.sendFile(path.resolve("./public/dist/index.html"));
});
//////////////////////////////////////////////
}