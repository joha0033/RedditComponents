(function() {

    angular
      .module('redditClone')
      .controller('postListController', postListController)
      //??////////////////////////??//
      //?LOAD SEED CONTENT AT LOAD??//
      //??////////////////////////??//
      function postListController(RecipeFactory){
        const vm=this
        vm.post = [{
          title: "Cats, and they're pissed",
          description: "Not really sure why these cats are so pissed, but they're pissed. Nothing can really be known about why they are pissed because they dont speak, they meow. No one has understood the meow explicitly... but tone goes a long way, and they're pissed.",
          author: "Tom Swagger",
          votes: 6,
          imageURL: "http://dailypicksandflicks.com/wp-content/uploads/2011/01/angry-wet-cat.jpg",
          createdAt: '2015-05-02',
          comments : [
            {content: "this is a shitty book"}
          ]
        },
        {
          title: "A book of names, for Hamsters",
          description: "Hamsters can have names, but a name shapes a hamster... this book will help you choose wisely. Shape your hamster into your best friend starting with a name. It's all in a name",
          author: "Theo Thunderbutt",
          votes: 1,
          imageURL: "https://s-media-cache-ak0.pinimg.com/736x/d5/db/06/d5db068c895eab1df0091510ee242c61--hamster-stuff-baby-hamster.jpg",
          createdAt: '2006-09-22',
          comments : [
            {content: "this is a great book."},
            {content: "well, your an idiot."},
            {content: "no YOU'RE an idiot... fuckturd."}
          ]
        },
        {
          title: "Sex with my neighbor",
          description: "too good to be ok, I should not do it...",
          author: "Anonymous",
          votes: 4,
          imageURL: "https://images-na.ssl-images-amazon.com/images/I/81XIpcZfo-L._SL1500_.jpg",
          createdAt: '2016-09-22',
          comments : [
            {content: "this is not a book"},
            {content: "thi is practically a porno! my kids are ruined."},
            {content: "you're a porno, and your kids were already ruined"}
          ]
        }]
      }
      console.log('hey from the POST-LIST controller!');
        ///////////////////////////////
        // LOAD SEED CONTENT AT LOAD //
        ///////////////////////////////


}());
