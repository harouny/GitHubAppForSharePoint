(function (define) {
    "use strict";

    define(["github/github",
        "github/services/usersService",
        "common/services/notificationService",
        "github/directives/githubRepositories"
    ],
    function (github) {

        github.controller("user.ctrl",
        ["$scope", "usersService", "$log", "$location", "notificationService",
        function ($scope, usersService, $log, $location, notificationService) {

            $scope.saveGithubUser = function () {
                usersService.saveGithubUser($scope.githubUserName)
                    .then(updateUi, updateUi);
            };

            function updateUi() {
                if (usersService.currentUser) {
                    $scope.isUserSaved = true;
                    $scope.githubUserName = usersService.currentUser.GithubUserName;
                    $scope.disabled = true;
                } else {
                    delete $scope.disabled;
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