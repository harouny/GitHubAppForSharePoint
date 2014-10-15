(function (define) {
    "use strict";

    define([
        "github/github",
        "underscore",
        "github/services/githubApiService",
        "github/services/repositoriesService"
    ],
    function (githubModule, _) {

        githubModule.controller("githubRepositories.ctrl",
            ["$scope", "githubApiService", "$rootScope", "repositoriesService",
            function ($scope, githubApiService, $rootScope, repositoriesService) {

                $scope.addRepository = addRepository;
                $rootScope.$on("currentUserDetailsChanged", init);

                function init() {
                    repositoriesService.initialize().then(function() {
                        githubApiService.initialize().then(updateUi);
                    });
                }

                function updateUi() {
                    $scope.repositories = githubApiService.repos;
                    _.each($scope.repositories, function(repository) {
                        repository.added = _.filter(repositoriesService.repositoriesListItems, function(repositoryItem) {
                            return repository.id === Number(repositoryItem.RepositoryId);
                        }).length > 0;
                    });
                }

                function addRepository(repository) {
                    repositoriesService.addRepository(repository).then(function() {
                         repository.added = true;
                    });
                }
            }
        ]);
    });

}(window.define));