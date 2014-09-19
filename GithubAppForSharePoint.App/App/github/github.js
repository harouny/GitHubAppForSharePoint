(function (define) {
    "use strict";

    define(['angular',
            'github/github.routes',
            'angular-route',
            'angular-sanitize',
            'common/common',
            'layout/chromeControl'],

        function (angular, routes) {

            //define app
            var github = angular.module('github', ["common", "layout", "ngRoute", "ngSanitize"]);

            //configure app routes
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

            github.run(['$route', function () {
            }]);

            return github;
        });


}(window.define, window.require));