
define(['angular-mocks', 'spUiControls', 'common/chromeControlDirective.ctrl'],
function (mock, spUiControls) {

    describe("chrome control directive controller", function () {

        var $scope;
        beforeEach(function () {
            spyOn(spUiControls, "Navigation").and.callThrough();
            mock.module('commonModule');
            mock.inject(function ($rootScope, $controller) {
                $scope = $rootScope.$new();
                var dependencies = {
                    $scope: $scope
                }
                $controller('chromeControlDirective.ctrl', dependencies);
            });
        });

        it("is watching for an element id in DOM", function () {
            expect($scope.$$watchers[0].exp).toBe("chromeControlContainerId");
        });

        describe("and when element id is found", function () {

            it("it loads chrome control into that element", function() {
                $scope.chromeControlContainerId = "container-div";
                $scope.$apply();
                expect(spUiControls.Navigation)
                    .toHaveBeenCalledWith("container-div", window.jasmine.any(Object));
            });

        });

    });
});