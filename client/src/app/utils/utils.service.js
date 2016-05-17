(function() {
  'use strict';

  angular
    .module('votenme')
    .service('Utils', Utils);

    /** @ngInject */
    function Utils(){

      this.getById = function(input, id) {
        var i=0, len=input.length;
        for (; i<len; i++) {
          if (+input[i].id == +id) {
            return input[i];
          }
        }
        return null;
      };

    }

})();
