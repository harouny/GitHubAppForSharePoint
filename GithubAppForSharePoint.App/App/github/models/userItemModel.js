(function (define) {
    "use strict";
    define([], function () {
        return function (item) {
            this.GithubUserName = item ? item.GithubUserName : null;
            this.AccountName = item ? item.AccountName : null;
            this.Id = item ? item.Id : null;
            this.__metadata = item ? item.__metadata : null;
        }
    });
}(window.define));