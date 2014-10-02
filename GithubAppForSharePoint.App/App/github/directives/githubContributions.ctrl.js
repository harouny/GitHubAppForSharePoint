(function (define) {
    "use strict";

    define([
        "github/github",
        "github/services/repositoriesService"
    ],
    function (githubModule) {

        githubModule.controller("githubContributions.ctrl",
            ["$scope", "repositoriesService",
            function ($scope, repositoriesService) {

                function init() {
                    repositoriesService.initialize()
                        .then(updateUi);
                }

                function updateUi() {
                    $scope.contributions = repositoriesService.repositoriesListItems;
                }

                init();

            }
        ]);
    });

}(window.define));