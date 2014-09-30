(function (define) {
    "use strict";

    define(["github/github",
            "common/services/userProfileService",
            "common/services/notificationService",
            "common/services/loadingIndicatorService"
            ],

        function (github) {
            github.factory("usersService",
                ["userProfileService", "$http", "notificationService", "spContext", "loadingIndicatorService", "$q",
                function service(userProfileService, $http, notificationService, spContext, loadingIndicatorService, $q) {

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
                                    '$select': 'AccountName,GithubUserName',
                                    '$filter': 'AccountName eq \'' + accountName + '\''
                                }
                            })
                            .then(function(response) {
                                if (response.data.d.results && response.data.d.results.length == 1) {
                                    service.currentUser = response.data.d.results[0];
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
                                var user = {
                                    AccountName: userProfileService.userProfile.AccountName,
                                    GithubUserName : githubUserName
                                };
                                return $http.post(usersListResource, user,
                                {
                                    headers: {
                                        'X-RequestDigest': spContext.securityValidation,
                                    }
                                }).then(function(response) {
                                    service.currentUser = response.data.d;
                                    notificationService.success("Saved", "your github details was successfully saved.");
                                }, function() {
                                    notificationService.success("Error", "sorry there was an error while saving your github user name.");
                                });
                        }, function() {
                            notificationService.error("Error", "Error while loading current user profile.");
                        })
                        .finally(function () {
                            loadingIndicatorService.stopLoading();
                        });
                    }

                    return service;

                }]);
        });

}(window.define));
