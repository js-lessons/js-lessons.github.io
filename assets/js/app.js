var jsLessons = angular.module('jsLessons', ['ui.router']);

jsLessons.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=1; i <= total; i++) {
      input.push(i);
    }
    return input;
  };
});

jsLessons.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/lessons/1.html'
    })
    .state('lessons', {
      url: '/lessons/:lessonId',
      templateUrl: function($stateParams) {
        return 'views/lessons/'+ $stateParams.lessonId + '.html';
      }
    })
});
