(function (define) {
    "use strict";

    define([
        "layout/layout",
        "spUiControls",
        "common/common.config",
        "common/services/spContext"
    ],
    function (layoutModule, spUiControls) {

        layoutModule.controller("chromeControl.ctrl",
            ["$scope", "appConfig", "spContext", "$window", "$rootScope",
            function ($scope, appConfig, spContext, $window, $rootScope) {

                var options = {
                    'siteUrl': spContext.hostWeb.url,
                    'siteTitle': spContext.hostWeb.title,
                    'appIconUrl': spContext.hostWeb.logoUrl,
                    'appWebUrl': '/',
                    'appStartPage': '#/',
                    'appTitle': appConfig.appTitle,
                    'onCssLoaded' : "onChromeLoaded()",
                    'appHelpPageUrl': 'javascript:;',
                    'settingsLinks': [
                        {
                            'linkUrl': spContext.hostWeb.appWebUrl + "/Lists/Users",
                            'displayName': 'Users List'
                        },
                        {
                            'linkUrl': spContext.hostWeb.appWebUrl + "/Lists/Repositories",
                            'displayName': 'Repositories List'
                        }
                    ]
                };
                var nav = new spUiControls.Navigation($scope.containerId, options);
                nav.setVisible(true);
                nav.setBottomHeaderVisible(false);

                //will fire when the chrome control is fully loaded
                $window.onChromeLoaded = function () {
                    $rootScope.isChromeLoaded = true;
                    $rootScope.$apply();
                };
            }
        ]);

    });

}(window.define));