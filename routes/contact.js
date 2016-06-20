// var express = require('express');
// var router = express.Router();
// var nodemailer = require('nodemailer');
// var bodyParser   = require('body-parser');


// /* GET home page. */
// router.get('/', function(req, res, next) {
// 	console.log('ONE contact.js')
//   res.render('contactForm', { title: 'Contact' });
// });

// router.post('/send', function(req, res, next){
// 	console.log('TWO  contact.js')
// 	var transporter = nodemailer.createTransport({
// 		service: 'Gmail',
// 		auth: {
// 			user: 'elementalair@gmail.com',
// 			pass: '5tps.com3'
// 		}
// 	})

// 	var mailOptions = {
// 		from: 'nicocrisafulli@gmail.com',
//     to: 'elementalair@gmail.com',
//     subject: 'Email from the portfolio',
//     text: 'Here\'s the email: Name: ' + req.body.name + ', Email: ' + req.body.email + ', Message: ' + req.body.message,
//     html: '<p>Here\'s the email:</p><ul><li>Name: ' + req.body.name + '</li><li>Email: ' + req.body.email + '</li><li>Message: ' + req.body.message + ' </li></ul>'
//   };

//   transporter.sendMail(mailOptions, function(err, info){
//   	console.log('THREE')
//   	if (err){
//   		console.log(err);
//   		res.redirect('/');
//   	} else {
//   		console.log('Message sent:' + info.response );
//   		res.redirect('/');
//   	}
//   });

// })

// module.exports = router;