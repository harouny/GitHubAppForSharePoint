(function (define) {
    "use strict";

    define(["common/common",
            "common/models/userProfile",
            "common/resources/userProfile"],
        function (common, userProfileModel) {
            common.factory("userProfileService",
                ["userProfile", "$q",
                function (userProfile, $q) {

                    function getCurrentUserDetails() {
                        var deferred = $q.defer();
                        userProfile.get({},
                            function (data) {
                                var user = new userProfileModel();
                                user.AccountName = data.d.AccountName;
                                user.DisplayName = data.d.DisplayName;
                                user.Email = data.d.Email;
                                deferred.resolve(user);
                            },
                            function (error) {
                                deferred.reject(error);
                            }
                        );
                        return deferred.promise;
                    }

                    return {
                        getCurrentUserDetails: getCurrentUserDetails
                    };

                }]);
        });

}(window.define));
