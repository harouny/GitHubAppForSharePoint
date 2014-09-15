define(['angular-mocks', 'spUiControls', 'common/chromeDirective.ctrl'],
function (mock, spUiControls) {
    describe("chrome control directive controller", function () {

        var $scope;
        var chromeOptions;
        var chromeIsVisible;

        beforeEach(function () {
            spyOn(spUiControls, "Navigation").and.callFake(function (containerId, options) {
                chromeOptions = options;
                return {
                    setVisible: function (value) {
                        chromeIsVisible = value;
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

        });

        it("then set chrome visibaility to true", function() {
            expect(chromeIsVisible).toBe(true);
        });

    });
});