(function (define) {
    "use strict";
    define([], function () {
        return function (item) {
            this.AccountName = item.AccountName;
            this.DisplayName = item.DisplayName;
            this.Email = item.Email;
        }
    });
}(window.define));