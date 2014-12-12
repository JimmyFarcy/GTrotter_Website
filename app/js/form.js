'use strict';

var app = angular.module("contact", [])

app.controller("contactController", ['http', function(scope, $http)
{
	$scope.submitMail = function(form, resultValue)
	{
		var config = {
			params: {
				contact: form
			}
		};

		$http.post("/send", null, config)
		.success(function(data, status, headers, config)
		{
			$scope[resultValue] = data;
		})
		.error(function(data, status, headers, config)
		{
			$scope[resultValue] = {
				headers: headers,
				status: status
			}
		});
	};
});
