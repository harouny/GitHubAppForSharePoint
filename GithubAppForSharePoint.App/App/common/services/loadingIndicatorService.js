(function (define) {
    "use strict";

    define(["common/common"],
        function (common) {
            common.factory("loadingIndicatorService",
                ["$window", "$rootScope",
                function ($window, $rootScope) {

                    function startLoading() {
                        $rootScope.isLoading = true;
                    }

                    function stopLoading() {
                        $rootScope.isLoading = false;
                    }

                    function isLoading() {
                        return $rootScope.isLoading === true;
                    }


                return {
                    startLoading: startLoading,
                    stopLoading: stopLoading,
                    isLoading: isLoading
                };
            }]);
        });

}(window.define));