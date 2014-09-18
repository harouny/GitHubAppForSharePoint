(function (define) {
    "use strict";

    define([
        "common/common",
        "spUiControls",
        "common/common.config"
    ],
    function (commonModule, spUiControls) {

        commonModule.controller("chromeDirective.ctrl",
            ["$scope", "common.config",
            function ($scope, configs) {

                var options = {
                    'appWebUrl': '/',
                    'appStartPage': '#/',
                    'appIconUrl': configs.logoUrl,
                    'appTitle': configs.appTitle,
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