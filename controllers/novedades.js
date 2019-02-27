var app = angular.module('myApp', []);
app.controller('NovedadesController', function($scope,$location) {
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
   }
   $scope.init();
  
});