var app = angular.module('topic-shuffle', []);

app.controller('MainCtrl', ['$scope', '$http', 'util', function($scope, $http, util) {
  $http.get('https://cdn.rawgit.com/chappers/shuffle-topics/gh-pages/topics-20160415.txt')
    .success(function(data) {
      //console.log(data);
      $scope.topicList = util.shuffle(data.split('\n'));
    });

  $scope.getNextTopic = function() {
    $scope.currentTopic = $scope.topicList.pop();
  }

}]);

app.service('util', function() {
    return {
      shuffle: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;
      }
    };
});
