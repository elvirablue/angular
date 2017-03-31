



(function() {
	var app = angular.module ('store',['storeDirectivs']);

	app.factory('httpq', function($http, $q){
    return{
        get: function(){
            var deffered = $q.defer();
            $http.get.apply(null, arguments)
                .then(deffered.resolve)
                .catch(deffered.resolve);
                return deffered.promise;
        	}
   		};
   	});

	app.controller('StoreController', function(httpq){
    	var store = this;
 	
    	store.products  = [];
    	httpq.get('data.json')
    	    .then(function(result){
    	        store.products = result.data;
    	    })
    	    .catch(function(){
    	        alert('error');
    	    })
    	    .finally(function(){
    	        alert('finally')
    	    });
	});

		
	
	
})();

