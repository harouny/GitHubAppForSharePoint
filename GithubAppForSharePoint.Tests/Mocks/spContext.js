define(["common/common"], function (common) {
    common.service("spContext", [function spContext() {
        this.hostWeb = {
            appWebUrl: 'host_web_app_web_url',
            url: 'host_web_url',
            title: 'host_web_title',
            logoUrl: 'host_web_logo_url'
        };
    }]);
});