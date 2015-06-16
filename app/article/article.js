app.controller('Article', ['$scope', '$http','$routeParams', '$sce', function($scope, $http,$routeParams, $sce) {
    var vm = this,
        articleSlug = $routeParams.article,
         articleID = [],
         prevNextArticles = {
            'prev' : {},
            'next' : {}
         };
        vm.pageheader = articleSlug.toUpperCase().replace(/-/g, ' ');
        vm.trustAsHtml = $sce.trustAsHtml;

    $http.get('wp-json/posts/?filter[name]=' + $routeParams.article).success(function(data){
        vm.article = data[0];
        vm.author = data[0].ID;
    });

    $http.get('wp-json/posts?type[]=post&sfilter[orderby]=date_gmt').success(function () {
        angular.each(data, function () {
            articleID.push($(this).ID);
        })
    });
}]);