angular.module('kB')

.controller('CategoriesCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
  $http.get('/categories').success(function(data) {
    $scope.categories = data;
  });
}])

.controller('CategoryCreateCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
  $scope.createCategory = function() {
    var data = {
      name: $scope.name,
      description: $scope.description
    };
    
    $http.post('/categories', data).success(function(data) {
      console.log(data);
    });
    
    $location.path('/categories');
  };
}])

.controller('CategoryDeleteCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  $http.get('/categories/' + $routeParams.id).success(function(data) {
    $scope.category = data;
  });
  
  $scope.removeCategory = function() {
    $http.delete('/categories/' + $routeParams.id).success(function(data){
      console.log(data);
    });
    $location.path('/categories');
  };
}]);