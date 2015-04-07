

var titleCaseTwo= function(stringToCaps){

    var arrayOfWords=stringToCaps.split(" ");
    var returnedString=[];
    arrayOfWords.forEach(function(word) {
        var arrayLetters = word.split("");
        arrayLetters[0] = arrayLetters[0].toUpperCase();
        var wordCase = arrayLetters.join("");
         returnedString.push(wordCase);

    });

     var wordString = returnedString.join(" ");
    return wordString;
};



var titleCaseThree= function(stringToCaps)
{
    var arrayOfWords=stringToCaps.split(" ");
    var returnedString=[];
    var articles = ["if", "or", "and", "else", "in", "to"];
    arrayOfWords.forEach(function(word){
        if($.inArray(word, articles) >= 0) {
            returnedString.push(word);
            }
        else {
            var arrayLetters = word.split("");
            arrayLetters[0] = arrayLetters[0].toUpperCase();
            var wordCase = arrayLetters.join("");
            returnedString.push(wordCase);

        }

    });
    var wordString = returnedString.join(" ");
     return wordString;
};
