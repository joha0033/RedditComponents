
(function() {
  'use strict'
  //just defining the module
    angular
      .module('redditClone')
      .controller('postController', postController)

      //////////////////////////////
      // POST CONTROLLER FUNCTION //
      //////////////////////////////
      function postController(){
        const vm = this
        console.log('in post controller');
        vm.time = new Date()


    }

}());
