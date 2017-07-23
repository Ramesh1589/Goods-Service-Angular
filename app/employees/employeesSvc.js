(
    function () {
        function employeeSvcFn($http,$q) {
            this.getEmployees=function(){
                var dfd = $q.defer();
                //making http call
                $http.get("api/employees.json")
                .then(function(response){
                    dfd.resolve(response);
                })
                .catch(function(errResponse){
                    dfd.reject(errResponse);
                });

                return dfd.promise;
            }

        }
        angular.module("employees")
            .service("employeesSvc", ["$http","$q",employeeSvcFn]);
    }
)();
