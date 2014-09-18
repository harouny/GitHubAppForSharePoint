define(['angular-mocks', 'spUiControls', 'common/chromeDirective.ctrl'],
function (mock, spUiControls) {
    describe("chrome control directive controller", function () {

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
            mock.module('common');
            mock.inject(function ($rootScope, $controller) {
                $scope = $rootScope.$new();
                $scope.containerId = "container-div";
                var dependencies = {
                    $scope: $scope
                }
                $controller('chromeDirective.ctrl', dependencies);
            });
        });

        it("it loads chrome control into target DOM element", function() {
            expect(spUiControls.Navigation)
                .toHaveBeenCalledWith("container-div", window.jasmine.any(Object));
        });

        describe("passing the following details", function () {

            it("app icon", function() {
                expect(chromeOptions.appIconUrl).toBe("../Images/AppIcon.png");
            });

            it("app title", function () {
                expect(chromeOptions.appTitle).toBe("Github App For SharePoint");
            });

            it("app web url", function () {
                expect(chromeOptions.appWebUrl).toBe("/");
            });

            it("app start page", function () {
                expect(chromeOptions.appStartPage).toBe("#/");
            });
        });

        it("show chrome control", function() {
            expect(chromeIsVisible).toBe(true);
        });

        it("hide chrome control bottom header", function () {
            expect(bottomHeaderIsVisible).toBe(false);
        });

    });
});