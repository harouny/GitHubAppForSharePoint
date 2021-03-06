﻿(function () {
  'use strict';

  define(["common/common",
          "common/services/notificationService",
          "common/services/queryStringService"],
    function (common) {
        var serviceId = 'spContext';
        var loggerSource = '[' + serviceId + '] ';
        common.service(serviceId, [
          '$log', '$cookieStore', '$window', '$resource', '$timeout', "notificationService", "queryStringService", "appDefaultRoute", spContext]);
        function spContext($log, $cookieStore, $window, $resource, $timeout, notification, queryString, appDefaultRoute) {
            var service = this;
            var spWeb = {
                appWebUrl: '',
                url: '',
                title: '',
                logoUrl: ''
            };
            service.hostWeb = spWeb;

            // init the service
            init();

            // init... akin to class constructor
            function init() {
                // if values don't exist on querystring...
                if (decodeURIComponent(queryString.get("SPHostUrl")) === "undefined") {
                    // load the app context form the cookie
                    loadSpAppContext();

                    // fire off automatic refresh of security digest
                    refreshSecurityValidation();
                } else {
                    // otherwise, creae the app context
                    createSpAppContext();
                }
            }

            // create sharepoint app context by moving params on querystring to an app cookie
            function createSpAppContext() {

                var appWebUrl = decodeURIComponent(queryString.get("SPAppWebUrl"));
                $cookieStore.put('SPAppWebUrl', appWebUrl);

                var url = decodeURIComponent(queryString.get("SPHostUrl"));
                $cookieStore.put('SPHostUrl', url);

                var title = decodeURIComponent(queryString.get("SPHostTitle"));
                $cookieStore.put('SPHostTitle', title);

                var logoUrl = decodeURIComponent(queryString.get("SPHostLogoUrl"));
                $cookieStore.put('SPHostLogoUrl', logoUrl);

                $window.location.href = appWebUrl + '/Pages/index.html#' + appDefaultRoute;
            }

            // init the sharepoint app context by loding the app's cookie contents
            function loadSpAppContext() {
                service.hostWeb.appWebUrl = $cookieStore.get('SPAppWebUrl');
                service.hostWeb.url = $cookieStore.get('SPHostUrl');
                service.hostWeb.title = $cookieStore.get('SPHostTitle');
                service.hostWeb.logoUrl = $cookieStore.get('SPHostLogoUrl');
            }

            // fire off automatic refresh of security digest
            function refreshSecurityValidation() {
                $log.log("refreshing security validation" + service.securityValidation + serviceId);

                var siteContextInfoResource = $resource('_api/contextinfo?$select=FormDigestValue', {}, {
                    post: {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json;odata=verbose;',
                            'Content-Type': 'application/json;odata=verbose;'
                        }
                    }
                });

                // request validation
                siteContextInfoResource.post({}, function (data) {
                    // obtain security digest timeout & value & store in service
                    var validationRefreshTimeout = data.d.GetContextWebInformation.FormDigestTimeoutSeconds - 10;
                    service.securityValidation = data.d.GetContextWebInformation.FormDigestValue;
                    $log.log("refreshed security validation" + service.securityValidation + serviceId);
                    $log.log("next refresh of security validation: " + validationRefreshTimeout + " seconds" + serviceId);

                    // repeat this in FormDigestTimeoutSeconds-10
                    $timeout(function () {
                        refreshSecurityValidation();
                    }, validationRefreshTimeout * 1000);
                }, function (error) {
                    $log.debug(error);
                    notification.error("Error", "Error while refreshing security validation.");
                });


            }
        }

    });



})();