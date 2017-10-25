

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppointmentSchema = new mongoose.Schema({
	name: { type: String },
	complaint: { type: String },
	apptdate: {type: String },
	appttime: { type: String },
	fulldate: { type: Date}
	// the ref is the actual name of the related key modelschema....mongoose.model('Answer', AnswerSchema);
}, { timestamps: true });

var Appointment = mongoose.model('Appointment', AppointmentSchema);

// var AnswerSchema = new mongoose.Schema({
// 	_question: { type: Schema.Types.ObjectId, ref:"Question"},
// 	user: { type: String },
// 	answer: {type: String },
// 	description: {type: String },
// 	likes: {type: Number}
// }, { timestamps: true });

// var Answers = mongoose.model('Answer', AnswerSchema);
// // module.exports = Author;