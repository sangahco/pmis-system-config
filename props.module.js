(function(){
	"use strict";
	
	var app = angular.module('props', [])
	.factory('properties', ['$http', function($http){
		return {
			load: function(){
				return $http({
					url: "/Test/Sys/Props.action",
					method: 'POST',
					responseType: "json"
				});
			}
		};
	}])
	.controller('PropertiesController', ['$scope', '$log', 'properties', 
	function($scope, $log, properties){
		var self = this;
		self.props = [];
		self.sysvars = [];
		self.sysprops = [];
		
		properties.load().then(function(response){
			//console.log(response);
			var data = response.data.props;
			for(var key in data){
				self.props.push({ "key" : key, "value": data[key] });
			}
			
			data = response.data.sysvars;
			for(var key in data){
				self.sysvars.push({ "key" : key, "value": data[key] });
			}
			
			data = response.data.sysprops;
			for(var key in data){
				self.sysprops.push({ "key" : key, "value": data[key] });
			}
			
			//console.log(self.props);
		});

	}]);

	
})();