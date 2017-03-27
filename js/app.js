



(function() {
	var app = angular.module ('store',[]);

	app.controller("StoreController", function(){
		this.product = prod;
	});
	var prod = {
		name: "Учет сейфов",
		price: 4.99,
		description: "Учитываем сейфы"
	}	
})();