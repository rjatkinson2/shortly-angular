angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(link){
    $http.post('/api/links', {url: link}).success(function(data, status, headers, config){
      return;
    }).error(function(data, status, headers, config){
      console.log(data, status)
    });
    $scope.link.url = '';
  };
});
