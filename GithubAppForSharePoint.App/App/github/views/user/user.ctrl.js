(function (define) {
    "use strict";

    define(["github/github",
        "github/services/usersService"
    ],
    function (github) {

        github.controller("user.ctrl",
        ["$scope", "usersService", "$log", "$location",
            function ($scope, usersService, $log, $location) {
                $log.debug("user controller is loaded");

                $scope.submit = function () {
                    
                };

            }
        ]);

    });

}(window.define));