(function (define) {
    "use strict";

    define(['angular',
            'angular-route',
            'angular-sanitize',
            'common/common',
            'common/spContext',
            'layout/layout',
            'layout/chromeControl'],

        function (angular) {
            var github = angular.module('github', ["common", "layout", "ngRoute", "ngSanitize"]);

            //initialize sharepoint context
            github.run(['spContext', function () {
            }]);

            return github;
        });


}(window.define, window.require));