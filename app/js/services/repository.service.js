app.factory("repositoryService", function ($http) {
  return {
    findRepositoriesByName: function (repositoryName, page = 1) {
      return $http.get(`https://api.github.com/search/repositories?q=${repositoryName}&per_page=10&page=${page}`)
    },
    findRepositoryByNameAndOwnerName: function (repositoryName, ownerName) {
      return $http.get(`https://api.github.com/repos/${ownerName}/${repositoryName}`)
    },
    findLanguagesByRepositoryNameAndOwnerName: function (repositoryName, ownerName) {
      return $http.get(`https://api.github.com/repos/${ownerName}/${repositoryName}/languages`)
    },
    findRepositoriesByOwnerName: function (ownerName) {
      return $http.get(`https://api.github.com/users/${ownerName}/repos`)
    }
  }
})