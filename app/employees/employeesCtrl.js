(function(){

    function employeesCtrl(employeesSvc){
        var vm = this;
        employeesSvc.getEmployees()
        .then( function(res){
            console.log(res);
            vm.employees= res.data.employees;
            vm.paginate.totalEmployeeCount = vm.employees.length;
            handlePaginateLogic();
        })
        .catch(function(err){
            console.log(err);
        });


        // Pagination logic
        vm.paginate={
           // totalEmployeeCount:0,
            currentPage:1,
            //maxSize:20
        };
        vm.minimumEmployees=10;
        vm.totalEmployeeCount =0;
        vm.loadPaginatedEmployees= function(){
            console.log(vm.paginate.currentPage);
            handlePaginateLogic();

        };

        function handlePaginateLogic(){
            var maxCount = vm.paginate.currentPage* vm.minimumEmployees;
            var minCount = maxCount-10;
            vm.paginatedEmployees = vm.employees.slice(minCount,maxCount);
        }
        // End of Pagination logic
    }
    angular.module("employees")
    .controller("employeesCtrl",["employeesSvc",employeesCtrl]);

})();
