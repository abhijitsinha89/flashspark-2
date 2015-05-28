    var controllerId = 'menu';
    angular.module('app').controller(controllerId,
        ['$route','$http', 'routes', menu]);

    function menu($route, $http, routes) {
        var vm = this;
        vm.isCurrent = isCurrent;
        vm.openmenu = false;
        activate();
        function activate() {
            getNavRoutes();
            getCategoriesData();
        }
        function getNavRoutes() {
            vm.navRoutes = routes.filter(function (r) {
                return r.config.settings && r.config.settings.nav;
            }).sort(function (r1, r2) {
                    return r1.config.settings.nav - r2.config.settings.nav;
                });
        }

        function isCurrent(route) {
            if (!route.config.title || !$route.current || !$route.current.title) {
                return '';
            }
            var menuName = route.config.title;
            return $route.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
        }

        function getCategoriesData() {
            $http.get('wp-json/taxonomies/category/terms').success(function(data){
                vm.categories = data;
            });
        }
    };

