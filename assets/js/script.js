var jsLessons = angular.module('jsLessons', ['ui.router']);

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
