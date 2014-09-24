(function (define) {
    "use strict";

    define([
        "layout/layout"
    ],
    function (layoutModule) {

        layoutModule.controller("header.ctrl",
            ["$scope", "$route",
            function ($scope, $route) {

                function setPageTitle() {
                    if ($route.current) {
                        $scope.pageTitle = $route.current.title;
                    }
                }

                function init() {
                    setPageTitle();
                    $scope.$on('$routeChangeSuccess', function () {
                        setPageTitle();
                    });
                }

                init();
            }
        ]);
    });

}(window.define));