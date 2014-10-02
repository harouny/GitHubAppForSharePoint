(function (define) {
    "use strict";

    define(["common/common"],
        function (common) {
            common.factory("loadingIndicatorService",
                ["$window", "$rootScope",
                function ($window, $rootScope) {

                    var jobs = 0;

                    function startLoading() {
                        jobs++;
                        if (!$rootScope.isLoading) {
                            $rootScope.isLoading = true;
                        }
                    }

                    function stopLoading() {
                        jobs--;
                        if (jobs === 0) {
                            $rootScope.isLoading = false;
                        }
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