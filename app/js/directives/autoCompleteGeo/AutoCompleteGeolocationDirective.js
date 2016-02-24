var AutoCompleteGeolocation = function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/autoCompleteGeolocation.html',
    scope: {
      title: '@',
      message: '@exampleDirective'
    },
    controller: ['$scope', 'AutoCompleteGeolocation', function($scope, AutoCompleteGeolocation){
      $scope.suggest = (queryString) => {
        if(queryString.length < 3) {
          $scope.locationList = null;
        }else{
          AutoCompleteGeolocation
            .suggest(queryString)
            .then((locationList) => {
              $scope.locationList = locationList;
              $scope.$apply();
            });
        }
      };
      $scope.selectLocation = (location) => {
        $scope.geolocation = location;
        $scope.locationList = null;
      };
    }]
  };
};

export default {
  name: 'autoCompleteGeolocation',
  fn: AutoCompleteGeolocation
};
