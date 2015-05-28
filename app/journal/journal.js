app.controller('Article', ['$scope', '$http','$routeParams', function($scope, $http,$routeParams) {
    var vm = this,
        ArticleSlug = $routeParams.article;

    $http.get('wp-json/posts/?filter[name]=' + $routeParams.article).success(function(data){
        vm.article = data[0];
        vm.author = data[0].author;
    });
}]);
