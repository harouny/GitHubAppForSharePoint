(function (define) {
    "use strict";

    define(['angular',
            'angular-cookies',
            'angular-resource'],
        function (angular) {
            return angular.module('common', ['ngResource', 'ngCookies']);
    });

}(window.define));