var mongoose = require('mongoose');
var Schema = mongoose.Schema;

ObjectId = Schema.ObjectId;
var myproduct = new Schema({
    productid:{ type:Number,required:true},
    productname: {type:String,required:true},
    productprice: {type:String,required:true}
});
module.exports=mongoose.model('products',myproduct);