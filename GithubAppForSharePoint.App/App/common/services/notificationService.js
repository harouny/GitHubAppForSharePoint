// ReSharper disable InconsistentNaming
(function (define) {
    "use strict";

    define(["common/common",
            "spCore"],
        function (common) {
            common.factory("notificationService",
                ["$log", "$window",

            function ($log, $window) {

                function error(title, messege) {
                    notify(title, messege, "../Images/error.png");
                }

                function success(title, messege) {
                    notify(title, messege, "../Images/success.png");
                }

                function notify(title, messege, imageUrl) {

                    var notificationData = new $window.SPStatusNotificationData(
                        "", //text
                        $window.STSHtmlEncode(messege), //subText
                        imageUrl, //imageUrl
                        null); //sip

                    var notification = new $window.SPNotification(
                        $window.SPNotifications.ContainerID.Status, //containerId
                        $window.STSHtmlEncode(title), //message
                        false, //isSticky
                        null,  //tooltip
                        null,  //onClickCallback
                        notificationData //extraData
                        );

                    notification.Show(false);
                }

                return {
                    error: error,
                    success: success
                };
            }]);
        });

}(window.define));
// ReSharper restore InconsistentNaming
