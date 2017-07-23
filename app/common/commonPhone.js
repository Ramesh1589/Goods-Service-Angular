(function () {
    function phoneFormatter(){
        
        return function(input,criteria1,criteria2){
            var filteredOutput="";
                
            if(criteria1=="US"){
               filteredOutput= formatUSPhone(input,criteria2);
            }
            else if(criteria1=="IN"){
                filteredOutput=formatINPhone(input,criteria2);
            }
            else{
                filteredOutput=input;
            }
            
            
            return filteredOutput;
        }
        
    }
    
    function formatUSPhone(phoneNumber,addPrefix){
        var result= phoneNumber.substring(0,3)+"-"+
                    phoneNumber.substring(3,6)+"-"+
                    phoneNumber.substring(6,10);
        if(addPrefix){
            result="+1 "+ result;
        }
        return result;
    }
     function formatINPhone(phoneNumber,addPrefix){
        var result = phoneNumber.substring(0,5)+"-"+
                    phoneNumber.substring(5,10);
         if(addPrefix){
             result = "+91-"+result;
         }
         return result;
                    
    }
    angular.module("common")
    .filter("phoneFormatter",[phoneFormatter]);
})();
