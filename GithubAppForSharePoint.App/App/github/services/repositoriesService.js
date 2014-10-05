(function (define) {
    "use strict";

    define(["github/github",
            "github/models/repositoryItemModel",
            "underscore",
            "common/services/notificationService",
            "common/services/loadingIndicatorService",
            "github/services/usersService",
            "common/services/spContext"
            ],

        function (github, repositoryItemModel, _) {
            github.factory("repositoriesService",
                ["$http", "notificationService", "loadingIndicatorService", "usersService", "spContext", "userProfileService", "$q",
                function service($http, notificationService, loadingIndicatorService, usersService, spContext, userProfileService, $q) {

                    var repositoriesListItemsResource = '../_api/web/lists/getbytitle(\'Repositories\')/Items';

                    service.repositoriesListItems = null;

                    service.initialize = function () {
                        if (service.repositoriesListItems) {
                            return $q.when(service.repositoriesListItems);
                        }
                        loadingIndicatorService.startLoading();
                        return $http.get(repositoriesListItemsResource, {
                            params: {
                                '$select': 'RepositoryName,Url,RepositoryDescription,RepositoryId,AddedBy,AccountNameId'
                            }
                        }).then(function(resource) {
                            service.repositoriesListItems = new Array();
                            _.each(resource.data.d.results, function (item) {
                                service.repositoriesListItems.push(new repositoryItemModel(item));
                            });
                            return service.repositoriesListItems;
                        }, function(error) {
                            notificationService.error("Error", "Error while loading contributions.");
                            throw error;
                        }).finally(function() {
                            loadingIndicatorService.stopLoading();
                        });
                    }

                    service.addRepository = function(repository) {
                        if (_.filter(service.repositoriesListItems, function (repositoryItem) {
                            return repository.id === Number(repositoryItem.RepositoryId);
                        }).length > 0) {
                            notificationService.error("Error", "repository already added to contributions.");
                            return $q.reject();
                        }
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
                                item.AddedBy = userProfileService.userProfile.DisplayName;
                                return $http.post(repositoriesListItemsResource, item,
                                {
                                    headers: {
                                        'X-RequestDigest': spContext.securityValidation,
                                    }
                                }).then(function (response) {
                                    notificationService.success("Saved", "your repository have been added to contributions.");
                                    var newItem = new repositoryItemModel(response.data.d);
                                    service.repositoriesListItems.push(newItem);
                                    return newItem;
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
