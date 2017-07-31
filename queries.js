/**
 * Created by Sany on 3/29/17.
 */
var promise = require('bluebird');

var options = {

    // Initialization Options
    promiseLib: promise

};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:root@localhost:5432/node_api_users';
var db = pgp(connectionString);

//get all users
function getAllUsers(req,res,next){

   db.any('SELECT * FROM node_user')
       .then(function(data){
           res.status(200)
               .json({
               status : 'success',
               data:data,
               message:'Retrieved ALL users'
           })
            .catch(function (err) {
                   return next(err);
               });
       })
}

//get single user
function getSingleUser(req,res,next){

    var user_id = parseInt(req.params.id);

    db.one('SELECT * FROM node_user WHERE id = $1',user_id)
        .then(function(data){
            res.status(200)
                .json({
                    status : 'success',
                    data:data,
                    message:'Retrieved ONE user'
                })
                .catch(function (err) {
                    return next(err);
                });
        })
}

//insert one user
function createUser(req,res,next){

    var age = parseInt(req.body.age);
    var name = req.body.name;
    var user_type = req.body.user_type;
    var sex = req.body.sex;

    db.none('INSERT INTO node_user(name, user_type, age, sex) VALUES ($1, $2, $3, $4)', [name,user_type,age,sex])
        .then(function(data){
            res.status(200)
                .json({
                    status : 'success',
                    data:data,
                    message:'Inserted user successfully'
                })
                .catch(function (err) {
                    return next(err);
                });
        })
}



//update one user by id
function updateUser(req,res,next){

    var id = parseInt(req.params.id);
    var name = req.body.name;
    var user_type = req.body.user_type;
    var age = parseInt(req.body.age);
    var sex = req.body.sex;

    db.none('UPDATE node_user set name=$1, user_type=$2, age=$3, sex=$4 WHERE id=$5', [name,user_type, age,sex,id])
        .then(function(data){
            res.status(200)
                .json({
                    status : 'success',
                    data:data,
                    message:'Updated user successfully'
                })
                .catch(function (err) {
                    return next(err);
                });
        })
}
//delete user by id
function removeUser(req,res,next){

    var user_id = req.params.id;
    db.none('DELETE FROM node_user WHERE id=$1',user_id)
        .then(function(data){
            res.status(200)
            .json({
                status:'success',
                data:data,
                message:'Deleted user successfully'

            }).catch(function(err){
                return next(err);
            });
        })
}

module.exports = {

    getAllUsers: getAllUsers,
    getSingleUser: getSingleUser,
    createUser: createUser,
    updateUser: updateUser,
    removeUser: removeUser

};