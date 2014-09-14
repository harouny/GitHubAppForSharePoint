(function (define) {
    "use strict";

    define(['angular'],
        function (angular) {

            var commonModule = angular.module('commonModule', []);

            var constants = {
                appTitle:       "Github App For SharePoint",
                appVersion:     "1.0.0.0",
                logoUrl:        "../Images/AppIcon.png"
            };
            commonModule.constant('appConstants', constants);

            return commonModule;

        });

}(window.define));