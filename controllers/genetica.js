var app = angular.module('myApp', []);
app.controller('GeneticaController', function($scope,$location) {
  $scope.toros = [
	{
		id:1,
		imageUrl : "images/toro.jpg",
		name: "Campeón 1",
		type: "pedigree",
		genetic_type: "semen",
		description: "1999",
		pdfUrl: "pdf/lorem-ipsum.pdf"
	},
	{
		id:2,
		imageUrl : "images/toro11.jpg",
		name: "Campeón 2",
		type: "general",
		genetic_type: "semen",
		description: "1980",
		pdfUrl: "pdf/lorem-ipsum.pdf"
	},
	{
		id:3,
		imageUrl : "images/toro.jpg",
		name: "Campeón 3",
		type: "pedigree",
		genetic_type: "semen",
		description: "1999",
		pdfUrl: "pdf/lorem-ipsum.pdf"	
	},
	{
		id:4,
		imageUrl : "images/toro.jpg",
		name: "Campeón 4",
		type: "general",
		genetic_type: "reproductor",
		description: "1999",
		pdfUrl: "pdf/lorem-ipsum.pdf"
	},
	{
		id:5,
		imageUrl : "images/toro11.jpg",
		name: "Campeón 5",
		type: "pedigree",
		genetic_type: "reproductor",
		description: "1980",
		pdfUrl: "pdf/lorem-ipsum.pdf"
	},
	{
		id:6,
		imageUrl : "images/toro.jpg",
		name: "Campeón 6",
		type: "general",
		genetic_type: "reproductor",
		description: "1999",
		pdfUrl: "pdf/lorem-ipsum.pdf"	
	},	
	{
		id:7,
		imageUrl : "images/toro.jpg",
		name: "Campeón 7",
		type: "pedigree",
		genetic_type: "semen",
		description: "1999",
		pdfUrl: "pdf/lorem-ipsum.pdf"
	},
	{
		id:8,
		imageUrl : "images/toro11.jpg",
		name: "Campeón 8",
		type: "general",
		genetic_type: "semen",
		description: "1980",
		pdfUrl: "pdf/lorem-ipsum.pdf"
	},
	{
		id:9,
		imageUrl : "images/toro.jpg",
		name: "Campeón 9",
		type: "pedigree",
		genetic_type: "semen",
		description: "1999",
		pdfUrl: "pdf/lorem-ipsum.pdf"	
	},
	{
		id:10,
		imageUrl : "images/toro.jpg",
		name: "Campeón 10",
		type: "general",
		genetic_type: "reproductor",
		description: "1999",
		pdfUrl: "pdf/lorem-ipsum.pdf"
	},
	{
		id:11,
		imageUrl : "images/toro11.jpg",
		name: "Campeón 11",
		type: "pedigree",
		genetic_type: "reproductor",
		description: "1980",
		pdfUrl: "pdf/lorem-ipsum.pdf"
	},
	{
		id:12,
		imageUrl : "images/toro.jpg",
		name: "Campeón 12",
		type: "general",
		genetic_type: "reproductor",
		description: "1999",
		pdfUrl: "pdf/lorem-ipsum.pdf"	
	}
  ];
  	$scope.showGeneral = function (obj) {
    	return obj.type === "general";
	};
	$scope.showPedigree = function (obj) {
        return obj.type === "pedigree";
    };
    $scope.showSemen = function (obj) {
        return obj.genetic_type === "semen";
	};
	$scope.showReproductor = function (obj) {
        return obj.genetic_type === "reproductor";
	};

  
});