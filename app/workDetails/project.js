(function () {
    'use strict';
    var controllerId = 'workDetails';
    angular.module('app').controller(controllerId, ['$rootScope', '$routeParams', '$filter', 'dbdata', '$http', '$sce', 'common', workDetails]);

    function workDetails($rootScope, $routeParams, $filter ,dbdata, $http, $sce, common) {
        var workTitleParams = $routeParams.workDetail.replace(/-/g, ' '),
            workTitleUpper = workTitleParams.substring(0, 1).toUpperCase() + workTitleParams.substring(1),
            vm = this;
        vm.workDetails = [];
        vm.pageheader = workTitleUpper;
        $rootScope.title = workTitleUpper + " | Flashspark-Abhijit Sinha";
        vm.trustAsHtml = $sce.trustAsHtml;
        vm.url = $routeParams.workDetail;

        activate();
        vm.contentLoaded = false;
        function activate() {
            common.activateController([], controllerId);
            getWork();
        }

        function getWork() {
            dbdata.workData().then(function (data) {            
                angular.forEach(data, function (obj) {
                    if (obj.url === $routeParams.workDetail) {
                        vm.workDetails = obj;
                    };

                });
            });
        };
    }
})();