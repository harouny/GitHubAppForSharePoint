(function (define) {
    "use strict";

    define(["github/github",
        "github/services/usersService",
        "common/services/loadingIndicatorService",
        "common/services/notificationService"
    ],
    function (github) {

        github.controller("repositories.ctrl",
        ["$scope", "usersService", "$log", "$location", "loadingIndicatorService", "notificationService",
            function ($scope, usersService, $log, $location, loadingIndicator, notificationService) {

                loadingIndicator.startLoading();
                usersService.getCurrentGithubUser()
                    .then(function (githubUser) {
                        if (!githubUser) {
                            //$location.path("/user");
                        }
                }).finally(function() {
                    loadingIndicator.stopLoading();
                });

                $scope.add = function() {
                    notificationService.success("Repository Added", "NLog AzureTableStorage was successfully added");
                };
            }
        ]);

    });

}(window.define));