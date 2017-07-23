(
    function () {
        function cmLogin() {
            return {
                templateUrl:"app/login/login.tpl.html",
                controller:"loginCtrl as lc",
                restrict:"E",
                link:function(scope,element,attrs){
                    console.log(scope);
                }
            }

        }

        angular.module("common")
            .directive("cmLogin", [cmLogin]);
    }
)();
