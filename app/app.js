(function(){
    
    //module creation
    //first param: Module Name
    //second params: module names injected.
    angular.module("goodServices",["ui.bootstrap","login","register","header","common","products","employees"]);
    
   //consuming the module
    angular.module("goodServices")
    .config(function(initProvider){
        console.log("I m the good services");
    })
    .run(function(){
        console.log("I m the good services run function");
    })
    .provider("init",function(){
        console.log("provider-good");
        this.$get=function(){
            
        };
    });
    
})();








