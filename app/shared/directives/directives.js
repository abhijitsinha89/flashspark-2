(function() {
    'use strict';

    var app = angular.module('app');

    app.directive('dirDisqus', ['$window', function($window) {
        return {
            restrict: 'E',
            scope: {
                disqus_shortname: '@disqusShortname',
                disqus_identifier: '@disqusIdentifier',
                disqus_title: '@disqusTitle',
                disqus_url: '@disqusUrl',
                disqus_category_id: '@disqusCategoryId',
                disqus_disable_mobile: '@disqusDisableMobile',
                readyToBind: "@"
            },
            template: '<div id="disqus_thread"></div><a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>',
            link: function(scope) {

                // ensure that the disqus_identifier and disqus_url are both set, otherwise we will run in to identifier conflicts when using URLs with "#" in them
                // see http://help.disqus.com/customer/portal/articles/662547-why-are-the-same-comments-showing-up-on-multiple-pages-
                if (typeof scope.disqus_identifier === 'undefined' || typeof scope.disqus_url === 'undefined') {
                    throw "Please ensure that the `disqus-identifier` and `disqus-url` attributes are both set.";
                }

                scope.$watch("readyToBind", function(isReady) {

                    // If the directive has been called without the 'ready-to-bind' attribute, we
                    // set the default to "true" so that Disqus will be loaded straight away.
                    if ( !angular.isDefined( isReady ) ) {
                        isReady = "true";
                    }
                    if (scope.$eval(isReady)) {
                        // put the config variables into separate global vars so that the Disqus script can see them
                        $window.disqus_shortname = scope.disqus_shortname;
                        $window.disqus_identifier = scope.disqus_identifier;
                        $window.disqus_title = scope.disqus_title;
                        $window.disqus_url = scope.disqus_url;
                        $window.disqus_category_id = scope.disqus_category_id;
                        $window.disqus_disable_mobile = scope.disqus_disable_mobile;

                        // get the remote Disqus script and insert it into the DOM, but only if it not already loaded (as that will cause warnings)
                        if (!$window.DISQUS) {
                            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                            dsq.src = '//' + scope.disqus_shortname + '.disqus.com/embed.js';
                            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                        } else {
                            $window.DISQUS.reset({
                                reload: true,
                                config: function () {
                                    this.page.identifier = scope.disqus_identifier;
                                    this.page.url = scope.disqus_url;
                                    this.page.title = scope.disqus_title;
                                }
                            });
                        }
                    }
                });
            }
        };
    }]);

    app.directive('workOverlay', function () {
        return {
            restrict: 'E',
            scope: {
                show: '='
            },
            replace: true, // Replace with the template below
            transclude: true, // we want to insert custom content inside the directive
            link: function (scope, element, attrs) {
                scope.dialogStyle = {};
                if (attrs.width)
                    scope.dialogStyle.width = attrs.width;
                if (attrs.height)
                    scope.dialogStyle.height = attrs.height;
                scope.hideModal = function () {
                    scope.show = false;
                };
            },
            template: "<div class='ng-modal' ng-show='show' ng-class='{active:show===true}'>" +
                "<div class='ng-modal-overlay' ng-click='hideModal()'></div>" +
                "<div class='ng-modal-dialog' ng-style='dialogStyle'><i class=' glyphicon glyphicon-remove ng-modal-close fa-spin' ng-click='hideModal()'></i>" +
                "<div class='ng-modal-dialog-content' ng-transclude></div>" +
                "</div>" +
                "</div>"
        };
    });

    app.directive('fixedHeader', function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: "<div class='fixedheader' ng-transclude ng-cloak></div>"
        };
    });

    app.directive('movableContent', function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            //link: function(scope, element, attrs) {
            //    element.ready(function(){
            //        var headerheight = $('.fixedheader').outerHeight();
            //        $('.movablecontent').css('margin-top', headerheight);
            //    });
            //},
            template: "<div class='movablecontent' ng-transclude></div>"
        };
    });

    app.filter('unsafe', function ($sce) {
        return function (val) {
            return $sce.parseAsHtml($sce.HTML,val);
        };
    });

    app.directive('replaceReadMore', [function () {
        return  {
            restrict: 'A',
            scope: {url: '@url'},
            link : function compile(scope, element, attr) {
                attr.$observe('replaceReadMore', function (value) {
                    var readMoreURL = '<a href="'+  scope.url +'">Read More <i class="fa fa-caret-right"></i></a>'
                    var newHTML = value.replace('[&hellip;]', readMoreURL);
                    element.html(newHTML);
                });
            }
        }
    }]);
})();