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
            ["$scope", "appConfig", "spContext",
            function ($scope, appConfig, spContext) {

                var options = {
                    'siteUrl': spContext.hostWeb.url,
                    'siteTitle': spContext.hostWeb.title,
                    'appIconUrl': spContext.hostWeb.logoUrl,
                    'appWebUrl': '/',
                    'appStartPage': '#/',
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