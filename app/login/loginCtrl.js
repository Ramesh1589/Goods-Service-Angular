(function(){
  function loginCtrl($scope,$http){
      //$scope.username="kiran";
      $scope.user={};
      $scope.getCountries = function(val) {
    return $http.get('api/countries.json', {
      params: {
        country: val,
        sensor: false
      }
    }).then(function(response){
        $scope.countries = response.data.countries;
      return response.data.countries.map(function(item){
        return item.name;
      });
    });
  };
  }
    angular.module("login")
    .controller("loginCtrl",["$scope","$http",loginCtrl]);    
})();