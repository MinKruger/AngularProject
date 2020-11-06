var express = require('express');
var router = express.Router();
var User = require('../Data/models/user');

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/message', function (req, res, next) {
    res.render('node');
});

router.get('/newaccount', function (req, res, next) {
    res.render('register');
});

router.post('/node-mongodb-mongoose-user', function (req, res, next) {
    var emailVar = req.body.emailBody;
    var userObject = new User({
        login: emailVar,
        password: 'valueTeste',
        email: 'valueTeste',
    });
    userObject.save();

    res.redirect('/node-mongodb-mongoose-user');
});


router.post('/register', function (req, res, next) {
    var emailVar = req.body.email;
    var loginVar = req.body.login;
    var senhaVar = req.body.senha;
    var userObject = new User({
        login: loginVar,
        password: senhaVar,
        email: emailVar,
    });
    userObject.save();

    res.redirect('/node-mongodb-mongoose-user-busca');
});

router.get('/node-mongodb-mongoose-user-busca', function (req, res, next) {
    User.findOne({}, function(err, documents){
        if(err)
            return res.send('Error');

        res.render('node', {login: documents});
    });
});

router.get('/teste', function (req, res, next) {
    res.render('login');
});

router.get('/dashboard', function (req, res, next) {
    var loginVar = req.body.login;
    User.find({ login: loginVar }, function(err, documents){
        if(err)
            return res.send('Error');

        res.render('node', {login: documents});
    });
});

module.exports = router;
