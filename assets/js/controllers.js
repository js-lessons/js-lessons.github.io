angular.module('jsLessons')

.controller('ResultsCtrl', ['$scope', 'StudentsResults', function($scope, StudentsResults) {
  StudentsResults.success(function(results) {
    $scope.homeworkResults = results;
  });
}]);
