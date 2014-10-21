(function (require) {
    "use strict";

    require.config(
    {
        baseUrl: '../GithubAppForSharePoint.App/App',
        paths:
        {
            'underscore':                   '../Scripts/underscore-min',
            'jquery':                       '../Scripts/jquery-2.1.1.min',
            'angular':                      '../Scripts/angular.min',
            'angular-route':                '../Scripts/angular-route',
            'angular-sanitize':             '../Scripts/angular-sanitize',
            'angular-cookies':              '../Scripts/angular-cookies',
            'angular-resource':             '../Scripts/angular-resource',
            //sharepoint scripts
            'spUiControls':                         '../../GithubAppForSharePoint.Tests/Mocks/spUiControls',
            'common/services/spContext':            '../../GithubAppForSharePoint.Tests/Mocks/spContext',
            'common/services/notificationService':  '../../GithubAppForSharePoint.Tests/Mocks/notificationService',
            //test related scripts
            'angular-mocks':                        '../Scripts/angular-mocks',
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
            },
            'angular-route':
            {
                deps: ['angular']
            },
            'angular-sanitize':
            {
                deps: ['angular']
            },
            'angular-cookies':
            {
                deps: ['angular']
            },
            'angular-resource':
            {
                deps: ['angular']
            }
        }
    });

}(window.require));