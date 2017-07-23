(
    function () {
        function productSvcFn($http,$q) {
            this.getProducts=function(){
                var dfd = $q.defer();
                //making http call
                $http.get("api/products.json")
                .then(function(response){
                    dfd.resolve(response);
                })
                .catch(function(errResponse){
                    dfd.reject(errResponse);
                });
                 
                return dfd.promise;
            }

        }
        angular.module("products")
            .service("productsSvc", ["$http","$q",productSvcFn]);
    }
)();
