var mongoose = require('mongoose');
var Schema = mongoose.Schema;

ObjectId = Schema.ObjectId;
var mydepartment = new Schema({
    departmentid:{ type:Number,required:true},
    departmentname: {type:String,required:true}
});
module.exports=mongoose.model('departments',mydepartment);