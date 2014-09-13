(function (define) {
    "use strict";

    define(['angular', 'angular-route'],
        function (angular){

            var githubModule = angular.module('githubModule', ["ngRoute"]);

            githubModule.config(['$routeProvider',
                function ($routeProvider) {
                    //configure routs here
                }]);

            return githubModule;
        });

}(window.define));