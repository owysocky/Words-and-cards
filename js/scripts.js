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



  event.preventDefault();
  });
});
