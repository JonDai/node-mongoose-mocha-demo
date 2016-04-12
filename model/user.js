/**
 * Created by JonDai on 2016/4/12.
 */
var mongoose = require('mongoose');

//定义一个Schema的文本属性
var userSchema = new mongoose.Schema({
    name: {type:String , required:true},
    password: {type:String , required:true},
    age: Number,
    created: Date
});


//常见一个Model并 导出Model
module.exports = mongoose.model('User' , userSchema);