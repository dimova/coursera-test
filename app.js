(function (){
    'use strict';
    angular.module('MyFirstApp', [])
    .controller('MyFirstController', function($scope){
        $scope.name = "Yakov";
        $scope.sayHello = function () { return "Hello Coursera!";
     }
    });
})();