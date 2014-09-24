(function (define) {
    "use strict";

    define([
        "layout/layout",
        "layout/quicklaunch.ctrl"
    ],
    function (layoutModule) {
        layoutModule.directive("layoutQuicklaunch",
            [function () {
                return {
                    restrict: 'AE',
                    controller: 'quicklaunch.ctrl',
                    scope: {},
                    templateUrl: "../App/layout/quicklaunch.html"
                };
            }]);
    });

}(window.define));