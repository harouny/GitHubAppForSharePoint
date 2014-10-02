(function (define) {
    "use strict";

    define(["github/github",
            "github/directives/githubContributions"
            ],
        function (github) {

        github.controller("allRepositories.ctrl",
        ["$scope",
        function ($scope) {
            function init() {
            }
            init();
        }]);
    });

}(window.define));