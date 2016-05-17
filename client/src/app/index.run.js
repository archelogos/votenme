(function() {
  'use strict';

  angular
    .module('votenme')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $cookies, Data, User) {

    var user = null;
    var userId = $cookies.get('user');

    if(angular.isUndefined(userId)){
      /* New Visitor */
      user = User.save(function(){
        $cookies.put('user', user.id);
      });
    }
    else{
      /* Returning Visitor */
      user = User.get({user:userId});
    }

    Data.setUser(user.$promise);
  }

})();
