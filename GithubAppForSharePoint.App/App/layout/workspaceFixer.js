(function (define) {
    define(["jquery"],
        function($) {
            function fixWorkspace() {
                var header = '#chrome-control-container';
                var width = $(window).width();
                var height;
                if ($(header).length) {
                    height = $(window).height() - $(header).height();
                } else {
                    height = $(window).height();
                }
                $('#s4-workspace').width(width).height(height);
            }

            function initialize() {
                fixWorkspace();
                $(window).resize(function () {
                    fixWorkspace();
                });
            }

            return {
                initialize: initialize
            }

    });
}(window.define));
