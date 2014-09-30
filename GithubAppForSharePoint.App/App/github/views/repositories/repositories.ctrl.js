(function (define) {
    "use strict";

    define(["github/github",
        "github/services/usersService"
    ],
    function (github) {

        github.controller("repositories.ctrl",
        ["$scope", "usersService", "$log", "$location",
            function ($scope, usersService, $log, $location) {

                $scope.add = function() {
                };
            }
        ]);

    });

}(window.define));