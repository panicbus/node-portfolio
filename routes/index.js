var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


// module.exports = function(app) {

//     var portfolio = require('./javascripts/controllers/contactFormController');

//     app.route('/contact-form').post(portfolio.sendMail);
// };
