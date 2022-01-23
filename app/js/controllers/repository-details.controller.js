app.controller("RepositoryDetailsController", function ($scope, $route, repositoryService) {
  $scope.repository = {}
  $scope.languages = []
  $scope.moreRepositories = []

  function findRepositoryByNameAndOwnerName(repositoryName, ownerName) {
    repositoryService
      .findRepositoryByNameAndOwnerName(repositoryName, ownerName)
      .then(function (response) {
        console.log(response.data)
        $scope.repository = response.data
      })
  }
  
  function findLanguagesByRepositoryNameAndOwnerName(repositoryName, ownerName) {
    repositoryService
      .findLanguagesByRepositoryNameAndOwnerName(repositoryName, ownerName)
      .then(function (response) {
        $scope.languages = Object.keys(response.data)
      })
  }

  function findRepositoriesByOwnerName(ownerName) {
    repositoryService
      .findRepositoriesByOwnerName(ownerName)
      .then(function (response) { 
        $scope.moreRepositories = response.data
      })
  }

  findRepositoryByNameAndOwnerName(
    $route.current.params.repositoryName,
    $route.current.params.ownerName
  )

  findLanguagesByRepositoryNameAndOwnerName(
    $route.current.params.repositoryName,
    $route.current.params.ownerName
  )

  findRepositoriesByOwnerName(
    $route.current.params.ownerName
  )

})