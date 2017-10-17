/**
 * Created by btb on 10/17/2017.
 */
var mongoose = require( 'mongoose' );
var schema = mongoose.Schema;
var config = require( '../config' );

//mongoose.connect(config.dbString);

var todoSchema = new schema({
  id: { type: Number, required: true, unique: true },
  content: { type: String, required: true },
  detail: { type: String }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
