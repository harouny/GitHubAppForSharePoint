(function (define) {
    "use strict";

    define([
        "github/github",
        "github/services/githubApiService",
        "github/services/repositoriesService"
    ],
    function (githubModule) {

        githubModule.controller("githubRepositories.ctrl",
            ["$scope", "githubApiService", "$rootScope", "repositoriesService",
            function ($scope, githubApiService, $rootScope, repositoriesService) {

                $scope.addRepository = addRepository;

                function init() {
                    repositoriesService.initialize().then(function() {
                        if ($scope.mode === "user") {
                            loadCurrentUserRepositories();
                            $rootScope.$on("currentUserDetailsChanged", loadCurrentUserRepositories);
                        }
                    });
                }

                function loadCurrentUserRepositories() {
                    githubApiService.initialize().then(function () {
                        $scope.repositories = githubApiService.currentUserGitubRepositories;
                    });
                }

                function addRepository(repository) {
                    repositoriesService.addRepository(repository);
                }

                init();

            }
        ]);
    });

}(window.define));