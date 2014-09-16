(function (define) {
    "use strict";
    define([], function ()
    {
        return [
            {
                url: '/repos',
                config: {
                    templateUrl: '../App/github/repos/repos.html',
                    title: 'Repositories'
                }
            },
            {
                url: '/repo',
                config: {
                    templateUrl: '../App/github/repos/repo.html',
                    title: 'Repository Details'
                }
            },
            {
                url: '/user',
                config: {
                    templateUrl: '../App/github/user/user.html',
                    title: 'User Details'
                }
            },
            {
                url: '/reports',
                config: {
                    templateUrl: '../App/github/reports/reports.html',
                    title: 'Reports'
                }
            }
        ];
    });
}(window.define));