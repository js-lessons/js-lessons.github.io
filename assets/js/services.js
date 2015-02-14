angular.module('jsLessons')

.factory('StudentsResults', ['$http', 'HOMEWORKS', function($http, HOMEWORKS) {
  var repos = Object.keys(HOMEWORKS).map(function(topic) {
    return HOMEWORKS[topic];
  });

  return $http.jsonp('http://homework-results.herokuapp.com/results?repos='+repos+'&callback=JSON_CALLBACK');
}]);
