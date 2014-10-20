(function (define) {
    "use strict";

    define(["github/github",
            "github/directives/githubContributions"
            ],
        function (github) {

        github.controller("contributions.ctrl",
        ["$scope",
        function ($scope) {
            function init() {
            }

            init();
        }]);
    });

}(window.define));