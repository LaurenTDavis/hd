
angular.module('HD_App', ['ngRoute']);




angular.module('HD_App')
    .controller('mainController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    
    $scope.company = "Hamlin Davis"; 

    $scope.right = true; 
    $scope.left = true; 
    $scope.righthome = false;
    $scope.lefthome = false;

    $scope.viewRight = function() {
    	$scope.righthome = true;
    	$scope.right = false;
    	$scope.left = false;
    }

    $scope.viewHome = function() {
    	$scope.right = true;
    	$scope.left = true;
    	$scope.righthome = false;
    	$scope.lefthome = false;
    }

    $scope.viewLeft = function() {
    	$scope.lefthome = true;
    	$scope.right = false; 
    	$scope.left = false
    }
    
}])