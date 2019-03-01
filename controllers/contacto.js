var app = angular.module('myApp', []);
app.controller('ContactoController', function($scope,$location) {
  $scope.init = function () {

   }
   $scope.init();
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
			       }, 3000); }
});