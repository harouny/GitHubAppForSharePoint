(function (define) {
    "use strict";

    define(["github/github",
            "github/models/userListItem",
            "common/services/userProfileService",
            "github/resources/usersList"],

        function (github, userListItem) {
            github.factory("usersService",
                ["usersList", "$q", "userProfileService",
                function (usersList, $q, userProfileService) {

                    function getGithubUserByAccountName(accountName) {
                        var deferred = $q.defer();
                        usersList.get(
                            {
                                '$filter': 'AccountName eq \'' + accountName + '\''
                            },
                            function (data) {
                                if (data.d.results && data.d.results.length == 1) {
                                    var userItem = data.d.results[0];
                                    var user = new userListItem();
                                    user.AccountName = userItem.AccountName;
                                    user.GithubUserName = userItem.GithubUserName;
                                    deferred.resolve(user);
                                } else {
                                    deferred.resolve();
                                }
                            },
                            function(error) {
                                deferred.reject(error);
                            }
                        );
                        return deferred.promise;
                    }


                    function getCurrentGithubUser() {
                        return userProfileService.getCurrentUserDetails()
                            .then(function (currentUser) {
                                return getGithubUserByAccountName(currentUser.AccountName);
                            });
                    }


                    function saveGithubUser(githubUserName) {
                        var deferred = $q.defer();
                        userProfileService.getCurrentUserDetails()
                            .then(function (currentUser) {
                                var user = new userListItem();
                                user.AccountName = currentUser.AccountName;
                                user.GithubUserName = githubUserName;
                                usersList.post(user,
                                    function () {
                                        deferred.resolve();
                                    },
                                    function (error) {
                                        deferred.reject(error);
                                    }
                                );
                            }, function(error) {
                                deferred.reject(error);
                            });
                        return deferred.promise;
                    }

                    return {
                        getCurrentGithubUser: getCurrentGithubUser,
                        saveGithubUser: saveGithubUser
                    };

                }]);
        });

}(window.define));
