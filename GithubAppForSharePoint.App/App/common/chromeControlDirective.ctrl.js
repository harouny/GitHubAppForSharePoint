(function (define) {
    "use strict";

    define([
        "common/commonModule",
        "spUiControls"
    ],
    function (commonModule, spUiControls) {

        commonModule.controller("chromeControlDirective.ctrl",
            ["$scope", "appConstants",
            function ($scope, appConstants) {

                var options = {
                    'appIconUrl': appConstants.logoUrl,
                    'appTitle': appConstants.appTitle,
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

            }
        ]);

    });

}(window.define));