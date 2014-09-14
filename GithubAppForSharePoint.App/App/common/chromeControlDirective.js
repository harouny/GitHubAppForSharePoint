(function (define) {
    "use strict";

    define([
        "common/commonModule",
        "common/chromeControlDirective.ctrl"
    ],
    function (commonModule) {
        commonModule.directive("commonChromeControl",
            [function () {
                return {
                    restrict: 'AE',
                    controller: 'chromeControlDirective.ctrl',
                    scope: {
                        containerId : "@"
                    },
                    templateUrl: "../App/common/chromeControlDirective.tpl.html"
                };
            }]);
    });

}(window.define));