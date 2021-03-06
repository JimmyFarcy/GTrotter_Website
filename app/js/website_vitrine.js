
// ============================================================ TIMELINE ================================================================== */
	function get_date_today()
	{
		var now = new Date();
		
		var annee   = now.getFullYear();
		var mois    = ('0'+(now.getMonth()+1)).slice(-2);
		var jour    = ('0'+now.getDate()   ).slice(-2);
		
		return ("" + annee + "-" + mois + "-" + jour);
	}

	function launch_timeline()
	{
		var today = get_date_today();
		
		var items = new vis.DataSet({
			type: { start: 'ISODate', end: 'ISODate' }
		});
		var groups = new vis.DataSet([/*
		{
			id: 'serveur', content:'Serveur', subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}
		},{
			id: 'site', content:'Site', subgroupOrder: 'subgroupOrder'
		},{
			id: 'ios', content:'iOS', subgroupOrder: 'subgroupOrder'
		},{
			id: 'windowsphone', content:'Windows Phone', subgroupOrder: 'subgroupOrder'
		},{
			id: 'android', content:'Android', subgroupOrder: 'subgroupOrder'
		},*/{
			id: 'server_site', content:'Site <br/><br/> server', subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}
		},{
			id: 'mobile', content:'Application iOS <br/><br/>Application Windows Phone <br/><br/>Application Android', subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}
		}
		]);
		
		items.add([
		/*
			// Gestion du server
			{id: 'server_time', start: '2014-09-17', end: today, type: 'background', className: 'server_time', group:'serveur'},
			{id: 'server_time_after', start: today, end: '2016-02-21', type: 'background', className: 'server_time_after', group:'serveur'},
			
			// Gestion du site
			{id: 'site_time',start: '2014-01-20', end: '2014-01-22', type: 'background', className: 'site_time', group:'site'},
			
			// Gestion de iOS
			{id: 'ios_time',start: '2014-01-20', end: '2014-01-22', type: 'background', className: 'ios_time', group:'ios'},
			
			// Gestion du Windows Phone
			{id: 'wp_time',start: '2014-01-20', end: '2014-01-22', type: 'background', className: 'wp_time', group:'windowsphone'},
			
			// Gestion de Android
			{id: 'android_time',start: '2014-01-20', end: '2014-01-22', type: 'background', className: 'android_time', group:'android'},
		*/	
			// Gestion du Site & Server
			// Server
			{id: 'server_1_1', start: '2014-09-17', end: today, type: 'background', className: 'server_time', group:'server_site', subgroup:'sg_1', subgroupOrder:0},
			{id: 'server_1_2', start: today, end: '2016-02-21', type: 'background', className: 'server_time_after' ,group:'server_site', subgroup:'sg_1', subgroupOrder:0},
			{id: 0, content: 'Commencement', start: '2014-09-17' ,group:'server_site', subgroup:'sg_1', subgroupOrder:0},
			// Site
			{id: 'site_1_1', start: '2014-09-17', end: today, type: 'background', className: 'site_time', group:'server_site', subgroup:'sg_2', subgroupOrder:1},
			{id: 'site_1_2', start: today, end: '2016-02-21', type: 'background', className: 'site_time_after' ,group:'server_site', subgroup:'sg_2', subgroupOrder:1},
			{id: 1000, content: 'Commencement', start: '2014-09-17' ,group:'server_site', subgroup:'sg_2', subgroupOrder:0},
			// Gestion des applications mobiles
			/*
			{id: 'B',start: '2014-01-22', end: '2014-01-23', type: 'background', group:'foo', className: 'negative'},
			{id: 0, content: 'no subgroup', start: '2014-01-20', end: '2014-01-22',group:'foo'},

			{id: 'SG_1_1',start: '2014-01-25', end: '2014-01-27', type: 'background', group:'bar', subgroup:'sg_1', subgroupOrder:0},
			{id: 'SG_1_2', start: '2014-01-26', end: '2014-01-27', type: 'background', className: 'positive',group:'bar', subgroup:'sg_1', subgroupOrder:0},
			{id: 1, content: 'subgroup0', start: '2014-01-23 12:00:00', end: '2014-01-26 12:00:00',group:'bar', subgroup:'sg_1', subgroupOrder:0},
			{id: 'SG_2_1', start: '2014-01-27', end: '2014-01-29', type: 'background', group:'bar', subgroup:'sg_2', subgroupOrder:1},
			{id: 'SG_2_2', start: '2014-01-27', end: '2014-01-28', type: 'background', className: 'negative',group:'bar', subgroup:'sg_2', subgroupOrder:1},
			{id: 2, content: 'subgroup1', start: '2014-01-27', end: '2014-01-29',group:'bar', subgroup:'sg_2', subgroupOrder:1},
			*/

			{id: 'background', start: '2014-01-29', end: '2014-01-30', type: 'background', className: 'tl_background',group:'bar'},
			{id: 'background_all', start: '2014-01-31', end: '2014-02-02', type: 'background', className: 'tl_background'}
		]);
		
		var container = document.getElementById('TimeLine');
		
		var options = {
			start: '2014-09-01',
			end: '2015-09-01',
			editable: false,
			stack: false,
		};

		var timeline = new vis.Timeline(container, items, groups, options);
	}

