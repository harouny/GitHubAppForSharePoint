(function (require, define) {
    "use strict";

    require.config(
    {
        //all paths are relative to "/Scripts"
        baseUrl: 'Scripts',
        paths:
        {
            'app': './app',
            'underscore': './underscore-min',
            'jquery': './jquery-2.1.1.min',
            'angular': './angular.min'
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

    define("app", ["angular", "app/github/githubModule"],
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