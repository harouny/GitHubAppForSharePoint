(function (define) {
    "use strict";

    define([
        "github/github",
        "common/notificationService"
    ],
    function (github) {

        github.controller("repos.ctrl",
        ["$scope", "notificationService",
            function ($scope, notification) {
                notification.success("controller", "loaded successfully");
            }
        ]);

    });

}(window.define));