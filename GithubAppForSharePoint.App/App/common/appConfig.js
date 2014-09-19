(function (define) {
    "use strict";

    define(["common/common"],
        function (common) {
            var configs = {
                appTitle: "Github App For SharePoint",
                appVersion: "1.0.0.0",
                logoUrl: "../Images/AppIcon.png"
            };
            common.value('appConfig', configs);
        });

}(window.define));