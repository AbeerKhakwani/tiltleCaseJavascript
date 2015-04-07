




var titleCaseThree= function(stringToCaps)
{
    var arrayOfWords=stringToCaps.split(" ");
    var returnedString=[];
    var articles = ["if", "or", "and", "else", "in", "to","the"];
    arrayOfWords.forEach(function(word, index){
        var length = arrayOfWords.length - 1;

      if((articles.indexOf(word) !== -1) && (index != 0) &&  (index !== length))
            {
                returnedString.push(word);
            }
      else
            {
                var arrayLetters = word.split("");
                arrayLetters[0] = arrayLetters[0].toUpperCase();
                var wordCase = arrayLetters.join("");
                returnedString.push(wordCase);
            }
});
    var wordString = returnedString.join(" ");
     return wordString;
};


$(document).ready(function() {
    $("form#title-case").submit(function(event)
{
        var title = $("input#titleCaseThree").val();
        var result = titleCaseThree(title);

    $(".UpperCase").text(result);

    $("#result").show();
    event.preventDefault();
});


});
