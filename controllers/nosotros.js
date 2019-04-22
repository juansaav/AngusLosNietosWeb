var app = angular.module('myApp',  ['pascalprecht.translate']);

app.controller('AuxController', function($scope,$location,$translate) {
  $scope.init = function () {
  		if (sessionStorage.lan != null){
			$translate.use(sessionStorage.lan);
			$scope.lan = sessionStorage.lan;
  		};
   }; 
   $scope.init();
});
app.controller('NosotrosController', function($scope,$location,$translate) {
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
	$scope.ImagesGaleria1 = [
  		{src:"images/Galeria/galeria1.jpg"}	];
	$scope.ImagesGaleria = [
  		"images/Galeria/galeria1.jpg",
  		"images/Galeria/galeria2.JPG",
  		"images/Galeria/galeria3.JPG",
  		"images/Galeria/galeria4.JPG",
  		"images/Galeria/galeria5.JPG",
  		"images/Galeria/galeria6.JPG",
  		"images/Galeria/galeria7.JPG",
  		"images/Galeria/galeria8.JPG",
  		"images/Galeria/galeria9.JPG"  	];
  $scope.init = function () {

   }
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
    'Galería' : 'Galery',
    'Premios': 'Awards',
    'Historia': 'History',
    'Genética superior': 'Superior genetics',  
    "Nuestra empresa" : "Our company was born in 2014 with the aim of introducing new genetics in Uruguay. The animals are mostly from Argentine embryos, produced by the prestigious Tres Marías hut by H. Gutiérrez. Over the years American bloods have been incorporated and joint bellies have been purchased with well-known cabins in the country such as Bayucuá, Sierra Madera, La Santina, La Filomena and La Juanita de Wertel S.A.",
    'Nuestra empresa1': 'Our first participation was in the Durazno Expo in 2016, where we attended with a single heifer Sierra Sierra origin, obtaining the prize for Junior Champion and Third Best Female, great prizes that marked us that we were on the right track of what they are looking for in the Aberdeen Angus race in Uruguay.',
    'Nuestra empresa2': 'That same year we attended the largest livestock show in the country, the Prado Expo, where we took six animals and won six awards, including Third Best Junior Calf, Junior Champion and Third Best Junior Calf. In partnership with the Bayucuá and Tres Marías hut, we consecrated ourselves with the Angus Grand Champion in that competition, taking care of the first hut mentioned. These achievements filled us with pride and pushed us to keep improving.',
    'Nuestra empresa3': 'In the year that runs, we participated again in Expo Durazno, obtaining Champion Vaquillona Menor, Champion Young Cow and Reserved Grand Champion, and Champion Bull Dos Años Menor.',
    'Nuestra empresa4': 'Finally, at the recent Prado Expo we reached our greatest achievement so far, the RP 52 was awarded Reserved Great Angus Champion, along with the Junior Champion and the Reserved Champion Junior Heifer.',
    'Nuestra empresa5': 'The main objective of all this is, and will continue to be, to offer genetics that will have an impact on Uruguayan livestock, in order to produce high quality meat and provide the breeder functional bulls that adapt to our breeding herds. For the moment the specimens are sold in the cabin itself or possibly in some auction of the Race, example Gala Angus. The idea is to start making own auctions but because the cabin is in full growth have not been made yet.'
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
    'Galería' : 'Galería',
    'Premios': 'Premios',
    'Genética superior': 'Genética superior',
    'Historia': 'Historia',
    "Nuestra empresa" : "Nuestra empresa nace en el año 2014 con el objetivo de introducir nueva genética en los rodeos del Uruguay. Los animales son en su mayoría origen de embriones argentinos, producción de la prestigiosa cabaña Tres Marías de H. Gutiérrez. Con el correr de los años se han incorporado sangres americanas y se han comprado vientres conjuntos con cabañas muy reconocidas en el país como Bayucuá, Sierra Madera, La Santina, La Filomena y La Juanita de Wertel S.A.",
    'Nuestra empresa1': 'Nuestra primer participación fue en la Expo Durazno en el año 2016, donde concurrimos con una única vaquillona origen de Sierra Madera, obteniendo el premio a Campeona Junior y Tercer Mejor Hembra, grandes premios que nos marcaron que estábamos en el camino correcto de lo que buscan en la raza Aberdeen Angus en el Uruguay.',
    'Nuestra empresa2': 'Ese mismo año concurrimos a la mayor muestra ganadera del país, la Expo Prado, donde llevamos seis animales y obtuvimos seis premios, entre ellos Tercer Mejor Ternera Menor, Campeona Junior y Tercer Mejor Ternero Menor. En  sociedad con la cabaña Bayucuá y Tres Marías, nos consagramos con la Gran Campeona Angus en dicha competencia, a cuidado de la primera cabaña mencionada. Estos  logros nos llenaron de orgullo y nos presionaron a seguir mejorando.',
    'Nuestra empresa3': 'En el año que corre participamos nuevamente en Expo Durazno obteniendo Campeona Vaquillona Menor, Campeona Vaca Joven y Reservada Gran Campeona, y Campeón Toro Dos Años Menor.',
    'Nuestra empresa4': 'Por último, en la reciente Expo Prado alcanzamos nuestro mayor logro hasta el momento, el RP 52 se consagró Reservado Gran Campeón Angus, junto con el Campeón Junior y la Reservada Campeona Vaquillona Menor.',
 	'Nuestra empresa5': 'El objetivo principal de todo esto es, y seguirá siendo, ofrecer  genética que cause un impacto en la ganadería uruguaya, con el fin de producir carne de alta calidad y brindarle al criador toros funcionales que se adapten a nuestros rodeos de cría. Por el momento los ejemplares se comercializan en la propia cabaña o eventualmente en algún remate de la Raza, ejemplo Gala Angus. La idea es comenzar a hacer remates propios pero debido a que la cabaña se encuentra en pleno crecimiento no se han realizado aún.'
  });
 
  $translateProvider.preferredLanguage('es');
}]);