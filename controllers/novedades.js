var app = angular.module('myApp', ['pascalprecht.translate']);
app.controller('NovedadesController', function($scope,$location,$translate) {
  $scope.novedades = [
  	{
		id:0,
		imageUrl : "images/novedad1.png",
		title: "Ya falta menos para el World Angus Secretariat, no se lo pierda!!!",
		//date: "",
		link: "http://angusuruguay.com/world-angus-secretariat-uruguay-2019/"
		//description: ""
	}
/*	{
		id:1,
		imageUrl : "images/img_1.jpg",
		title: "World Angus Secretariat",
		date: "14/2/2019",
		description: "Ya falta menos para el World Angus Secretariat, no se lo pierda!!!"
	},
	{
		id:2,
		id:2,
		imageUrl : "images/img_2.jpg",
		title: "Novedad 2",
		date: "11/6/2018",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam placeat nobis veritatis tempora natus rerum obcaecati."
	},
	{
		id:3,
		imageUrl : "images/img_3.jpg",
		title: "Novedad 3",
		date: "04/01/2018",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam placeat nobis veritatis tempora natus rerum obcaecati."
	},*/
  ]
  $scope.showNovedad = false;
  $scope.NovedadSelected = undefined;
  $scope.init = function () {
  	url = window.location.href ;
	expresion = /nov=(\d+)/;
	novMatch = url.match(expresion)
    if (novMatch != null){
		novId = novMatch[1];
    	$scope.showNovedad = true;
    	$scope.novedades = [$scope.novedades[novId]];
	  	var element = document.getElementById("navBar");
	  	element.classList.remove("js-site-navbar");
	  	element.classList.add("scrolled");
    }
    if (sessionStorage.lan != null){
			$translate.use(sessionStorage.lan);
			$scope.lan = sessionStorage.lan;
  		};
   }
   $scope.init();
   $scope.lan = "es";		       
    $scope.ChangeLanguage = function(){
    	if ($scope.lan == "en"){
			$scope.lan = "es";
    	} else {
    		$scope.lan = "en";
    	}
    	$translate.use($scope.lan);
		sessionStorage.setItem("lan",$scope.lan);
    }
	
   $scope.init();
  
});
app.controller('AuxController', function($scope,$location,$translate) {
  $scope.init = function () {
  		if (sessionStorage.lan != null){
			$translate.use(sessionStorage.lan);
			$scope.lan = sessionStorage.lan;
  		};
   }; 
   $scope.$on('someEvent', function(event, args) { $scope.init(); });
   $scope.init();
});
app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'Inicio': 'Home',
    'Contacto': 'Contact us',
    'Novedades': 'News',
    'Nosotros': 'About us',
    'Genetica': 'Genetics',
    'Venta de semen': 'Sale of semen',
    'Embriones': 'Embryos',
    'Venta de reproductores': 'Sale of players',
    'Venta de embriones': 'Sale of Embryos',
    'Ver mas': 'See more',
    
  });
 
  $translateProvider.translations('es', {
    'Inicio': 'Inicio',
    'Contacto': 'Contacto',
    'Novedades': 'Novedades',
    'Nosotros': 'Nosotros',
    'Genetica': 'Genetica',
    'Venta de semen': 'Venta de semen',
    'Venta de embriones': 'Venta de embriones',
    'Embriones': 'Embriones',
    'Venta de reproductores': 'Venta de reproductores',
    'Ver mas': 'Ver mas',

   });
 
  $translateProvider.preferredLanguage('es');
}]);
