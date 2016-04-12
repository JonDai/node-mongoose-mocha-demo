/**
 * Created by JonDai on 2016/4/12.
 */
var chai = require('chai'),             // http://chaijs.com/api/bdd/
    expect = chai.expect,               // http://chaijs.com/guide/styles/#expect
    should = require('chai').should(), // http://chaijs.com/guide/styles/#should
    control = control || {};


//没有扩展名的情况，node会安装.js \ .json 去查找
require('../db/database');
var User = require('../model/user');


describe("CRUD on a User Model" , function () {

    beforeEach(function () {
        control.user = {
            name: 'jondai',
            password: '123456',
            age: 21
        };
        control.me = {
            name: 'daipengwei',
            password: '111111',
            age:23,
            created: new Date()
        }
    });

    afterEach(function () {
        control.user = {};
    });


    it(' {this is first method create} should create a new User' , function () {
        User.create(control.user , function (err, user) {
            should.not.exist(err);  //断言不会存在err的抛出
            should.exist(user);
            should.exist(user.name);
        })
    });

    it('{this is second method create user} should create a new user' , function () {
        var jon = new User(control.me);
        jon.save(function (err , user) {
            should.not.exist(err);
            should.exist(user);
            should.exist(user.name);
            should.exist(user.created);
        })
    });



    it('find by condition' ,function () {
        var conditions = {name: 'jondai'};
        User.find(conditions , function (err , users) {
            should.not.exist(err);
            users.length.should.be.above(0);
            console.log('user size: '+users.length);
        })
    })

    it('should find all ' , function () {
        User.find({} , function (err , users) {
            should.not.exist(err);
            users.length.should.be.above(0);
        });
    });


    it('should remove by condition' , function () {
        var conditions = {name: 'jondai'};
        User.remove(conditions , function (err) {
            if(err){
                console.error(err);
            }else{
                console.log("删除成功!");
            }

        })
    });
    
    it('remove all' , function () {
        User.remove({} , function (err,result) {
            should.not.exist(err);
            User.find({} , function (err, users) {
                should.not.exist(err);
                users.length.should.be.eql(0);
            })
        })
    });
    
   

});
