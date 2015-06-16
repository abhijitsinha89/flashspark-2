app.controller('Journal', ['$scope', '$http','$sce', function($scope, $http,$sce) {
    var vm = this;
        vm.pageheader = "A pinch of salt and some nimbu paani";
        vm.trustAsHtml = $sce.trustAsHtml;

    $http.get('wp-json/posts?type[]=post&sfilter[orderby]=date_gmt&filter[posts_per_page]=5').success(function(data){
        vm.articles = data;
    });
}]);
