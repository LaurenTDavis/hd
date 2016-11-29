
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

     $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },

            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');

            var forms = document.getElementById("contact_form");
            forms.reset();
        });
});
    
}])