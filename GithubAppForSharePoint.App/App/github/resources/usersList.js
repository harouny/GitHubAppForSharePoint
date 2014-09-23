(function (define) {
    "use strict";

    define(["github/github"],
        function (common) {
            common.factory("usersList",
                ["$resource", function ($resource) {
                    return $resource('../_api/web/lists/getbytitle(\'Users\')/Items', {}, {
                        get: {
                            params: {
                                '$select': 'Title,GithubUserName'
                            }
                        }
                    });
                }]);
        });

}(window.define));
