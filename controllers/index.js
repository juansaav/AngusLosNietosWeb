var app = angular.module('myApp',  ['pascalprecht.translate']);
app.controller('InicioController', function($scope,$location,$translate,$window) {
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
app.controller('TorosController', function($scope,$location) {
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
    'Ver mas': 'See more',

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
    "Nuestra empresa" : "Our company was born in 2014 with the aim of introducing new genetics in Uruguay. The animals are mostly from Argentine embryos, produced by the prestigious Tres Marías hut by H. Gutiérrez. Over the years American bloods have been incorporated and joint bellies have been purchased with well-known cabins in the country such as Bayucuá, Sierra Madera, La Santina, La Filomena and La Juanita de Wertel S.A."
  
  });
 
  $translateProvider.translations('es', {
    'Inicio': 'Inicio',
    'Contacto': 'Contacto',
    'Novedades': 'Novedades',
    'Nosotros': 'Nosotros',
    'Genetica': 'Genetica',
    'Venta de semen': 'Venta de semen',
    'Embriones': 'Embriones',
    'Venta de reproductores': 'Venta de reproductores',
    'Ver mas': 'Ver mas',

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
    "Nuestra empresa" : "Nuestra empresa nace en el año 2014 con el objetivo de introducir nueva genética en los rodeos del Uruguay. Los animales son en su mayoría origen de embriones argentinos, producción de la prestigiosa cabaña Tres Marías de H. Gutiérrez. Con el correr de los años se han incorporado sangres americanas y se han comprado vientres conjuntos con cabañas muy reconocidas en el país como Bayucuá, Sierra Madera, La Santina, La Filomena y La Juanita de Wertel S.A."
  });
 
  $translateProvider.preferredLanguage('es');
}]);

