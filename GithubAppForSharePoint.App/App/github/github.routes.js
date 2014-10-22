(function (define) {
    "use strict";
    define(['angular',
            'underscore',
            'github/github',
            'github/views/user/user.ctrl',
            'github/views/contributions/contributions.ctrl',
            'github/views/reports/reports.ctrl'
            ],
    function (angular, _) {

        //define routes
        function getRoutes() {
            return [
                {
                    url: '/all',
                    config: {
                        templateUrl: '../App/github/views/contributions/contributions.html',
                        title: 'All Contributions',
                        controller: 'contributions.ctrl',
                        showInQuicklaunch: true,
                        isDefault : true
                    }
                },
                {
                    url: '/user',
                    config: {
                        templateUrl: '../App/github/views/user/user.html',
                        controller: 'user.ctrl',
                        title: 'My Contributions',
                        showInQuicklaunch: true
                    }
                },
                {
                    url: '/reports',
                    config: {
                        templateUrl: '../App/github/views/reports/reports.html',
                        controller: 'reports.ctrl',
                        title: 'Reports',
                        showInQuicklaunch: true
                    }
                }

            ];
        }

        //configure app routes
        var github = angular.module("github");
        var routes = getRoutes();

        github.constant("appRoutes", routes);
        github.constant("appDefaultRoute", _.find(routes, function(route) {
            return route.config.isDefault === true;
        }).url);

        github.config(['$routeProvider', 'appRoutes', 'appDefaultRoute',
            function ($routeProvider, appRoutes, appDefaultRoute) {
                appRoutes.forEach(function (route) {
                    $routeProvider.when(route.url, route.config);
                });
                $routeProvider.otherwise
                (
                    { redirectTo: appDefaultRoute }
                );
            }
        ]);

        //require $route instance to handle default route
        github.run(['$route', function () {
        }]);

    });
}(window.define));