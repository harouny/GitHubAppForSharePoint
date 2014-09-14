(function (define) {
    "use strict";

    define([
        "common/commonModule",
        "SP.UI.Controls"
    ],
    function (commonModule, spUiControls) {

        commonModule.controller("chromeControlDirective.ctrl",
            ["$scope",
            function ($scope) {

                var options = {
                    'appIconUrl': "../Images/AppIcon.png",
                    'appTitle': "Github App For SharePoint",
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

                $scope.$watch("chromeControlContainerId", function (chromeControlContainerId) {
                    if (chromeControlContainerId) {
                        var nav = new spUiControls.Navigation(chromeControlContainerId, options);
                        nav.setVisible(true);
                    }
                });

            }
        ]);

    });

}(window.define));