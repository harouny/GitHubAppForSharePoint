(function (define) {
    "use strict";

    define([
        "angular",
        "github/github",
        "github/services/usersService"
    ],
    function (angular, github) {

        github.controller("repos.ctrl",
        ["$scope", "usersService",
            function ($scope, usersService) {

                usersService.getCurrentGithubUser().then(function (githubUser) {
                    
                });
            }
        ]);

    });

}(window.define));