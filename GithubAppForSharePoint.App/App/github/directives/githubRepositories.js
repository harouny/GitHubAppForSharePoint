(function (define) {
    "use strict";

    define([
        "github/github",
        "github/directives/githubRepositories.ctrl"
    ],
    function (githubModule) {
        githubModule.directive("githubRepositories",
            [function () {
                return {
                    restrict: 'AE',
                    controller: 'githubRepositories.ctrl',
                    scope: {
                        githubUserName: "=",
                        mode: "@"
                    },
                    templateUrl: "../App/github/directives/githubRepositories.html"
                };
            }]);
    });

}(window.define));