/**
 * Created by Sany on 3/29/17.
 */
var express = require('express');
var router = express.Router();

var db = require('../queries.js');

router.get('/api/users/',db.getAllUsers);
router.get('/api/users/:id',db.getSingleUser);
router.post('/api/users/',db.createUser);
router.put('/api/users/:id',db.updateUser);
router.delete('/api/users/:id',db.removeUser);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
