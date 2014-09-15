(function (define) {
    "use strict";

    define([
        "common/common",
        "common/chromeDirective.ctrl"
    ],
    function (commonModule) {
        commonModule.directive("chromeControl",
            [function () {
                return {
                    restrict: 'AE',
                    controller: 'chromeDirective.ctrl',
                    scope: {
                        containerId : "@"
                    },
                    templateUrl: "../App/common/chromeDirective.html"
                };
            }]);
    });

}(window.define));