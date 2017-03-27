



(function() {
	var app = angular.module ('store',[]);

	app.controller("StoreController", function(){
		this.products = prods;
	});
	var prods = [{
			name: "1-Учет сейфов",
			price: 4.99,
			description: "Учитываем сейфы",		
			canPurchase: false
		},
		{
			name: "2-Учет сейфов",
			price: 24.99,
			description: "Учитываем сейфы",		
			canPurchase: true

		},
		{
			name: "3-Учет сейфов",
			price: 34.99,
			description: "Учитываем сейфы",		
			canPurchase: false
		}]
})();