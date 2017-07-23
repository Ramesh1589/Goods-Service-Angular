(
    function () {
        function productsFacFn($http, $q) {
            return {
                getProducts: function () {
                    var dfd = $q.defer();
                    //making http call
                    $http.get("api/products.json")
                        .then(function (response) {
                            dfd.resolve(response);
                        })
                        .catch(function (errResponse) {
                            dfd.reject(errResponse);
                        });

                    return dfd.promise;
                },
                
                addProducts:function(product){
                    
                }
            }

            angular.module("products")
                .factory("productsFac", ["$http", "$q", productsFacFn]);
        }
    )();
