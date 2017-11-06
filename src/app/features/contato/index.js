import './contato.css'

import angular from 'angular'
import ngRoute from 'angular-route'

import ContatoController from './contato.controller'
import Router from './contato.route'

export default angular.module('app.contato', [ngRoute])
   .config(Router)
   .controller('ContatoController', ContatoController)

/**
 * Arquivos exportando funções assim como no angular Padrão
 */