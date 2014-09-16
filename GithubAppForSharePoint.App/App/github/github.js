(function (define) {
    "use strict";

    define(['angular',
            'github/github.routes',
            'angular-route',
            'common/common',
            'common/chromeDirective'],

        function (angular, routes) {
            var github = angular.module('github', ["common", "ngRoute"]);
            //register app routes
            github.config(['$routeProvider',
                function ($routeProvider) {
                    routes.forEach(function (route) {
                        $routeProvider.when(route.url, route.config);
                    });
                }
            ]);
            return github;
        });


}(window.define, window.require));