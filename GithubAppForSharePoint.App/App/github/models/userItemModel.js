(function (define) {
    "use strict";
    define([], function () {
        return function (item) {
            this.GithubUserName = item.GithubUserName;
            this.AccountName = item.AccountName;
            this.__metadata = item.__metadata;
        }
    });
}(window.define));