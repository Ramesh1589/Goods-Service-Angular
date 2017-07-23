(function(){
    angular.module("register",[]);
    
    angular.module("register")
    .config(function(){
        console.log("register-config");
    })
    .run(function(){
       console.log("register-run"); 
    });
})();