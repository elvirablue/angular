



(function() {
	var app = angular.module ('tabs',[]);

	app.controller("TabController", function(){
		this.tab = 1;

		this.setPanel = function(setTab){
			this.tab = setTab;
		}

		this.isSelected = function(setTab) {
			return this.tab === setTab;
		}
	});

	app.directive("prodItem", function() {
		
	})
	
})();