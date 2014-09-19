(function (define) {
    "use strict";

    define(['angular',
            'angular-route',
            'angular-sanitize',
            'common/common',
            'layout/layout',
            'layout/chromeControl'],

        function (angular) {
            return angular.module('github', ["common", "layout", "ngRoute", "ngSanitize"]);
        });


}(window.define, window.require));