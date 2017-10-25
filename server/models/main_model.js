

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
	question: { type: String },
	description: { type: String },
	user: {type: String },
	answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }] // the ref is the actual name of the related key modelschema....mongoose.model('Answer', AnswerSchema);
}, { timestamps: true });

var Questions = mongoose.model('Question', QuestionSchema);

var AnswerSchema = new mongoose.Schema({
	_question: { type: Schema.Types.ObjectId, ref:"Question"},
	user: { type: String },
	answer: {type: String },
	description: {type: String },
	likes: {type: Number}
}, { timestamps: true });

var Answers = mongoose.model('Answer', AnswerSchema);
// module.exports = Author;