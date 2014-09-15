(function (define) {
    "use strict";

    define(['angular',
            'angular-route',
            'common/common',
            'common/chromeDirective'],

        function (angular) {
            var githubModule = angular.module('github', ["common"]);
            githubModule.config(["$logProvider", function ($logProvider) {
                if ($logProvider.debugEnabled) {
                    $logProvider.debugEnabled(true);
                }
            }]);
            return githubModule;
        });

}(window.define));