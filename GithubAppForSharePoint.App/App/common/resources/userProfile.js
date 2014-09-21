(function (define) {
    "use strict";

    define(["common/common"],
        function (common) {
            common.factory("userProfile",
                ["$resource", function ($resource) {
                    return $resource('../_api/SP.UserProfiles.PeopleManager/GetMyProperties?$select=PictureUrl,AccountName,Email,DisplayName');
                }]);
        });

}(window.define));
