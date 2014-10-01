(function (define) {
    "use strict";

    define([
        "github/github",
        "github/services/githubApiService"
    ],
    function (githubModule) {

        githubModule.controller("githubRepositories.ctrl",
            ["$scope", "githubApiService",
            function ($scope, githubApiService) {

                function init() {
                    githubApiService.initialize().then(function() {
                        $scope.repositories = githubApiService.currentUserGitubRepositories;
                    });
                }

                init();

            }
        ]);
    });

}(window.define));