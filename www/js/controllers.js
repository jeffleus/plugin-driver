angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicPopup) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
	
	$scope.echo = function() {
            var cognitoIdentityUserPoolId = "us-west-2_KMI3gTfQw";
            var cognitoIdentityUserPoolAppClientId = "49f7iepq786236nea8t33m1kje";
            var cognitoArnIdentityPoolId = "us-west-2:28695927-b308-4073-acd6-fedc4e1cd40b";
            
            var options = {
                "CognitoIdentityUserPoolId": cognitoIdentityUserPoolId,
                "CognitoIdentityUserPoolAppClientId": cognitoIdentityUserPoolAppClientId,
                "arnIdentityPoolId": cognitoArnIdentityPoolId
            };

            window.MyCordovaPlugin.init(options,function(result) {
			//callback
			console.log(result);
			$ionicPopup.alert({
				 title: 'Title',
				 template: 'Alert message'
			  });
		})
	};

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
