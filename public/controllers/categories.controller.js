angular.module('kB')

.controller('CategoriesCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
  $http.get('/categories').success(function(data) {
    $scope.categories = data;
  });
  
  $scope.removeCategory = function(id) {
    $http.delete('/categories/' + id, function(data) {
      console.log(data);
    });
    
    $location.path('/categories');
  };
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
}]);