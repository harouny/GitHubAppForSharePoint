(function (define) {
    "use strict";

    define(['angular',
            'github/github.routes',
            'angular-route',
            'angular-sanitize',
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
                    $routeProvider.otherwise
                    (
                        { redirectTo: '/repos' }
                    );
                }
            ]);
            return github;
        });


}(window.define, window.require));