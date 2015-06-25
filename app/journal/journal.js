app.controller('Journal', ['$scope', '$http','$sce', function($scope, $http,$sce) {
    var vm = this;
        vm.pageheader = "A pinch of salt and some nimbu paani";
        vm.trustAsHtml = $sce.trustAsHtml;

    var getPaginationCount = function (totalPosts, totalPages) {
        vm.totalPages = [];

        for(let i = 1 ; i <= totalPages ; i++) {
            vm.totalPages.push(i);
        }
        vm.pagination.last = vm.totalPages[totalPages - 1]
    }

    $http.get('wp-json/posts?type[]=post&sfilter[orderby]=date_gmt&filter[posts_per_page]=2').success(function(data, status, headers, config){
        vm.articles = data;
        getPaginationCount(headers('X-WP-Total'), headers('X-WP-TotalPages'));
        vm.activePage = 1;
    });

    $http.get('wp-json/taxonomies/journal/terms').
    success(function(data){
        vm.categories = data;
    });

    $http.get('wp-json/taxonomies/journal-tags/terms').
    success(function(data){
        vm.tags = data;
    });

    vm.pagination = function (clickedPage) {
        vm.activePage = clickedPage;
        $http.get('wp-json/posts?type[]=post&sfilter[orderby]=date_gmt&filter[posts_per_page]=2&page=' + clickedPage).success(function(data, status, headers, config){
            vm.articles = data;
        });
    };

}]);
