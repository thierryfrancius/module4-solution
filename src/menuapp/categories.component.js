(function () {
'use strict';

angular.module('MenuApp')

.component('categories',{

    templateUrl: 'src/templates/listCategories.html',
    controller: categoriesComponentController,
    bindings: {
      datacategories: '<'
    }
  });

function categoriesComponentController(){
  var $ctrl = this;
}

})();
