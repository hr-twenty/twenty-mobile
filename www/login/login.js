angular.module('app.login', [])

.controller('LoginCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {

  // var authUrl = 'http://65.52.118.73:55555/auth/linkedin';
  var authUrl = 'http://10.4.8.235:8000/auth/linkedin';

  $scope.authorize = function() {
    $scope.hello = 'hello';
    var ref = window.open(authUrl, '_blank');

    ref.addEventListener('loadstart', function(e) {
      var userId = /userId=(.+)/.exec(e.url);
      
      if (userId[1]) {
        $rootScope.userId = userId;
        ref.close();

        // TODO: Route to loading page
      }
    });
  };

}]);
