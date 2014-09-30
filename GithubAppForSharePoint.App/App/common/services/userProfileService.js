(function (define) {
    "use strict";

    define(["common/common",
            "common/services/notificationService"
            ],
        function (common) {
            common.factory("userProfileService",
                ["notificationService", "$http", "$q",
                function service(notificationService, $http, $q) {

                    var resource = '../_api/SP.UserProfiles.PeopleManager/GetMyProperties?$select=PictureUrl,AccountName,Email,DisplayName';
                    service.userProfile = null;

                    service.initialize = function () {
                        if (service.userProfile) {
                            return $q.when(service.userProfile);
                        }
                        return $http.get(resource)
                            .then(function(response) {
                                service.userProfile = response.data.d;
                            },
                            function (error) {
                                notificationService.error("Error", "Error while loading current user profile.");
                                throw error;
                            });
                    };

                    return service;
                }]);
        });

}(window.define));
