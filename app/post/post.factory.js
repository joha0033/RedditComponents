(function() {

    angular
      .module('redditClone')
      .service('RecipeFactory', RecipeFactory)

      function RecipeFactory(){
        console.log('What\'s up said the factory!');
        const vm = this
}
}());
