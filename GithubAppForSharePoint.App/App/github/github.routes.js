(function (define) {
    "use strict";
    define(['angular',
            'github/github',
            'github/views/repositories/repositories.ctrl',
            'github/views/user/user.ctrl'
            ],
    function (angular) {

        //define routes
        function getRoutes() {
            return [
                {
                    url: '/repos',
                    config: {
                        templateUrl: '../App/github/views/repositories/repositories.html',
                        title: 'Repositories',
                        controller: 'repositories.ctrl'
                    }
                },
                {
                    url: '/repo',
                    config: {
                        templateUrl: '../App/github/views/repository/repository.html',
                        title: 'Repository Details'
                    }
                },
                {
                    url: '/user',
                    config: {
                        templateUrl: '../App/github/views/user/user.html',
                        controller: 'user.ctrl',
                        title: 'User Details'
                    }
                },
                {
                    url: '/reports',
                    config: {
                        templateUrl: '../App/github/views/reports/reports.html',
                        title: 'Reports'
                    }
                }
            ];
        }

        //configure app routes
        var github = angular.module("github");
        github.config(['$routeProvider',
            function ($routeProvider) {
                var routes = getRoutes();
                routes.forEach(function (route) {
                    $routeProvider.when(route.url, route.config);
                });
                $routeProvider.otherwise
                (
                    { redirectTo: '/repos' }
                );
            }
        ]);

        //require $route instance to handle default route
        github.run(['$route', function () {
        }]);

    });
}(window.define));