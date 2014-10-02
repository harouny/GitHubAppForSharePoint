(function (define) {
    "use strict";

    define(["github/github",
            "common/services/notificationService",
            "common/services/loadingIndicatorService"
            ],

        function (github) {
            github.factory("usersService",
                ["$http", "notificationService", "loadingIndicatorService",
                function service($http, notificationService, loadingIndicatorService) {

                    var repositoriesListResource = '../_api/web/lists/getbytitle(\'Repositories\')';
                    service.repositoriesListItems = null;

                    service.initialize = function () {
                        loadingIndicatorService.startLoading();
                        return $http.get(repositoriesListResource, {
                            params: {
                                '$select': 'RepositoryName,Url,RepositoryDescription,AccountName,RepositoryId'
                            }
                        }).then(function(resource) {
                            return resource.data;
                        }, function(error) {
                            throw error;
                        }).finally(function() {
                            loadingIndicatorService.startLoading();
                        });
                    }

                    return service;
                }]);
        });

}(window.define));
