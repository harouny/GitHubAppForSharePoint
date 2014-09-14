(function (define) {
    "use strict";

    define(['angular',
            'angular-route',
            'common/commonModule',
            'common/chromeControlDirective'],

        function (angular) {
            var githubModule = angular.module('githubModule', ["commonModule"]);
            return githubModule;
        });

}(window.define));