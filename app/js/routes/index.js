app.config(function($locationProvider) {
  $locationProvider.html5Mode(true)
})

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/list.html'
  }).otherwise({ redirectTo: '/' })
})