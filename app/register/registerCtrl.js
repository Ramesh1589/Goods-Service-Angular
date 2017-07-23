(function () {

    function registerCtrl(lookupSvc) {
        var vm = this;
        vm.dob = {
            format: "MM/dd/yyyy",
            popup1: {
                opened: false
            },
            dateOptions: {
                dateDisabled: disabled,
                formatYear: 'yy',
                maxDate: new Date(2017, 5, 22),
                minDate: new Date(),
                startingDay: 1
            },

        };
        vm.open1 = function () {
            vm.dob.popup1.opened = true;
        };
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }


        vm.user = {
            userName: "kiran"
        };
        vm.register = function () {
            console.log(vm.user);
        }
        vm.DobRange = {
            maxdate: "-18Y"
        };
        vm.DateofReservationRange = {
            mindate: "0D",
            maxdate: "+1M"
        };
        // vm.countries = lookupSvc.getCountries();

        lookupSvc.getCountries()
            .then(function (res) {
                console.log(res);
            })
            .catch(function (err) {
                console.log(err);
            })
        vm.selectedCountry = lookupSvc.defaultCountry();
       
        lookupSvc.getCountriesFromJson()
            .then(function (res) {
                console.log(res);
                vm.countries = res;
            })
            .catch(function (err) {
                console.log(err);
            });

        vm.helpLineNumber = "9484884848";

    }
    angular.module("register")
        .controller("registerCtrl", ["lookupService", registerCtrl]);

})();
