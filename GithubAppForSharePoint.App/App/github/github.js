(function (define) {
    "use strict";

    define(['angular',
            'angular-route',
            'common/common',
            'common/chromeDirective'],
        function (angular) {
            var githubApp = angular.module('github', ["common", "ngRoute"]);

            //configure app routes
            githubApp.config(['$routeProvider',
                function($routeProvider) {
                    var routes = getAppRoutes();
                    routes.forEach(function (route) {
                        $routeProvider.when(route.url, route.config);
                    });
                    $routeProvider.otherwise({ redirectTo: '/repos' });
                }
            ]);

            function getAppRoutes() {
                return [
                    {
                        url: '/repos',
                        config: {
                            templateUrl: '../App/github/repos/repos.html',
                            title: 'Repositories'
                        }
                    },
                    {
                        url: '/repo',
                        config: {
                            templateUrl: '../App/github/repos/repo.html',
                            isHidden: true
                        }
                    },
                    {
                        url: '/user',
                        config: {
                            templateUrl: '../App/github/user/user.html',
                            title: 'User'
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


            return githubApp;
        });

}(window.define));