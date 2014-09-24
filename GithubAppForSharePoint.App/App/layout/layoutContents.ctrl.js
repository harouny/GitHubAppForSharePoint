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
            ["$scope", "$rootScope",
            function ($scope, $rootScope) {

                $scope.isChromeLoaded = $rootScope.chromeLoaded;
                $scope.isLoading = $rootScope.isLoading;

                $rootScope.$watch("isChromeLoaded", function (newValue) {
                    $scope.isChromeLoaded = newValue;
                });
                $rootScope.$watch("isLoading", function (newValue) {
                    $scope.isLoading = newValue;
                });

            }]);
    });

}(window.define));