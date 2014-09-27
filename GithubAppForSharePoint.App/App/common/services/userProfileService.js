(function (define) {
    "use strict";

    define(["common/common",
            "common/models/userProfile",
            "common/services/notificationService"
            ],
        function (common, userProfileModel) {
            common.factory("userProfileService",
                ["notificationService", "$http",
                function(notificationService, $http) {
                    var self = this;
                    var resource = '../_api/SP.UserProfiles.PeopleManager/GetMyProperties?$select=PictureUrl,AccountName,Email,DisplayName';
                    self.userProfile = { };
                    self.initialize = function () {
                        return $http.get(resource)
                        .success(function (data) {
                            self.userProfile = new userProfileModel();
                            self.userProfile.AccountName = data.d.AccountName;
                            self.userProfile.DisplayName = data.d.DisplayName;
                            self.userProfile.Email = data.d.Email;
                        })
                        .error(function () {
                            notificationService.error("Error", "Error while loading current user profile.");
                        });
                    };
                    return self;
                }]);
        });

}(window.define));
