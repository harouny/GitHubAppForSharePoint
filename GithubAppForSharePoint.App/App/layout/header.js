(function (define) {
    "use strict";

    define([
        "layout/layout",
        "layout/header.ctrl"
    ],
    function (layoutModule) {
        layoutModule.directive("layoutHeader",
            [function () {
                return {
                    restrict: 'AE',
                    controller: 'header.ctrl',
                    scope: {},
                    templateUrl: "../App/layout/header.html"
                };
            }]);
    });

}(window.define));