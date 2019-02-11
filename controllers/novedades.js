var app = angular.module('myApp', []);
app.controller('NovedadesController', function($scope,$location) {
  $scope.novedades = [
	{
		id:1,
		imageUrl : "images/img_1.jpg",
		title: "Novedad 1",
		date: "20/10/2018",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam placeat nobis veritatis tempora natus rerum obcaecati."
	},
	{
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
	},
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
    	document.getElementById("menuBar").style.backgroundColor  = "black";
    }
   }
   $scope.init();
  
});