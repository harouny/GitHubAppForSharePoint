(function (define) {
    "use strict";

    define(["angular",
            "github/github",
            "github/models/userItemModel",
            "common/services/userProfileService",
            "common/services/notificationService",
            "common/services/loadingIndicatorService"
            ],

        function (angular, github, userItemModel) {
            github.factory("usersService",
                ["userProfileService", "$http", "notificationService", "spContext", "loadingIndicatorService", "$q", "$rootScope",
                function service(userProfileService, $http, notificationService, spContext, loadingIndicatorService, $q, $rootScope) {

                    var usersListResource = '../_api/web/lists/getbytitle(\'Users\')/Items';
                    service.currentUser = null;

                    service.initialize = function () {
                        if (service.currentUser) {
                            return $q.when(service.currentUser);
                        }
                        loadingIndicatorService.startLoading();
                        return userProfileService.initialize()
                            .then(function () {
                                return getGithubUserByAccountName(userProfileService.userProfile.AccountName);
                            },
                            function (error) {
                                notificationService.error("Error", "Error while loading current user profile.");
                                throw Error(error);
                            })
                            .finally(function () {
                                loadingIndicatorService.stopLoading();
                            });
                    }

                    function getGithubUserByAccountName(accountName)
                    {
                        return $http.get(usersListResource,
                            {
                                params:
                                {
                                    '$select': 'AccountName,GithubUserName,Id',
                                    '$filter': 'AccountName eq \'' + accountName + '\''
                                }
                            })
                            .then(function(response) {
                                if (response.data.d.results && response.data.d.results.length == 1) {
                                    service.currentUser = new userItemModel(response.data.d.results[0]);
                                    notifyCurrentUserChanged();
                                    return service.currentUser;
                                }
                                return null;
                            },
                            function (error) {
                                notificationService.error("Error", "Error while loading current user github details.");
                                throw Error(error);
                            });
                    }


                    service.saveGithubUser = function (githubUserName) {
                        loadingIndicatorService.startLoading();
                        return userProfileService.initialize()
                           .then(function () {
                               if (!service.currentUser) {
                                   return addNewUserItem(githubUserName);
                               } else {
                                   return updateCurrentUserItem(githubUserName);
                               }
                               
                        }, function(error) {
                                notificationService.error("Error", "Error while loading current user profile.");
                                throw error;
                            })
                        .finally(function () {
                            loadingIndicatorService.stopLoading();
                        });
                    }


                    function addNewUserItem(githubUserName) {
                        var user = {
                            AccountName: userProfileService.userProfile.AccountName,
                            GithubUserName: githubUserName
                        };
                        return $http.post(usersListResource, user,
                        {
                            headers: {
                                'X-RequestDigest': spContext.securityValidation,
                            }
                        }).then(function (response) {
                            service.currentUser = new userItemModel(response.data.d);
                            notifyCurrentUserChanged();
                            notificationService.success("Saved", "your github details was successfully saved.");
                        }, function (error) {
                            notificationService.error("Error", "sorry there was an error while saving your github user name.");
                            throw error;
                        });
                    }


                    function updateCurrentUserItem(githubUserName) {
                        var updatedItem = angular.copy(service.currentUser);
                        updatedItem.GithubUserName = githubUserName;
                        delete updatedItem.__metadata;
                        return $http.post(service.currentUser.__metadata.uri, updatedItem,
                        {
                            headers: {
                                'X-RequestDigest': spContext.securityValidation,
                                'X-HTTP-Method': 'MERGE',
                                'If-Match': service.currentUser.__metadata.etag
                            }
                        }).then(function () {
                            service.currentUser = null;
                            return  service.initialize().then(function() {
                                notificationService.success("Saved", "your github details was successfully updated.");
                                return service.currentUser;
                            }, function (error) {
                                notificationService.success("Error", "github details was updated but error ocurred while refreshing page.");
                                throw error;
                            });
                        }, function (error) {
                            notificationService.error("Error", "sorry there was an error while updating your github user name.");
                            throw error;
                        });
                    }


                    function notifyCurrentUserChanged() {
                        $rootScope.$broadcast("currentUserDetailsChanged", service.currentUser);
                    }


                    return service;

                }]);
        });

}(window.define));
