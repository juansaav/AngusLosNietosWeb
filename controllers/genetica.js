var app = angular.module('myApp',  ['pascalprecht.translate']);
app.controller('GeneticaController', function($scope,$location,$translate,$window) {
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

