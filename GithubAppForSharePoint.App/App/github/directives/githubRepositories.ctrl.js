(function (define) {
    "use strict";

    define([
        "github/github"
    ],
    function (githubModule) {

        githubModule.controller("githubRepositories.ctrl",
            ["$scope",
            function ($scope) {
                function init() {

                }
                init();

                }
            ]);
    });

}(window.define));