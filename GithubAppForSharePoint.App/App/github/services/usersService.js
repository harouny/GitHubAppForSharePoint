(function (define) {
    "use strict";

    define(["github/github",
            "common/services/userProfileService",
            "github/resources/usersList"],
        function (common) {
            common.factory("usersService",
                ["usersList", "$q", "userProfileService",
                function (usersList, $q, userProfileService) {

                    function getGithubUserByUserName(username) {
                        var deferred = $q.defer();
                        usersList.get(
                            {
                                '$filter': 'Title eq \''+ username +'\''
                            },
                            function (data) {
                                if (data.d.results && data.d.results.length == 1) {
                                    deferred.resolve(data.d.results[0]);
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
                                return getGithubUserByUserName(currentUser.accountName);
                            });
                    }

                    function saveGithubUser(githubUserName) {
                        var deferred = $q.defer();
                        userProfileService.getCurrentUserDetails()
                            .then(function (currentUser) {
                                usersList.post({},
                                    function (data) {
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
                        getCurrentGithubUser : getCurrentGithubUser
                    };

                }]);
        });

}(window.define));
