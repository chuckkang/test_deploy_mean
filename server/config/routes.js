//////  ROUTES
var controller = require('../controllers/main_controller.js');
var path = require('path');
// var Survey = mongoose.model('surveys');
module.exports = function Route(app){
app.get("/", controller.index),
app.get("/questions", controller.all), //allrecords
app.get("/allanswers/:questionid", controller.questionandanswers),
app.put("/updatevote", controller.updatevote),
app.get("/data", controller.data), //add data to the db
app.delete("/delete/:id", controller.delete),
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