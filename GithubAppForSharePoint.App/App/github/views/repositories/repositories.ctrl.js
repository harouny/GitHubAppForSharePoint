(function (define) {
    "use strict";

    define(["github/github",
        "github/services/usersService",
        "common/services/loadingIndicatorService"
    ],
    function (github) {

        github.controller("repositories.ctrl",
        ["$scope", "usersService", "$log", "$location", "loadingIndicatorService",
            function ($scope, usersService, $log, $location, loadingIndicator) {
                loadingIndicator.startLoading();
                usersService.getCurrentGithubUser()
                    .then(function (githubUser) {
                        if (!githubUser) {
                            //$location.path("/user");
                        }
                }).finally(function() {
                    loadingIndicator.stopLoading();
                });
            }
        ]);

    });

}(window.define));