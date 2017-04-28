var mongoose = require('mongoose');
mongoose.connect('mongodb://yclin:0729@ds159050.mlab.com:59050/u73');


var Schema = mongoose.Schema;

var personSchema = new Schema({
  firstname : String,
  adress : String,
  suggestion : String
 
});

module.exports = mongoose.model('Person', personSchema);
