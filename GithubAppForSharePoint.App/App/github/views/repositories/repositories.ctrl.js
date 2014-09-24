(function (define) {
    "use strict";

    define(["github/github",
        "github/services/usersService"
    ],
    function (github) {

        github.controller("repositories.ctrl",
        ["$scope", "usersService", "$log", "$location",
            function ($scope, usersService, $log, $location) {

                usersService.getCurrentGithubUser()
                    .success(function (githubUser) {
                        if (!githubUser) {
                            $log.debug("should be redirected to #/repo");
                        }
                });
            }
        ]);

    });

}(window.define));