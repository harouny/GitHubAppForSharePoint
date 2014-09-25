(function (define) {
    "use strict";

    define(['angular',
            'angular-route',
            'angular-sanitize',
            'common/common',
            'common/services/spContext',
            'layout/layout',
            'layout/layoutContents.ctrl'],

        function (angular) {
            var github = angular.module('github', ["common", "layout", "ngRoute", "ngSanitize"]);

            //initialize sharepoint context
            github.run(['spContext', function () {
            }]);

            //configure $http to use json
            github.run(['$http', function ($http) {
                $http.defaults.headers.common.Accept = 'application/json;odata=verbose;';
                $http.defaults.headers.common['Content-Type'] = 'application/json;odata=verbose;';
            }]);

            return github;
        });


}(window.define, window.require));