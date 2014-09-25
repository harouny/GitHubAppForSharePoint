﻿(function (define) {
    "use strict";
    define(['angular',
            'underscore',
            'github/github',
            'github/views/repositories/repositories.ctrl',
            'github/views/user/user.ctrl'
            ],
    function (angular, _) {

        //define routes
        function getRoutes() {
            return [
                {
                    url: '/all',
                    config: {
                        id: 'allRepos',
                        templateUrl: '../App/github/views/allRepositories/allRepositories.html',
                        title: 'All Repositories',
                        showInQuicklaunch: true,
                        isDefault : true
                    }
                },
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
        var routes = getRoutes();
        github.constant("appRoutes", routes);
        github.constant("appDefaultRoute", _.find(routes, function(route) {
            return route.config.isDefault === true;
        }).url);
        github.config(['$routeProvider', 'appRoutes',
            function ($routeProvider, appRoutes) {
                appRoutes.forEach(function (route) {
                    $routeProvider.when(route.url, route.config);
                });
                $routeProvider.otherwise
                (
                    { redirectTo: '/all' }
                );
            }
        ]);

        //require $route instance to handle default route
        github.run(['$route', function () {
        }]);

    });
}(window.define));