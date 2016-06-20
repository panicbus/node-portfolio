// 'use-strict';

// // var nodemailer = require('nodemailer');
// // var transporter = nodemailer.createTransport();


// var app = angular.module('portfolio', []);

// app.controller('ContactFormController', ['$scope', '$http',
// 	function($scope, $http){

// 		$scope.toastPosition = {
// 			bottom: false,
// 			top: true,
// 			left: false,
// 			right: true
// 		};

// 		$scope.getToastPosition = function(){
// 			return Object.keys($scope.toastPosition)
// 				.filter(function(pos){
// 					return $scope.toastPosition[pos]
// 				})
// 				.join(' ');
// 		};

// 		this.sendMail = function(){

// 			data = ({
// 				contactName : this.contactName,
// 				contactEmail :  this.contactEmail,
// 				contactMsg : this.contactMsg
// 			});

// 			$http({
// 			  method: 'POST',
// 			  url: '/contactForm',
// 			  msg: data
// 			}).then(function successCallback(response) {
// 					$toast.show(
// 						$toast.simple()
// 							.content('Thanks for the message, ' + data.contactName)
// 							.position($scope.getToastPosition())
// 							.hideDelay(4000)
// 					);
// 			  }, function errorCallback(response) {
// 			    // called asynchronously if an error occurs
// 			    // or server returns response with an error status.
// 			  });


// 		};
// 	}
// ]);


// // /**
// //  * Send an email when the contact from is submitted
// //  */
// // exports.sendMail = function(req, res) {

// //     var data = req.body;

// //     transporter.sendMail({
// //         from: data.contactEmail,
// //         to: 'nicocrisafulli@gmail.com',
// //         subject: 'Message from ' + data.contactName,
// //         text: data.contactMsg
// //     });

// //     res.json(data);
// // };


