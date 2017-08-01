(function() {
  'use strict'
  //just defining the module
    angular
      .module('redditClone')
      .component('posts', {
        controller: 'postController',
        templateUrl: 'app/post/post.html',
          bindings: {
            data: '<'
          }
      })

}());
