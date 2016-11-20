(function () {
'use strict';

angular.module('MenuApp')

.controller('categoriesController', categoriesController)
.controller('itemsController', itemsController);

categoriesController.$inject = ['categories'];
itemsController.$inject = ['items'];

function categoriesController(categories){
  var catCtrl = this;

  catCtrl.listCategories = categories;

}

function itemsController(items){
  var ItemsCtrl = this;

  ItemsCtrl.listItems = items;

}

})();
