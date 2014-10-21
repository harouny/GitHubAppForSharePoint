(function (define) {
    "use strict";

    define([
        "layout/layout",
        "layout/chromeControl",
        "layout/header",
        "layout/quicklaunch"
    ],
    function (layoutModule) {

        layoutModule.controller("layoutContents",
            ["$rootScope",
            function ($rootScope) {
                var self = this;
                self.isChromeLoaded = $rootScope.chromeLoaded;
                self.isLoading = $rootScope.isLoading;
                $rootScope.$watch("isChromeLoaded", function (newValue) {
                    self.isChromeLoaded = newValue;
                });
                $rootScope.$watch("isLoading", function (newValue) {
                    self.isLoading = newValue;
                });
            }]);
    });

}(window.define));