(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {

 $urlRouterProvider.otherwise('/home');

  // Set up UI states
 $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'src/templates/home.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categories.html',
      controller:'categoriesController as catCtrl',
      resolve:{
        categories:['MenuDataService',function MenuDataService(MenuDataService){
         return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{nameCategorie}',
      templateUrl: 'src/templates/items.html',
      controller:'itemsController as ItemsCtrl',
      resolve:{
        items:['MenuDataService','$stateParams',function MenuDataService(MenuDataService,$stateParams){
          return MenuDataService.getItemsForCategory($stateParams.nameCategorie);
        }]
      }
    });
}

})();
