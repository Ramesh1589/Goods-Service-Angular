(
    function () {
        function cmDatePicker() {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {
                    
                    var options={};
                    if(attrs["mindate"]){
                        options.minDate=attrs["mindate"];
                    }
                    if(attrs["maxdate"]){
                        options.maxDate=attrs["maxdate"];
                    }
                    element.datepicker(options);
                }
            };

        }

        angular.module("common")
            .directive("cmDatePicker", [cmDatePicker]);
    }
)();
