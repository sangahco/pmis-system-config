(function(){
    "use strict";

    var app = angular.module("seminar", ['ngRoute', 'props']);

    app.config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/', {
                templateUrl: 'props.template.html'
            }).
            when('/props', {
                templateUrl: 'props.template.html',
                controller: function(){
                    this.menu = "1";
                }
            }).
            when('/sysprops', {
                templateUrl: 'sysprops.template.html',
                controller: function(){
                    this.menu = "2";
                }
            }).
            when('/sysvars', {
                templateUrl: 'sysvars.template.html',
                controller: function(){
                    this.menu = "3";
                }
            }).
            otherwise('/');
        }
    ]);
    
    app.controller("AppController", ['$log', '$rootScope', '$location',
    function($log, $rootScope, $location){
        $log.log("AppController...");

        $rootScope.$on('$routeChangeSuccess', function(){
            $rootScope.error = null;
        });

        this.getClass = function (path) {
            return ($location.path().substr(0, path.length) === path) ? 'active' : '';
        };
        
    }]);

})();