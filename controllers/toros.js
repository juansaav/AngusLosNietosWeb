var app = angular.module('myApp',  ['pascalprecht.translate']);
app.controller('TorosController', function($scope,$location,$translate) {
	  $scope.init = function () {
  		if (sessionStorage.lan != null){
			$translate.use(sessionStorage.lan);
			$scope.lan = sessionStorage.lan;
  		};
   };
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
		name: "RP52- Campeón Dos años menor y Reservado Gran Campeón",
		place: "Expo Prado",
		year: 2018
  	},
  	{
  		id:2,
		imageUrl : "images/campeon8.jpg",
		name: "RP51- Reservada Vaquillona Menor",
		place: "Expo Prado",
		year: 2018
  	},
  	{
  		id:3,
		imageUrl : "images/campeon4.jpg",
		name: "RP98- Campeón Junior",
		place: "Expo Prado",
		year: 2018
  	},
  	{
  		id:4,
		imageUrl : "images/campeon1.jpg",
		name: "RP670- Campeona Vaca Joven y Reservada",
		place: "Expo Durazno",
		year: 2018
  	},
  	{
  		id:5,
		imageUrl : "images/campeon9.jpg",
		name: "RP51- Campeona Vaquillona Menor",
		place: "Expo Durazno",
		year: 2018
  	},
  	{
  		id:6,
		imageUrl : "images/campeon2.jpg",
		name: "RP670- Campeona Junior",
		place: "Expo Prado",
		year: 2017
  	},
  	{
  		id:7,
		imageUrl : "images/campeon5.jpg",
		name: "RP52- Tercer Mejor Ternero Menor",
		place: "Expo Prado",
		year: 2017
  	},
  	{
  		id:8,
		imageUrl : "images/campeon7.jpg",
		name: "RP51- Tercer Mejor Ternera Menor",
		place: "Expo Prado",
		year: 2017
  	},
  	{
  		id:9,
		imageUrl : "images/campeon3.jpg",
		name: "RP670- Campeona Junior",
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
    'Venta de reproductores': 'Sale of bulls',
    'Venta de embriones': 'Sale of Embryos',
    'Ver mas': 'See more',
    'Abrir catálogo' : 'Open catalog',

    'Nombre completo': 'Full name',
    'Email': 'Email',
    'Telefono': 'Phone',
    'Mensaje': 'Message',
    'Enviar mensaje': 'Send message',
    'Datos de contacto': 'Contact information',
    'Direccion': 'Address',
    'Telefonos': 'Phones',
    'Seguinos en': 'Follow us',
    'Venta de semen y embriones': 'Sale of Semen and Embryos',
    'Sobre nosotros': 'About us',
    'Premios': 'Awards',
    'Genética superior': 'Superior genetics',  
     'Venta de semen desc': 'The sale of semén occupies a very important place in the cabin, with the aim of expanding the genetics that we have in the country, aiming to improve the productive results of the cattle systems.',
    'Venta de embriones desc': 'We currently have a good stock of donors of excellent genetic load and racial seal, which represent the animal biotype we are looking for.',
    'Venta de reproductores desc': 'For being a new cabin we aim at the quality of the bulls, being all of pedigree, bred neatly to grass but arriving at 2 years with an excellent reproductive aptitude, ready to work in any cattle system of the country.',
    
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
    'Abrir catálogo' : 'Abrir catálogo',

    'Nombre completo': 'Nombre completo',
    'Email': 'Email',
    'Telefono': 'Telefono',
    'Mensaje': 'Mensaje',
    'Enviar mensaje': 'Enviar mensaje',
    'Datos de contacto': 'Datos de contacto',
    'Direccion': 'Direccion',
    'Telefonos': 'Telefonos',
    'Seguinos en': 'Seguinos en',
    'Venta de semen y embriones': 'Venta de semen y embriones',
    'Sobre nosotros': 'Sobre nosotros',
    'Premios': 'Premios',
    'Genética superior': 'Genética superior',
    'Venta de semen desc': 'La venta de semén ocupa un lugar muy importante en la cabaña, con el objetivo de expandir la genética que tenemos en el país, apuntando a mejorar los resultados productivos de los sistemas ganaderos.',
    'Venta de embriones desc': ' Actualmente contamos con un buen stock de donantes de excelente carga genética y sello racial, las cuales representan el biotipo de animal que buscamos.',
    'Venta de reproductores desc': 'Por ser una cabaña nueva apuntamos a la calidad de los toros, siendo todos estos de pedigrí, criados netamente a pasto pero llegando a los 2 años con una excelente aptitud reproductiva, listos para trabajar en cualquier sistema ganadero del país.',
     });
 
  $translateProvider.preferredLanguage('es');
}]);

