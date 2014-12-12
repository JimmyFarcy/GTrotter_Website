'use strict';

/*Controllers*/
var app = angular('appGTrotter')
var singleController = app.singleController('singleController',	function($scope){
		$scope.users = 
		[
		{id:1, name:'Jimmy FARCY',  images:"images/jimmy_farcy_epitech.jpg" },
		{id:2, Name:'Mathieu VILLE',   images:"images/mathieu_ville_epitech.jpg" },
		{id:3, name:'Julian HO QUANG',  images:"julian_hoquang_epitech.jpg"  },
		{id:4, name:'Benjamin BAGOT',  images:"images/benjamin_bagot_epitech.jpg"  },
		{id:5, name:'Gregory QUERE',  images:"images/gregory_quere_epitech.jpg"  },
		{id:6, name:'Mortimer LEBORGNE', images:"images/mortimer_leborgne_epitech.jpg" },
		{id:7, name:'Yoann BOURGAULT',  images:"images/yoann_bourgault_epitech.jpg"  },
		{id:8, name:'Cédric GUERRIER', images:"images/cedric_guerrier_epitech.jpg"}, 
		];

	});
