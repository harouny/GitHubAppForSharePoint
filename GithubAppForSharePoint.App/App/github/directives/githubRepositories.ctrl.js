(function (define) {
    "use strict";

    define([
        "github/github",
        "github/services/githubApiService"
    ],
    function (githubModule) {

        githubModule.controller("githubRepositories.ctrl",
            ["$scope", "githubApiService", "$rootScope",
            function ($scope, githubApiService, $rootScope) {

                function init() {
                    if ($scope.mode === "user") {
                        loadCurrentUserRepositories();
                        $rootScope.$on("currentUserDetailsChanged", loadCurrentUserRepositories);
                    }
                }

                function loadCurrentUserRepositories() {
                    githubApiService.initialize().then(function () {
                        $scope.repositories = githubApiService.currentUserGitubRepositories;
                    });
                }

                init();

            }
        ]);
    });

}(window.define));