(function () {
'use strict';

angular.module('MenuApp')

.component('items',{

    templateUrl: 'src/templates/listItems.html',
    bindings: {
      dataitems: '<'
    },
    controller: itemsComponentController,
  });


function itemsComponentController(){
  var $ctrl = this;
}

})();
