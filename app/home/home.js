app.controller('Home', ['$http', function($http) {
    var vm = this;

    $http.get('http://localhost/fs/wp-json/posts?type[]=post&sfilter[orderby]=date_gmt&filter[posts_per_page]=1').success(function(res){
        vm.journal = res[0];
    });

    $http.get('http://localhost/fs/wp-json/posts?type[]=project&sfilter[orderby]=date_gmt&filter[posts_per_page]=1').success(function(res){
        vm.project = res[0];
    });
}]);
