var app = angular.module('myApp', []);
app.controller('NosotrosController', function($scope,$location) {
	  $scope.torosGenetica = [
	{
		id:1,
		imageUrl : "images/hero_1.jpg",
		name: "Campeón 1",
		type: "pedigree",
		genetic_type: "semen",
		description: "1999",
		pdfUrl: "pdf/lorem-ipsum.pdf"
	},
	{
		id:2,
		imageUrl : "images/cabana11.jpg",
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
  
  $scope.torosPremio = [
  	{
  		id:1,
		imageUrl : "images/campeon6.jpg",
		name: "Campeón Dos años menor y Reservado Gran Campeón",
		place: "Expo Prado",
		year: 2018
  	},
  	{
  		id:2,
		imageUrl : "images/campeon8.jpg",
		name: "Reservada Vaquillona Menor",
		place: "Expo Prado",
		year: 2018
  	},
  	{
  		id:3,
		imageUrl : "images/campeon4.jpg",
		name: "CCampeón Junior",
		place: "Expo Prado",
		year: 2018
  	},
  	{
  		id:4,
		imageUrl : "images/campeon1.jpg",
		name: "Campeona Vaca Joven y Reservada",
		place: "Expo Durazno",
		year: 2018
  	},
  	{
  		id:5,
		imageUrl : "images/campeon9.jpg",
		name: "Campeona Vaquillona Menor",
		place: "Expo Durazno",
		year: 2018
  	},
  	{
  		id:6,
		imageUrl : "images/campeon2.jpg",
		name: "Campeona Junior",
		place: "Expo Prado",
		year: 2017
  	},
  	{
  		id:7,
		imageUrl : "images/campeon5.jpg",
		name: "Tercer Mejor Ternero Menor",
		place: "Expo Prado",
		year: 2017
  	},
  	{
  		id:8,
		imageUrl : "images/campeon7.jpg",
		name: "Tercer Mejor Ternera Menor",
		place: "Expo Prado",
		year: 2017
  	},
  	{
  		id:9,
		imageUrl : "images/campeon3.jpg",
		name: "Campeona Junior",
		place: "Expo Durazno",
		year: 2017
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
	$scope.ImagesGaleria1 = [
  		{src:"images/Galeria/galeria1.jpg"}	];
	$scope.ImagesGaleria = [
  		"images/Galeria/galeria1.jpg",
  		"images/Galeria/galeria2.jpg",
  		"images/Galeria/galeria3.jpg",
  		"images/Galeria/galeria4.jpg",
  		"images/Galeria/galeria5.jpg",
  		"images/Galeria/galeria6.jpg",
  		"images/Galeria/galeria7.jpg",
  		"images/Galeria/galeria8.jpg",
  		"images/Galeria/galeria9.jpg"  	];
  $scope.init = function () {

   }
   $scope.init();

});
