app.controller("RepositoryController", function ($scope, repositoryService) {
  console.log(repositoryService.findRepositoriesByName('Linux', 1))
})