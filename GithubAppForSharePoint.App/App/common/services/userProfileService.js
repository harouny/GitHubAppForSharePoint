(function (define) {
    "use strict";

    define(["common/common",
            "common/models/userProfile",
            "common/services/notificationService"
            ],
        function (common, userProfileModel) {
            common.factory("userProfileService",
                ["notificationService", "$http",
                function service(notificationService, $http) {

                    var resource = '../_api/SP.UserProfiles.PeopleManager/GetMyProperties?$select=PictureUrl,AccountName,Email,DisplayName';
                    service.userProfile = null;

                    service.initialize = function () {
                        return $http.get(resource)
                            .then(function(response) {
                                var profile = new userProfileModel();
                                profile.AccountName = response.data.d.AccountName;
                                profile.DisplayName = response.data.d.DisplayName;
                                profile.Email = response.data.d.Email;
                                service.userProfile = profile;
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
