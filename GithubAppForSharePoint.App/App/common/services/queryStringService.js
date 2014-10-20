(function (define) {
    "use strict";

    define(["common/common"],
        function (common) {
            common.factory("queryStringService",
                ["$window",
                function ($window) {

                    function getAll() {
                        var vars = [], hash;
                        var hashes = $window.location.href.slice($window.location.href.indexOf('?') + 1).split('&');
                        for (var i = 0; i < hashes.length; i++) {
                            hash = hashes[i].split('=');
                            vars.push(hash[0]);
                            vars[hash[0]] = hash[1];
                        }
                        return vars;
                    }
                    function get (key) {
                        return getAll()[key];
                    }

                    return {
                        get: get,
                        getAll : getAll
                    }

                }
            ]);
        });

}(window.define));
