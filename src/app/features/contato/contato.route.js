function Router ($routeProvider) {
   $routeProvider.when(
      '/contato',
      {
         template: require('./contato.html'),
         controller: 'ContatoController'
      }
   )
}

export default ['$routeProvider', Router]