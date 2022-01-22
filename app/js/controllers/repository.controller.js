app.controller("RepositoryController", function ($scope, repositoryService) {

  $scope.repositories = []
  $scope.totalRepositories = 0
  $scope.currentPage = 1

  $scope.searchRepository = function (repositoryName, page) {

    if (!repositoryName) {
      return;
    }

    repositoryService.findRepositoriesByName(repositoryName, page).then(function (response) {
      if (response.status !== 200) {
        return;
      }

      $scope.totalRepositories = response.data.total_count
      $scope.repositories = response.data.items
      console.log($scope.repositories)
    })


  }
})