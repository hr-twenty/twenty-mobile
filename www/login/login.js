angular.module('app.login', [])

.controller('LoginCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {

  // var authUrl = 'http://65.52.118.73:55555/auth/linkedin';
  var authUrl = 'http://10.4.8.235:8000/auth/linkedin';

  $scope.authorize = function() {
    var ref = window.open(authUrl, '_blank');

    ref.addEventListener('loadstart', function(e) {
      var userId = /userId=(.+)/.exec(e.url);
      
      if (userId) {
        $rootScope.userId = userId[1];
        ref.close();

        $rootScope.$digest();
        // TODO: Route to loading page and remove $rootScope.userId from page and html page
      }
    });
  };

}]);
