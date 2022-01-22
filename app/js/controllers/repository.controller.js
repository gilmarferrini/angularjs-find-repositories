app.controller("RepositoryController", function ($scope, repositoryService) {

  $scope.repositories = []
  $scope.totalRepositories = 0
  $scope.currentPage = 1
  $scope.maxPages = 0

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
      $scope.maxPages = Math.ceil(response.data.total_count / 10)

      console.log($scope.repositories)
    })
  }

  $scope.nextPage = function () {
    if ($scope.currentPage === $scope.maxPages) {
      return;
    }

    $scope.currentPage += 1

    $scope.searchRepository($scope.repositoryName, $scope.currentPage)

  }

  $scope.previousPage = function () {
    if ($scope.currentPage === 1) {
      return;
    }

    $scope.currentPage -= 1

    $scope.searchRepository($scope.repositoryName, $scope.currentPage)
  }
})