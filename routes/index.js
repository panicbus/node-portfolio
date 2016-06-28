var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var nodemailer = require('nodemailer');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/send', router);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/send', function(req, res, next) {
//   res.render('index');
// });


router.post('/send', function(req, res, next){
	console.log('req.body: ' + req.body)
	console.log('req.body.name: ' + req.body.name)
	console.log('req.body.email: ' + req.body.email)
	console.log('req.body.message: ' + req.body.message)
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'elementalair@gmail.com',
			pass: '5tps@com3'
		}
	})

	var mailOptions = {
		from: 'nicocrisafulli@gmail.com',
    to: 'elementalair@gmail.com',
    subject: 'Email from the portfolio',
    text: 'Here\'s the email: Name: ' + req.body.name + ', Email: ' + req.body.email + ', Message: ' + req.body.message,
    html: '<p>Here\'s the email:</p><ul><li>Name: ' + req.body.name + '</li><li>Email: ' + req.body.email + '</li><li>Message: ' + req.body.message + ' </li></ul>'
  };

  transporter.sendMail(mailOptions, function(err, info){
  	console.log('THREE')
  	if (err){
  		console.log(err);
  		res.redirect('/');
    } else {
      console.log('Message sent: ' + info.response );
      res.redirect('/');
  	}
  });

})

module.exports = router;

