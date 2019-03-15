var app = angular.module('myApp',  ['pascalprecht.translate']);
app.controller('ContactoController', function($scope,$location,$translate,$window) {
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
   $scope.EmailClick = function(){ 
       	           Email.send($scope.emailEmail,
	                "matiasolaldeolmos@gmail.com",
	                "Consulta pagina - Nombre: " + $scope.nameEmail + ", Telefono: "+ $scope.phoneEmail,//message
	                $scope.messageEmail,
	                "smtp.elasticemail.com",
	                "matiasolaldeolmos@gmail.com",
	                "eb4e4d75-e39b-4cd0-a8da-0eedadf3fa4e");
			       $scope.nameEmail = "";
			       $scope.phoneEmail = "";
			       $scope.messageEmail = "";
			       $scope.emailEmail = "";
			       $scope.emailSent = true;
			       setTimeout(function(){ 
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
			       	location.reload();
			       }, 3000); };
	
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
    'Nombre completo': 'Full name',
    'Email': 'Email',
    'Telefono': 'Phone',
    'Mensaje': 'Message',
    'Enviar mensaje': 'Send message',
    'Datos de contacto': 'Contact information',
    'Direccion': 'Address',
    'Telefonos': 'Phones',
    'Seguinos en': 'Follow us'
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
    'Nombre completo': 'Nombre completo',
    'Email': 'Email',
    'Telefono': 'Telefono',
    'Mensaje': 'Mensaje',
    'Enviar mensaje': 'Enviar mensaje',
    'Datos de contacto': 'Datos de contacto',
    'Direccion': 'Direccion',
    'Telefonos': 'Telefonos',
    'Seguinos en': 'Seguinos en'
  });
 
  $translateProvider.preferredLanguage('es');
}]);