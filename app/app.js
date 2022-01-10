var app = angular.module("repositories", ['ngRoute'])

app.controller("AppController", function($scope) {
  $scope.message = 'Hello world'
})

app.config(function($locationProvider) {
  $locationProvider.html5Mode(true)
})

app.config(function($routeProvider) {
  $routeProvider.when('/events', {
    templateUrl: 'templates/list.html'
  }).otherwise({ redirectTo: '/events' })
})