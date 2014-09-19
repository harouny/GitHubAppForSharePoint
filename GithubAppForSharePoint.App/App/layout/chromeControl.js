(function (define) {
    "use strict";

    define([
        "layout/layout",
        "layout/chromeControl.ctrl"
    ],
    function (layoutModule) {
        layoutModule.directive("layoutChromeControl",
            [function () {
                return {
                    restrict: 'AE',
                    controller: 'chromeControl.ctrl',
                    scope: {
                        containerId : "@"
                    },
                    templateUrl: "../App/layout/chromeControl.html"
                };
            }]);
    });

}(window.define));