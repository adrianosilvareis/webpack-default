export default class HomeController {
   
   constructor($scope) {
      
      this.scope = $scope
      this.nome = 'Quem é?'
      this.scope.title = 'Ola mundo'
   }

   setTitle () {
      this.scope.title = "Novo Titulo"
   }

   setName() {
      this.nome = 'Adriano Silva dos Reis'
   }
   
}