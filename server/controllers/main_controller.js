
var mongoose = require("mongoose");
var AppointmentDB = mongoose.model('Appointment');


module.exports = {
	index: (req, res) => {
	},
	data: (req, res)=>{
		/// THIS SECTION IS TO GENERATE DATA IN THE DB
		// Adding records to 
		// 1. get primary key from body.
		// 2. set object for foreign key
		// 3. set foreignkey(collum) to point to primarykey._id
		//4.  push the answer into the primarykey row array that points to the foreign key
		//5. save the foreign key
		// 6. save the post key.
		// QuestionsDB.findOne({ _id: req.body._id}, function(err, getanswer){
		// 	var answer = AnswerDB({
		// 		user: "Chris",
		// 		answer: "Chris is the best",
		// 		description: "this is Chris description",
		// 		likes: 0
		// 	});
		// 	answer._question = getanswer._id;
		// 	getanswer.answers.push(answer);
		// 	answer.save(function(err){
		// 		post.save(function(err){
		// 			if (err) { console.log(err)}
		// 			else { res.json({message: "success in entering in the answers"})}
		// 		})
		// 	})
		// })
	},

	add: function(req, res){
		console.log(req.body)
		var newappointment = new AppointmentDB(req.body);
		newappointment.save((err)=>{
			if (err) {
				console.log(err)
				res.json({ message: "Error inserting record" })
			}
			else{
				res.json({message: "success"})
			}
		})
	},

	all: (req, res) =>{
		var currentDate = new Date();
		AppointmentDB.find({}, function(err, results){
			if (err){
				console.log(err)
			}else{
				res.json(results);
				// console.log(results);
			}
		}
		)
	}, 

	// getone: (req, res) => {
	// 	// QuestionsDB.find({_id: req.params.id}, function (err, results) {
	// 	// 	if (err) {
	// 	// 		console.log(err)
	// 	// 	} else {
	// 	// 		res.json(results);
	// 	// 		console.log(results);
	// 	// 	}
	// 	// }
	// 	// )
	// },

	// addanswer: (req, res) => {
	// 	// var newanswer = new AnswerDB(req.body)
	// 	// newanswer.save(function (err) {
	// 	// 	if (err) {
	// 	// 		console.log(err)
	// 	// 	} else {
	// 	// 		res.json({message: "success"});
	// 	// 	}
	// 	// }
	// 	// )
	// }, 

	// questionandanswers: (req, res) => {
	// 	// console.log({_id: req.params.questionid}, "THIS IS ID from the question and answers router");
	// 	// QuestionsDB.findOne({ _id: req.params.questionid}).populate('answers').exec( function (err, results) {
	// 	// 	if (results) {
	// 	// 		//console.log(results, "WAHT IS Results")
	// 	// 		res.json(results);
	// 	// 	} else {
	// 	// 		console.log(err, "No record found");
	// 	// 	}
	// 	// }
	// 	// )
	// },

	delete: (req, res) => {
		// console.log({_id: req.params.questionid}, "THIS IS ID from the question and answers router");
		// console.log(req.params.id);
		// res.json({message: "on server"})
		AppointmentDB.remove({ _id: req.params.id }, function (err) {
			if (err) {
				res.json(err)
			} else {
				console.log("successful removal");
			}
		});
	},

	// updatevote: (req, res) => {
	// 	// console.log(req.body.likes, "THIS IS TEH RqewrWSESTULS");
	// // 	AnswerDB.update({_id: req.body._id}, 
	// // 		{likes: parseInt(req.body.likes)}, function (err, results) {
	// // 		if (err) {
	// // 			console.log(err)
	// // 		} else {
	// // 			res.json(results);
	// // 			// console.log(results, "*************");
	// // 		}
	// // 	}
	// // 	)
	// },
	// updatelike: (req, res) => {
	// 	// AnswerDB.update({ _id: req.body.answerid }, {
	// 	// 	likes: parseInt(req.body.likes),
	// 	// }, function (err) {
	// 	// 	if (err) {
	// 	// 		console.log(err)
	// 	// 	} else {
	// 	// 		res.json({ message: "success" });
	// 	// 	}
	// 	// }
	// 	// )
	// }, 
}