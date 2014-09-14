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
                    scope: {},
                    templateUrl: "../App/common/chromeControlDirective.tpl.html",
                    link: function ($scope, element) {
                        $scope.chromeControlContainerId = "chrome-control-container";
                    }
                };
            }]);
    });

}(window.define));