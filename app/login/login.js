(function(){
    
    angular.module("login",[]);
    
    angular.module("login")
    .run(function(){
        console.log("login-run");
    })
    .config(function(){
        console.log("login-config");
    })
      
})();