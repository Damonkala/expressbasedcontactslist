
'use strict';

var express = require('express');
var router = express.Router();

var Contact = require('../models/contact')


router.get('/', function(req,res){
	Contact.find(function(err, contacts){
		res.render('index', {title: 'My Contacts!', items: contacts})
	});
});

router.post('/', function(req,res){
	var contact = req.body;
	Contact.create(contact, function(err){
		res.status(err ? 400 : 200).send(err || 'contact created');
})
});
router.post('/delete', function(req,res){
	var Index = req.body.index;
		Contact.remove(Index)
		console.log(Index);
});
router.post('/edit', function(req,res){
	var Text = req.body.text;
		Contact.change(Text)
		console.log(Text);
});
module.exports = router;
