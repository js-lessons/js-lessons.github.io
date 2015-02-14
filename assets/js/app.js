var jsLessons = angular.module('jsLessons', ['ui.router']);

jsLessons.constant('Table', Table);
jsLessons.constant('objectToRows', objectToRows);

jsLessons.constant('HOMEWORKS', {
  'Program Structure': 'js-lessons/js-basics-1',
  'Functions': 'js-lessons/js-basics-2',
  'Objects and Arrays': 'js-lessons/js-basics-3',
  'Higher order functions': 'js-lessons/js-basics-4',
  'Objects and Prototypes': 'js-lessons/js-basics5'
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
