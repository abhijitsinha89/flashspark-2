// Collect the routes
app.constant('routes', getRoutes());

// Configure the routes and route resolvers
app.config(['$routeProvider', '$locationProvider', 'routes', routeConfigurator]);
function routeConfigurator($routeProvider,$locationProvider, routes) {

    routes.forEach(function (r) {
        $routeProvider.when(r.url, r.config);
        $locationProvider.html5Mode(true).hashPrefix('!');

    });
    $routeProvider.otherwise({ redirectTo: '/' });

}

// Define the routes
function getRoutes() {
    return [
        {
            url: '/',
            urlPath:'',
            config: {
                title: 'home',
                templateUrl: myLocalized.partials + 'home/home.html'
            }
        },
        {
            url: '/journal',
            urlPath:'journal',
            config: {
                title: 'journal',
                templateUrl: myLocalized.partials + '/journal/journal.html',
                settings: {
                    nav: 1,
                    content: '<span><i class="fa fa-book"></i><span class="nav-name">Journal</span></span>'
                }
            }
        },
        {
            url: '/projects',
            urlPath:'projects',
            config: {
                title: 'projects',
                templateUrl: myLocalized.partials + '/projects/projects.html',
                settings: {
                    nav: 2,
                    content: '<span><i class="fa fa-book"></i><span class="nav-name">Projects</span></span>'
                }
            }
        },
        {
            url: '/me',
            urlPath:'me',
            config: {
                templateUrl: myLocalized.partials + '/me/me.html',
                title: 'me',
                settings: {
                    nav: 3,
                    content: '<span><i class="fa fa-book"></i><span class="nav-name">Me</span></span>'
                }
            }
        },
        {
            url: '/inspirations',
            urlPath:'inspirations',
            config: {
                templateUrl: myLocalized.partials + '/inspire/inspire.html',
                title: 'inspirations',
                settings: {
                    nav: 4,
                    content: '<span><i class="fa fa-book"></i><span class="nav-name">Inspirations</span></span>'
                }
            }
        }
        ,
        {
            url: '/contact',
            urlPath:'contact',
            config: {
                templateUrl: myLocalized.partials + '/contact/contact.html',
                title: 'contact',
                settings: {
                    nav: 5,
                    content: '<span><i class="fa fa-book"></i><span class="nav-name">Contact</span></span>'
                }
            }
        },
        {
            url: '/journal/:article',
            urlPath:'journal/:article',
            config: {
                templateUrl: myLocalized.partials + '/article/article.html',
                title: 'article'
            }
        },
        {
            url: '/projects/:project',
            urlPath:'projects/:project',
            config: {
                templateUrl: myLocalized.partials + '/project/project.html',
                title: 'article'
            }
        }
    ];
}