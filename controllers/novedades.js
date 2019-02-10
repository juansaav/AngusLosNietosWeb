var app = angular.module('myApp', []);
app.controller('NovedadesController', function($scope,$location) {
  $scope.novedades = [
	{
		id:1,
		imageUrl : "images/img_1.jpg",
		title: "Lorem Ipsum Dolor Sit Amet",
		date: "20/10/2018",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam placeat nobis veritatis tempora natus rerum obcaecati."
	},
	{
		id:2,
		imageUrl : "images/img_2.jpg",
		title: "Lorem Ipsum Dolor Sit Amet",
		date: "11/6/2018",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam placeat nobis veritatis tempora natus rerum obcaecati."
	},
	{
		id:3,
		imageUrl : "images/img_3.jpg",
		title: "Lorem Ipsum Dolor Sit Amet",
		date: "04/01/2018",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam placeat nobis veritatis tempora natus rerum obcaecati."
	},
  ]
  $scope.showNovedad = false;
  $scope.NovedadSelected = undefined;
  $scope.init = function () {
    var paramValue = $location.search().nov;
    if (paramValue != undefined){
    	$scope.showNovedad = true;
    	$scope.NovedadSelected = $scope.novedades[paramValue];
    }
   }
   $scope.init();
  
});