// ============================================================ MENU ================================================================================= */
	function Login_dropdown()
	{
		for (var info = 0; info < 9; info++)
			$('#teamate'+info).css({"z-index" : "1"});

		$('#screen').css({"display": "block", opacity: 0.7, "width":$(document).width(),"height":$(document).height()});
		$('#screen').click(function(){$(this).css("display", "none");$('#screen').css("display", "none");$("#login_box").css("display", "none")});
		$('#login_box').css({"display": "block"});
		$('#screen').css({"z-index" : "11"});
	}
	
	function Inscription_dropdown()
	{
		for (var info = 0; info < 9; info++)
			$('#teamate'+info).css({"z-index" : "1"});

		$('#screen').css({"display": "block", opacity: 0.7, "width":$(document).width(),"height":$(document).height()});
		$('#screen').click(function(){$(this).css("display", "none");$('#screen').css("display", "none");$("#inscription_box").css("display", "none")});
		$('#inscription_box').css({"display": "block"});
		$('#screen').css({"z-index" : "11"});
	}

// ============================================================ CONNEXION - INSCRIPTION ================================================================================= */
	
	function Upload_file()
	{
		//inject angular file upload directives and service.
		angular.module('myApp', ['angularFileUpload']);

		var MyCtrl = [ '$scope', '$upload', function($scope, $upload) {
		  $scope.onFileSelect = function($files) {
			//$files: an array of files selected, each file has name, size, and type.
			for (var i = 0; i < $files.length; i++) {
			  var file = $files[i];
			  $scope.upload = $upload.upload({
				url: 'server/upload/url', //upload.php script, node.js route, or servlet url
				//method: 'POST' or 'PUT',
				//headers: {'header-key': 'header-value'},
				//withCredentials: true,
				data: {myObj: $scope.myModelObj},
				file: file, // or list of files ($files) for html5 only
				//fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
				// customize file formData name ('Content-Desposition'), server side file variable name. 
				//fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file' 
				// customize how data is added to formData. See #40#issuecomment-28612000 for sample code
				//formDataAppender: function(formData, key, val){}
			  }).progress(function(evt) {
				console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
			  }).success(function(data, status, headers, config) {
				// file is uploaded successfully
				console.log(data);
			  });
			  //.error(...)
			  //.then(success, error, progress); 
			  // access or attach event listeners to the underlying XMLHttpRequest.
			  //.xhr(function(xhr){xhr.upload.addEventListener(...)})
			}
			/* alternative way of uploading, send the file binary with the file's content-type.
			   Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed. 
			   It could also be used to monitor the progress of a normal http post/put request with large data*/
			// $scope.upload = $upload.http({...})  see 88#issuecomment-31366487 for sample code.
		  };
		}];
	}


	function Connexion_check()
	{
		var app = angular.module('mod', [])
		.directive('equalsTo', [function () {
		/*
		 * <input type="password" ng-model="Password" />
		 * <input type="password" ng-model="ConfirmPassword" equals-to="Password" />
		 */
		return {
			restrict: 'A', // S'utilise uniquement en tant qu'attribut
			scope: true,
			require: 'ngModel',
			link: function (scope, elem, attrs, control) {
				var check = function () {
					//Valeur du champs courant
					var v1 = scope.$eval(attrs.ngModel); // attrs.ngModel = "ConfirmPassword"
	 
					//valeur du champ à comparer
					var v2 = scope.$eval(attrs.equalsTo).$viewValue; // attrs.equalsTo = "Password"
					return v1 == v2;
				};
				scope.$watch(check, function (isValid) {
					// Défini si le champ est valide
					control.$setValidity("equalsTo", isValid);
				});
			}
		};
	}]);
		
		
		(function ($) {
		  $('.ui.form').form({
			givenName: {
			  identifier: 'GivenName',
			  rules: [{
				type: 'empty',
				prompt: 'Please enter your given name'
			  }]
			},
			surname: {
			  identifier: 'Surname',
			  rules: [{
				type: 'empty',
				prompt: 'Please enter your surname'
			  }]
			},
			username: {
			  identifier: 'Username',
			  rules: [{
				type: 'empty',
				prompt: 'Please enter a username'
			  }]
			},
			email: {
			  identifier: 'Email',
			  rules: [{
				type: 'empty',
				prompt: 'Please enter your email'
			  }, {
				type: 'email',
				prompt: 'Please enter a valid email'
			  }]
			},
			password: {
			  identifier: 'Password',
			  rules: [{
				type: 'empty',
				prompt: 'Please enter a password'
			  }, {
				type: 'length[6]',
				prompt: 'Password needs to be atleast 6 characters long'
			  }]
			},
			passwordConfirm: {
			  identifier: 'PasswordConfirm',
			  rules: [{
				type: 'match[Password]',
				prompt: 'Password don\'t match'
			  }]
			}
		  }, {
			on: 'blur'
		  });
		}(jQuery));

		function RegisterController($scope, $element) {
		  var registrationForm = $($element);

		  $scope.user = {};
		  $scope.loading = false;

		  $scope.isInvalid = function () {
			return !registrationForm.form('validate form');
		  };

		  $scope.register = function () {
			if (this.isInvalid()) {
			  return;
			}

			this.loading = true;

			console.log(this.user);
		  };
		}
	}
	
// ============================================================ WORLDMAP ============================================================================= */
	function call_map()
	{
		$(function(){
			$('#world-map').vectorMap({
				map: 'world_mill_en',
				series: {
					regions: [{
						values: gdpData,
						scale: ['#C8EEFF', '#0071A4'],
						normalizeFunction: 'polynomial'
					}]
				},
					onRegionTipShow: function(e, el, code){
					el.html(el.html()+' '+gdpData[code]+' Photos');
				}
			});
		}); 
	}