(function (require, define) {
    "use strict";

    require.config(
    {
        //all paths are relative to "/Pages"
        baseUrl: '../App',
        paths:
        {
            'underscore':       '../Scripts/underscore-min',
            'jquery':           '../Scripts/jquery-2.1.1.min',
            'angular':          '../Scripts/angular.min',
            'angular-route':    '../Scripts/angular-route',
            'angular-sanitize': '../Scripts/angular-sanitize',
            'SP.UI.Controls':   '/_layouts/15/SP.UI.Controls'
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
            'SP.UI.Controls':
            {
                exports: 'SP.UI.Controls'
            }
        }
    });

    define("app",
        ["angular", "github/githubModule"],
        function (angular, githubModule) {
            angular.bootstrap(document.getElementsByTagName("body")[0],
                              [githubModule.name]);
            return githubModule;
        }
    );

    require(["app"], function (githubModule) {
        // Application has bootstrapped and started...
    });

}(window.require, window.define));