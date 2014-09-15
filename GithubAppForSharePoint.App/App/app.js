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
            'spUiControls':     '/_layouts/15/SP.UI.Controls'
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
            }
        }
    });


    //bootstrap angularjs app
    require(["angular", "github/githubModule"],
        function (angular, githubModule) {
            angular.bootstrap(document.getElementsByTagName("body")[0], [githubModule.name]);
        }
    );

}(window.require));