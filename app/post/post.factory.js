(function() {

    angular
      .module('redditClone')
      .factory('RecipeFactory', RecipeFactory)

      function RecipeFactory(){
        console.log('What\'s up said the factory!');
      }
}());
