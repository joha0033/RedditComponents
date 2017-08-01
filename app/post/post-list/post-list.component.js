(function() {
  'use strict'
  //just defining the module
    angular
      .module('redditClone')
      .component('postList', {
        controller: 'postListController',
        templateUrl: 'app/posts/post-list/post-list.html'
      })

}());
