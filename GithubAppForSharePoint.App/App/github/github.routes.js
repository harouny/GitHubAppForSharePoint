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
                        id: 'repos',
                        templateUrl: '../App/github/views/repositories/repositories.html',
                        title: 'My Repositories',
                        controller: 'repositories.ctrl',
                        showInQuicklaunch : true
                    }
                },
                {
                    url: '/all',
                    config: {
                        id: 'allRepos',
                        templateUrl: '../App/github/views/allRepositories/allRepositories.html',
                        title: 'All Repositories',
                        showInQuicklaunch: true
                    }
                },
                {
                    url: '/repo',
                    config: {
                        id: 'repo',
                        templateUrl: '../App/github/views/repository/repository.html',
                        title: 'Repository Details',
                        showInQuicklaunch: false
                    }
                },
                {
                    url: '/user',
                    config: {
                        id: 'user',
                        templateUrl: '../App/github/views/user/user.html',
                        controller: 'user.ctrl',
                        title: 'My details',
                        showInQuicklaunch: true
                    }
                }
            ];
        }

        //configure app routes
        var github = angular.module("github");
        github.constant("appRoutes", getRoutes());
        github.config(['$routeProvider', 'appRoutes',
            function ($routeProvider, appRoutes) {
                appRoutes.forEach(function (route) {
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