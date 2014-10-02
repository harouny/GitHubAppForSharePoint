(function (define) {
    "use strict";
    define([], function () {
        return function (item) {
            this.RepositoryName = item ? item.RepositoryName : null;
            this.AccountName = item ? item.AccountName : null;
            this.AccountNameId = item ? item.AccountNameId : null;
            this.Url = item ? item.Url : null;
            this.RepositoryDescription = item ? item.RepositoryDescription : null;
            this.RepositoryId = item ? item.RepositoryId : null;
            this.__metadata = item ? item.__metadata : null;
        }
    });
}(window.define));