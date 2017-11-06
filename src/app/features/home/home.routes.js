function MyRouters($routeProvider){
   $routeProvider.when('/', {
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
   })
}

export default ['$routeProvider', MyRouters]