(function (define) {
    "use strict";

    define([
        "github/github",
        "github/directives/githubContributions.ctrl"
    ],
    function (githubModule) {
        githubModule.directive("githubContributions",
            [function () {
                return {
                    restrict: 'AE',
                    controller: 'githubContributions.ctrl',
                    scope: { },
                    templateUrl: "../App/github/directives/githubContributions.html"
                };
            }]);
    });

}(window.define));