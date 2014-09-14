(function (require) {
    "use strict";

    require.config(
    {
        baseUrl: '../GithubAppForSharePoint.App/App',
        paths:
        {
            'underscore':       '../Scripts/underscore-min',
            'jquery':           '../Scripts/jquery-2.1.1.min',
            'angular':          '../Scripts/angular.min',
            'angular-route':    '../Scripts/angular-route',
            'angular-sanitize': '../Scripts/angular-sanitize',
            'angular-mocks':    '../Scripts/angular-mocks',
            'spUiControls':     '../../GithubAppForSharePoint.UnitTests/Mocks/spUiControls',
        },
        shim:
        {
            'underscore':
            {
                exports: '_'
            },
            'angular':
            {
                exports: 'angular'
            },
            'angular-mocks' :
            {
                deps: ['angular'],
                exports: 'angular.mock'
            }
        }
    });

}(window.require));