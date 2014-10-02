(function (define) {
    "use strict";

    define(["github/github",
            "github/models/repositoryItemModel",
            "common/services/notificationService",
            "common/services/loadingIndicatorService",
            "github/services/usersService",
            "common/services/spContext"
            ],

        function (github, repositoryItemModel) {
            github.factory("repositoriesService",
                ["$http", "notificationService", "loadingIndicatorService", "usersService", "spContext",
                function service($http, notificationService, loadingIndicatorService, usersService, spContext) {

                    var repositoriesListResource = '../_api/web/lists/getbytitle(\'Repositories\')';
                    var repositoriesListItemsResource = '../_api/web/lists/getbytitle(\'Repositories\')/Items';

                    service.repositoriesListItems = null;

                    service.initialize = function () {
                        loadingIndicatorService.startLoading();
                        return $http.get(repositoriesListResource, {
                            params: {
                                '$select': 'RepositoryName,Url,RepositoryDescription,AccountName,RepositoryId'
                            }
                        }).then(function(resource) {
                            return resource.data;
                        }, function(error) {
                            throw error;
                        }).finally(function() {
                            loadingIndicatorService.stopLoading();
                        });
                    }

                    service.addRepository = function(repository) {
                        loadingIndicatorService.startLoading();
                        return usersService.initialize()
                            .then(function() {
                                var item = new repositoryItemModel();
                                delete item.__metadata;
                                delete item.AccountName;
                                item.AccountNameId = usersService.currentUser.Id;
                                item.RepositoryName = repository.name;
                                item.Url = repository.html_url;
                                item.RepositoryDescription = repository.description;
                                item.RepositoryId = repository.id.toString();
                                return $http.post(repositoriesListItemsResource, item,
                                {
                                    headers: {
                                        'X-RequestDigest': spContext.securityValidation,
                                    }
                                }).then(function (response) {
                                    notificationService.success("Saved", "your repository have been added to contributions.");
                                    return response.data;
                                }, function(error) {
                                    notificationService.error("Error", "Error while adding repository.");
                                    throw error;
                                });
                        }, function(error) {
                            notificationService.error("Error", "Error while loading current user profile.");
                            throw error;
                        }).finally(function () {
                            loadingIndicatorService.stopLoading();
                        });
                    }

                    return service;
                }]);
        });

}(window.define));
