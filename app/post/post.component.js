(function() {
  'use strict'
  //just defining the module
    angular
      .module('redditClone')
      .component('post', {
        controller: 'postController',
        templateUrl: 'app/post/post.html',
          bindings: {
            data: '<'
          }
      })

}());
