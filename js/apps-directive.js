



(function() {
	var app = angular.module ('storeDirectivs',[]);

	app.directive("productItem", function() {
		return {
			restrict: 'A',// E-element node / A-atribute
			templateUrl: 'prod-item.html'
		}		 
			
	})	
	
})();