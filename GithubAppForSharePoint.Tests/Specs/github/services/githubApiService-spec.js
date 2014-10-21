// ReSharper disable InconsistentNaming
define(['angular-mocks',
        'github/services/githubApiService'],
function (mock) {

    describe("Github Api Service", function () {
        var githubApiService, httpBackend, rootScope, loadingIndicatorService, usersService, notificationService, q;

        beforeEach(function() {
            mock.module('github');
            mock.inject(function (_githubApiService_, $httpBackend, $rootScope, _loadingIndicatorService_, _usersService_, _notificationService_, $q) {
                githubApiService = _githubApiService_;
                httpBackend = $httpBackend;
                rootScope = $rootScope;
                loadingIndicatorService = _loadingIndicatorService_;
                usersService = _usersService_;
                notificationService = _notificationService_;
                q = $q;
            });
        });

        describe("When initialized while it contains current user repositories", function () {
            beforeEach(function() {
                spyOn(q, "when").and.callFake(function (repos) {
                    return repos;
                });
            });
            it("resolve promise immediately", function () {
                githubApiService.repos = new Array();
                githubApiService.initialize();
                expect(q.when).toHaveBeenCalled();
            });

            it("and return current user repos", function () {
                githubApiService.repos = new Array();
                var returnedRepos;
                returnedRepos = githubApiService.initialize();
                expect(q.when).toHaveBeenCalledWith(githubApiService.repos);
                expect(returnedRepos).toBe(githubApiService.repos);
            });

        });


        describe("Notify user about the process of loading github repos", function() {
            beforeEach(function() {
                spyOn(usersService, "initialize").and.callFake(function () {
                    return q.reject();
                });
                spyOn(loadingIndicatorService, "startLoading");
                spyOn(loadingIndicatorService, "stopLoading");
            });

            it("show a loading indicator when start loading", function() {
                githubApiService.initialize().finally(function() {
                    expect(loadingIndicatorService.startLoading).toHaveBeenCalled();
                });
            });

            it("hide loading indicator when loading is done", function () {
                githubApiService.initialize().finally(function() {
                    expect(loadingIndicatorService.stopLoading).toHaveBeenCalled();
                });
            });

        });


    });

});
// ReSharper restore InconsistentNaming
