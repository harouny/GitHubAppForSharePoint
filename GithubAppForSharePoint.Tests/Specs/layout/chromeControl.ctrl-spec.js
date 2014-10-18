define(['angular-mocks',
        'spUiControls',
        'common/services/spContext',
        'layout/chromeControl.ctrl'],
function (mock, spUiControls, spContext) {
    describe("SharePoint Chrome", function () {

        var $scope;
        var chromeOptions;
        var chromeIsVisible;
        var bottomHeaderIsVisible;

        beforeEach(function () {
            spyOn(spUiControls, "Navigation").and.callFake(function (containerId, options) {
                chromeOptions = options;
                return {
                    setVisible: function (value) {
                        chromeIsVisible = value;
                    },
                    setBottomHeaderVisible : function(value) {
                        bottomHeaderIsVisible = value;
                    }
                }
            });
            mock.module('common', function ($provide) {
                $provide.value('spContext', spContext);
            });
            mock.module('layout');
            mock.inject(function ($rootScope, $controller) {
                $scope = $rootScope.$new();
                $scope.containerId = "container-div";
                var dependencies = {
                    $scope: $scope
                }
                $controller('chromeControl.ctrl', dependencies);
            });
        });

        it("Should be loaded into every page", function() {
            expect(spUiControls.Navigation)
                .toHaveBeenCalledWith("container-div", window.jasmine.any(Object));
        });

        describe("With the following attributes", function () {

            it("App icon", function() {
                expect(chromeOptions.appIconUrl).toBe("host_web_logo_url");
            });

            it("Site title", function () {
                expect(chromeOptions.siteTitle).toBe("host_web_title");
            });

            it("Link back to the host site", function () {
                expect(chromeOptions.siteUrl).toBe("host_web_url");
            });

            it("App title", function () {
                expect(chromeOptions.appTitle).toBe("Github App For SharePoint");
            });

            it("Link to app main URL", function () {
                expect(chromeOptions.appWebUrl).toBe("/");
            });

            it("App start page", function () {
                expect(chromeOptions.appStartPage).toBe("#/");
            });
        });

        it("Should notify the host page that its loaded", function () {
            expect(chromeOptions.onCssLoaded).toBe("onChromeLoaded()");
        });

        it("Should be displayed", function() {
            expect(chromeIsVisible).toBe(true);
        });

        it("Should hide it's bottom header", function () {
            expect(bottomHeaderIsVisible).toBe(false);
        });

    });
});