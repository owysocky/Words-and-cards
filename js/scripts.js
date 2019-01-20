$(document).ready(function() {

  $("#formOne").submit(function(event){

    var theInput = $("input#sentance").val();
    var words = theInput.split(" ");
    var newWords = [];
    words.map(function(word){
    if(parseInt(word.length)>=3){
        newWords.push(word);
      }
    });

    var string = "";
    newWords.reverse();

    newWords.forEach(function(b){
      string = string.concat(" " + b);
    });

   $("#add").text(string);


   var ranks = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
   var suits = ["clubs","hearts","diamonds","spades"];

   suits.forEach(function(suite){
     ranks.forEach(function(rank){
       $("#cards").append("<li>" + rank + " of " + suite + "</li>");
     });
   });




  event.preventDefault();
  });
});
