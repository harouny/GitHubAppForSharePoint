(function (define) {
    "use strict";

    define([
        "layout/layout",
        "underscore"
    ],
    function (layoutModule, _) {

        layoutModule.controller("quicklaunch.ctrl",
            ["$scope", "appRoutes", "$route",
            function ($scope, appRoutes, $route) {

                function isRouteSelected(route) {
                    return $route.current && $route.current.id === route.config.id;
                }

                function loadMenueItems() {
                    $scope.items = new Array();
                    _.each(appRoutes, function (route) {
                        if (route.config.showInQuicklaunch) {
                            $scope.items.push({
                                title: route.config.title,
                                url: route.url,
                                selected: isRouteSelected(route)
                            });
                        }
                    });
                }

                function init() {
                    loadMenueItems();
                    $scope.$on('$routeChangeSuccess', function () {
                        loadMenueItems();
                    });
                }
                init();
            }
        ]);
    });

}(window.define));