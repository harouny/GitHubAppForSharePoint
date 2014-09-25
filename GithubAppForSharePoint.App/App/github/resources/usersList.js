(function (define) {
    "use strict";

    define(["github/github",
            "common/services/spContext"],
        function (common) {
            common.factory("usersList",
                ["$resource", "spContext",
                function ($resource, spContext) {
                    return $resource('../_api/web/lists/getbytitle(\'Users\')/Items', {}, {
                        get: {
                            method: 'GET',
                            params: {
                                '$select': 'AccountName,GithubUserName'
                            }
                        },
                        post: {
                                method: 'POST',
                                headers: {
                                    'X-RequestDigest': spContext.securityValidation,
                                },
                            }
                    });
                }]);
        });

}(window.define));
