(function () {
    function cmPost($compile) {
        return {
            link: function (scope, element, attrs) {
                /* var snippet = '<a class="navbar-brand" href="#">{{hc.brandName}}</a>';*/
                var snippet = "";
                if (scope.type[0] == "video") {
        snippet = '<video width="400" controls><source src="{{url}}" type="video/mp4"></video>';

                } else if (scope.type[0] == "image") {
                    snippet = '<img src="{{url}}">';
                }

                var compileOutput = $compile(snippet);
                var content = compileOutput(scope);
                element.append(content);

            }
        }
    }
    angular.module("common")
        .directive("cmPost", ["$compile", cmPost]);
})();
