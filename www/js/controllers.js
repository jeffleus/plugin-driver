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
	
            $scope.getToken = function() {
            awsUserPluginInstance.getToken({}, function(res) {
                                           console.log(res);
                                           }, function(err) {
                                           console.log(err);
                                           });
            }
	
            function login() {
            awsUserPluginInstance.logIn({"username":"XXX-USERNAME-XXX", "password":"XXX-PASSWORD-XXX"}, function(res) {
                                         // Success
                                         console.log(res);
                                         }, function(err) {
                                         // Error : err
                                         });
            }
            
    var awsUserPluginInstance;
	$scope.echo = function() {
            var cognitoIdentityUserPoolId = "us-west-2_***- USERPOOL -***";
            var cognitoIdentityUserPoolAppClientId = "***- CLIENTID -***";
            var cognitoArnIdentityPoolId = "us-west-2:***- IDENTITY POOL ID -***";
            
            var options = {
                "CognitoIdentityUserPoolId": cognitoIdentityUserPoolId,
                "CognitoIdentityUserPoolAppClientId": cognitoIdentityUserPoolAppClientId,
                "arnIdentityPoolId": cognitoArnIdentityPoolId
            };
            
            awsUserPluginInstance = new AwsUserPoolPlugin(options, function() {
                                                              console.log("connectionPluginInstance Init Ok");
                                                          login();
                                                              }, function() {
                                                              console.log("connectionPluginInstance Init Fail");
                                                              });

//            window.MyCordovaPlugin.init(options,function(result) {
//			//callback
//			console.log(result);
//			$ionicPopup.alert({
//				 title: 'Title',
//				 template: 'Alert message'
//			  });
//		})
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
