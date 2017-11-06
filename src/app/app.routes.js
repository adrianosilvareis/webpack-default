function MyRouters($routeProvider){
   $routeProvider.when('/', {
      template: require('./home/home.html'),
      controller: 'HomeControler',
      controllerAs: 'home'
   })
}

export default ['$routeProvider', MyRouters]

/**
 * arquivo de rotas padrão
 */