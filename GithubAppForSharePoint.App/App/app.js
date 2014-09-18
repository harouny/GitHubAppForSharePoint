(function (require) {
    "use strict";

    //configure requirejs script dependencies
    require.config(
    {
        baseUrl: '../App',
        paths:
        {
            'underscore':       '../Scripts/underscore-min',
            'jquery':           '../Scripts/jquery-2.1.1.min',
            'angular':          '../Scripts/angular.min',
            'angular-route':    '../Scripts/angular-route',
            'angular-sanitize': '../Scripts/angular-sanitize',
            //sharepoint scripts
            'spUiControls':     '/_layouts/15/SP.UI.Controls',
            'spInit':           '/_layouts/15/init',
            'spCore':           '/_layouts/15/core'
        },
        shim:
        {
            'underscore':
            {
                exports: '_'
            },
            'angular' :
            {
                exports: 'angular'
            },
            'spUiControls':
            {
                exports: 'SP.UI.Controls'
            },
            'angular-route':
            {
                deps: ['angular']
            },
            'angular-sanitize':
            {
                deps: ['angular']
            },
            'spCore' :
            {
                deps: ['spInit']
            }
        }
    });


    //bootstrap angularjs app
    require(["angular", "github/github"],
        function (angular, githubModule) {
            angular.bootstrap(document.getElementsByTagName("body")[0], [githubModule.name]);
        }
    );

}(window.require));