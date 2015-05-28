(function () {
    'use strict';
    var controllerId = 'inspire';
    angular.module('app').controller(controllerId, ['$rootScope', '$sce', 'dbdata', 'common', inspire]);

    function inspire($rootScope, $sce, dbdata, common) {
        var vm = this;
        vm.pageheader = "What triggers a spark deep within";
        $rootScope.title = "My inspirations | Flashspark-Abhijit Sinha";
        vm.trustAsHtml = $sce.trustAsHtml;
        activate();
        function activate() {
            common.activateController([], controllerId);
            getInspiration();
        }

        function getInspiration() {
            dbdata.inspireData().then(function(data) {
            vm.inspire = data;
            return vm.inspire;
            });
        };

    }
})();