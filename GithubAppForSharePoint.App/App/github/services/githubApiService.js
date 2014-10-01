(function (define) {
    "use strict";

    define(["github/github",
            "common/services/notificationService",
            "common/services/loadingIndicatorService",
            "github/services/usersService"
    ],

        function (github) {
            github.factory("githubApiService",
                ["$http", "notificationService", "loadingIndicatorService", "usersService", "$q", "$resource",
                function service($http, notificationService, loadingIndicatorService, usersService, $q, $resource) {

                    service.currentUserGitubRepositories = null;
                    var reposByuserResource = $resource("//api.github.com/users/:user/repos");

                    service.initialize = function () {
                        if (service.currentUserGitubRepositories) {
                            return $q.when(service.currentUserGitubRepositories);
                        }
                        loadingIndicatorService.startLoading();
                        return usersService.initialize()
                            .then(function() {
                                if (usersService.currentUser) {
                                    return reposByuserResource.query({ user: usersService.currentUser.GithubUserName })
                                        .$promise
                                        .then(function (repositories) {
                                            service.currentUserGitubRepositories = repositories;
                                            return service.currentUserGitubRepositories;
                                    }, function (error) {
                                            notificationService.error("Error", "Error while loading user repositories.");
                                            throw Error(error);
                                        });
                                } else {
                                    return null;
                                }
                            }, function(error) {
                                notificationService.error("Error", "Error while loading current user github details.");
                                throw Error(error);
                            })
                            .finally(function() {
                                loadingIndicatorService.stopLoading();
                            });
                    }

                    return service;
                }]);
        });

}(window.define));
