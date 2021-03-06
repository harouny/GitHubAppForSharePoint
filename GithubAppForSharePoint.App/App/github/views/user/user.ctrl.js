﻿(function (define) {
    "use strict";

    define(["github/github",
        "github/services/usersService",
        "common/services/notificationService",
        "github/directives/githubRepositories"
    ],
    function (github) {

        github.controller("user.ctrl",
        ["$scope", "usersService",
        function ($scope, usersService) {

            $scope.saveGithubUser = function () {
                usersService.saveGithubUser($scope.githubUserName)
                    .then(updateUi, updateUi);
            };

            function updateUi() {
                if (usersService.currentUser) {
                    $scope.githubUserName = usersService.currentUser.GithubUserName;
                } 
            }

            function init() {
                    usersService.initialize()
                        .then(updateUi);
            }
            init();

        }]);
    });

}(window.define));