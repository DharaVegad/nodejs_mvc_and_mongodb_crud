var mongoose = require('mongoose');
var Schema = mongoose.Schema;

ObjectId = Schema.ObjectId;
var mycustomer = new Schema({
    customerid:{ type:Number,required:true},
    customername: {type:String,required:true},
    customercontact: {type:String,max:10,required:true}
});
module.exports=mongoose.model('customers',mycustomer);