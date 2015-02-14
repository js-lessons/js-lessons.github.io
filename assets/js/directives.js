angular.module('jsLessons')

.directive('jsStudentsTable', ['STUDENTS', 'HOMEWORKS', 'Table', 'objectToRows',
function(STUDENTS, HOMEWORKS, Table, objectToRows) {

  function githubBuild(repoName, githubResults) {
    return githubResults.filter(function(res) {
      return res.repo === repoName;
    })[0];
  }

  function homeworkResults(githubResults, homeWorks) {
    var results = {};

    for (var title in homeWorks) {
      results[title] = githubBuild(homeWorks[title], githubResults).build;
    }

    return results;
  }

  function getResult(allResults, student, topic) {
    switch(allResults[topic][student.Github]) {
      case 'success': return '\u2713';
      case 'failure': return '\u2717';
      default: return '-';
    }
  }

  function addHomeWorkResults(students, homeWorks, githubResults) {
    var getStudentResult = getResult.bind(null, homeworkResults(githubResults, homeWorks));

    console.log(students)
    students = angular.copy(students, []);

    students.forEach(function(student) {
      Object.keys(homeWorks).forEach(function(homeWork) {
        student[homeWork] = getStudentResult(student, homeWork);
      });
    });

    return students;
  }

  function link(scope, element, attrs) {
    scope.$watch('homeworkResults', function(value) {
      var results, studentsTable;

      if(value) {
        results = addHomeWorkResults(STUDENTS, HOMEWORKS, value);
        scope.table = new Table(objectToRows(results)).draw();
      }
    });
  }

  return {
    restrict: 'EA',
    scope: true,
    templateUrl: 'assets/templates/students-table.html',
    link: link
  };
}]);
