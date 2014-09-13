(function (require, define) {
    "use strict";

    require.config(
    {
        //all paths are relative to "/Pages"
        baseUrl: '../App',
        paths:
        {
            'github':       './github',
            'underscore':   '../Scripts/underscore-min',
            'jquery':       '../Scripts/jquery-2.1.1.min',
            'angular':      '../Scripts/angular.min'
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
            }
        }
    });

    define("app", ["angular", "github/githubModule"],
        function (angular, githubModule) {
            angular.bootstrap(document.getElementsByTagName("body")[0],
                              [githubModule.name]);
            return githubModule;
        }
    );

    require(["app"], function (githubModule) {
        // Application has bootstrapped and started...
    });

}(require, define));