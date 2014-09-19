(function (define) {
    "use strict";

    define([
        "layout/layout",
        "spUiControls",
        "common/appConfig"
    ],
    function (layoutModule, spUiControls) {

        layoutModule.controller("chromeControl.ctrl",
            ["$scope", "appConfig",
            function ($scope, appConfig) {

                var options = {
                    'appWebUrl': '/',
                    'appStartPage': '#/',
                    'appIconUrl': appConfig.logoUrl,
                    'appTitle': appConfig.appTitle,
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
            }
        ]);

    });

}(window.define));