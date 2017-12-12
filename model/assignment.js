var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignmentSchema = new Schema({
  type: String,   /// quiz or discussion....
  course : String,
  dueDate: Date,
  done: Boolean,
  grade: String,
  comments: String
});

var Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
