import 'bootstrap/dist/css/bootstrap.css'

import angular from 'angular'

import home from './features/home'
import contato from './features/contato'

angular.module('app.dashboard', [home.name, contato.name])


/**
 * Arquivo principal da aplicação
 */