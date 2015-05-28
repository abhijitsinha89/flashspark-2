(function () {
    'use strict';
    var controllerId = 'work';
    angular.module('app').controller(controllerId, ['$rootScope', '$filter', '$sce', 'dbdata', 'common', work]);

    function work($rootScope, $filter, $sce, dbdata, common) {
        var vm = this;
        vm.ShowOverlay = false;
        vm.pageheader = "The Working Class";
        $rootScope.title = "Work | Flashspark-Abhijit Sinha";
        vm.trustAsHtml = $sce.trustAsHtml;
        vm.updatework = false;
        activate();

        function activate() {
            common.activateController([], controllerId);
            getWork();
        }

        function getWork() {
            dbdata.workData().then(function(data) {
                vm.Work = data;
            });

            return vm.Work;
        };

        vm.Overlay = function (workId) {
        //    angular.forEach(vm.timeline, function (obj) {
        //       var found = $filter('filter')(obj.Work, { id: workId }, true);
        //          if (found.length) {
        //                vm.ShowOverlay = true;
        //                vm.workOverlayDisplay = found[0];
        //          };


            //    
           // getWorkData.setworkID(workId);
        };
    };

})();