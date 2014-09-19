(function (define) {
    "use strict";
    define(['angular',
            'github/github',
            'github/repos/repos.ctrl'
            ],
    function (angular) {

        //define routes
        function getRoutes() {
            return [
                {
                    url: '/repos',
                    config: {
                        templateUrl: '../App/github/repos/repos.html',
                        title: 'Repositories',
                        controller: 'repos.ctrl'
                    }
                },
                {
                    url: '/repo',
                    config: {
                        templateUrl: '../App/github/repos/repo.html',
                        title: 'Repository Details'
                    }
                },
                {
                    url: '/user',
                    config: {
                        templateUrl: '../App/github/user/user.html',
                        title: 'User Details'
                    }
                },
                {
                    url: '/reports',
                    config: {
                        templateUrl: '../App/github/reports/reports.html',
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

        //fix to allow using ng-view from a template loaded using ng-include
        github.run(['$route', function () {
        }]);

    });
}(window.define));