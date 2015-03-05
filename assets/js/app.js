var jsLessons = angular.module('jsLessons', ['ui.router']);

jsLessons.constant('Table', Table);
jsLessons.constant('objectToRows', objectToRows);

jsLessons.constant('HOMEWORKS', {
  'Program Structure': 'js-lessons/js-basics-1',
  'Functions': 'js-lessons/js-basics-2',
  'Objects and Arrays': 'js-lessons/js-basics-3',
  'Higher order functions': 'js-lessons/js-basics-4',
  'Objects and Prototypes': 'js-lessons/js-basics5',
  'Modules': 'js-lessons/module.js',
  'EventEmitter': 'js-lessons/stuff.js'
});

jsLessons.constant('STUDENTS', [
  { Name: 'Douglas Crockford', Github: 'dimavetrov' },
  { Name: 'Tony Morris', Github: 'vorobey9' },
  { Name: 'Slava Pestov', Github: 'kulinichdenis' },
  { Name: 'Graydon Hoare', Github: 'Sazonova' },
  { Name: 'Nikodemus Siivola', Github: 'asdhomer' },
  { Name: 'Max Bolingbroke', Github: 'lush81' },
  { Name: 'Daniel Spiewak', Github: 'dneprm' },
  { Name: 'Rich Hickey', Github: 'Alytar' },
  { Name: 'David Nolen', Github: 'dennisreveni' },
  { Name: 'Martin Odersky', Github: 'movax10' }
]);

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
    .state('results', {
      url: '/results',
      templateUrl: 'views/results.html',
      controller: 'ResultsCtrl'
    })
});
