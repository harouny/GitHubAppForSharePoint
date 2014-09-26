(function (define) {
    "use strict";

    define(["github/github",
        "github/services/usersService",
        "common/services/notificationService",
        "common/services/loadingIndicatorService"
    ],
    function (github) {

        github.controller("user.ctrl",
        ["$scope", "usersService", "$log", "$location", "notificationService", "loadingIndicatorService",
        function ($scope, usersService, $log, $location, notificationService, loadingIndicatorService) {

            $scope.submit = function () {
                loadingIndicatorService.startLoading();
                usersService.saveGithubUser($scope.githubUserName)
                    .then(function() {
                        notificationService.success("Saved", "your github details was successfully saved.");
                        //$location.path("/repos");
                        init();
                    },
                    function () {
                            delete $scope.githubUserName;
                            notificationService.success("Error", "sorry there was an error while saving your github user name.");
                    }).finally(function () {
                        loadingIndicatorService.stopLoading();
                    });
            };

            function init() {
                loadingIndicatorService.startLoading();
                usersService.getCurrentGithubUser()
                    .then(function (user) {
                    if (user) {
                        $scope.githubUserName = user.GithubUserName;
                        $scope.disabled = true;
                    }
                }).finally(function () {
                        loadingIndicatorService.stopLoading();
                });
            }

            init();

        }]);
    });

}(window.define));