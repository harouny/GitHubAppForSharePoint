(function (define) {
    "use strict";

    define(["github/github"],
        function (common) {
            common.factory("repositoriesList",
                ["$resource", function ($resource) {
                    return $resource('../_api/web/lists/getbytitle(\'Repositories\')', {}, {
                        get: {
                            params: {
                                '$select': 'Title,Url,RepositoryDescription,UserName'
                            }
                        }
                    });
                }]);
        });

}(window.define));
