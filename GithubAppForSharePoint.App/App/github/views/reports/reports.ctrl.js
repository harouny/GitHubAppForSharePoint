(function (define, document) {
    "use strict";

    define(["github/github",
            "underscore",
            "goog!visualization,1,packages:[corechart]"],
        function (github, _) {

            github.controller("reports.ctrl",
            ["$window", "repositoriesService",
            function ($window, repositoriesService) {

                repositoriesService.initialize()
                    .then(drawChart);

                function drawChart() {
                    if (repositoriesService.repositoriesListItems
                        && repositoriesService.repositoriesListItems.length > 0) {
                        var items = new Array();
                        items.push(["Name", "Contriputions"]);
                        var cotriputionsByUser = _.groupBy(repositoriesService.repositoriesListItems,
                            function (contripution) {
                                return contripution.AddedBy;
                            });
                        _.each(cotriputionsByUser, function (contriputions) {
                            items.push([contriputions[0].AddedBy, contriputions.length]);
                        });
                        var data = $window.google.visualization.arrayToDataTable(items);
                            var options = {
                                title: 'Top Contributors',
                                is3D: true
                            };
                            var chart = new $window.google.visualization
                                .PieChart(document.getElementById("contributors-chart"));
                            chart.draw(data, options);
                    }
                }
                
            }]);

        });
}(window.define, window.document));