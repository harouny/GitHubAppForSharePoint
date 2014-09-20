(function (define) {
    "use strict";

    define([
        "layout/layout",
        "spUiControls",
        "common/appConfig",
        "common/spContext"
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
                            'linkUrl': 'javascript:;',
                            'displayName': 'Link 1'
                        },
                        {
                            'linkUrl': 'javascript:;',
                            'displayName': 'Link 2'
                        },
                        {
                            'linkUrl': 'javascript:;',
                            'displayName': 'Link 3'
                        }
                    ]
                };
                var nav = new spUiControls.Navigation($scope.containerId, options);
                nav.setVisible(true);
                nav.setBottomHeaderVisible(false);

                //will fire when the chrome control is fully loaded
                $window.onChromeLoaded = function () {
                    $rootScope.chromeLoaded = true;
                    $rootScope.$apply();
                };
            }
        ]);

    });

}(window.define));