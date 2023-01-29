var mongoose = require('mongoose');
var Schema = mongoose.Schema;

ObjectId = Schema.ObjectId;
var myemployee = new Schema({
   employeeid: {type: Number,required:[true,'Id required']},
    sinnumber: {type:String,max:10,required:true},
    name: {type:String,required:true},
    dateofbirth: {type:Date,required:true},
    email: {type:String,required:true},
    phone: {type:String,max:10,required:true},
    jobclass: {type:String,required:true},
    annualsalary: {type:String,required:true},
    address: {type:String,required:true},
    hiredate: {type:String,required:true}
});
module.exports=mongoose.model('employees',myemployee);