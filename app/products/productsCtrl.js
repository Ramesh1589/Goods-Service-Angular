(function(){

    function productsCtrl(productsSvc){
        var vm = this;
        productsSvc.getProducts()
        .then( function(res){
            console.log(res);
            vm.products= res.data.products;
            vm.paginate.totalProductCount = vm.products.length;
            handlePaginateLogic();
        })
        .catch(function(err){
            console.log(err);
        });

        // filtration Logic Here
        vm.orderByCrietria="Price";
        vm.orderByPrice = function(){
            if( vm.orderByCrietria=="Price"){
                vm.orderByCrietria="-Price";
            }
            else{
                 vm.orderByCrietria="Price";
            }
        };
        // Pagination logic for price buutton
        vm.paginate={
            totalProductCount:0,
            currentPage:1,
            maxSize:20
        };
        //pagination with button

        vm.minimumProducts=10;
        vm.totalProductCount =0;
        vm.loadPaginatedProducts= function(){
            console.log(vm.paginate.currentPage);
            handlePaginateLogic();

        };

        function handlePaginateLogic(){
            var maxCount = vm.paginate.currentPage* vm.minimumProducts;
            var minCount = maxCount-10;
            vm.paginatedProducts = vm.products.slice(minCount,maxCount);
        }
        // End of Pagination logic
    }
    angular.module("products")
    .controller("productsCtrl",["productsSvc",productsCtrl]);

})();
