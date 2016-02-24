var CategorySearch = function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/categorySearch.html',
    scope: {},
    controllerAs:'catSearchCtrl',
    controller: ['$scope', 'CategoriesProvider', function($scope, CategoriesProvider){
      $scope.topCategories = CategoriesProvider.getTopCategories();
      $scope.toggleCategories = true;
      $scope.otherCategories = CategoriesProvider.getOtherCategories();
    }]
  };
};

export default {
  name: 'categorySearch',
  fn: CategorySearch
};
