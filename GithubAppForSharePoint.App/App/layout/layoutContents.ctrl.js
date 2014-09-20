(function (define) {
    "use strict";

    define([
        "layout/layout",
        "layout/chromeControl"
    ],
    function (layoutModule) {

        layoutModule.controller("layoutContents",
            ["$scope", "$rootScope",
            function ($scope, $rootScope) {

                $scope.chromeLoaded = $rootScope.chromeLoaded;
                $rootScope.$watch("chromeLoaded", function(newValue) {
                    $scope.chromeLoaded = newValue;
                });

            }]);
    });

}(window.define));