(function () {
'use strict';

angular.module('Data')
.constant('baseURL','https://davids-restaurant.herokuapp.com/')
.service('MenuDataService',MenuDataService);

MenuDataService.$inject = ['$http','baseURL'];

function MenuDataService($http,baseURL){

  var menuData = this;


  menuData.getAllCategories = function(){
    console.log('Entrer dans MenuDataService.getAllCategories');
    return  $http({
      method:'GET',
      url: baseURL + 'categories.json'
    });
  };

  menuData.getItemsForCategory = function(categoryShortName){
    return  $http({
      params:{
        category:categoryShortName
      },
      method:'GET',
      url: baseURL + 'menu_items.json'
    });
  //  'https://davids-restaurant.herokuapp.com/menu_items.json?category='
  };

}
})();
