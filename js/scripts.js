var titleCase = function(word) {
    // var firstLetter = word.toTitleCase()
    var arrayOfWord = word.split("");
    arrayOfWord[0]= arrayOfWord[0].toUpperCase();
    var wordCase= arrayOfWord.join("");

return wordCase;

};
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

// var titleCaseThree= function(stringToCaps){
//
//     var arrayOfWords=stringToCaps.split(" ");
//     var returnedString=[];
//     var articles = ["and", "if", "or", "else", "in", "to"];
//     arrayOfWords.forEach(function(word) {
//         if()
//         var arrayLetters = word.split("");
//         arrayLetters[0] = arrayLetters[0].toUpperCase();
//         var wordCase = arrayLetters.join("");
//          returnedString.push(wordCase);
//
//     });
//
//      var wordString = returnedString.join(" ");
//     return wordString;
//
// };
var article= function (word){

    var articles = ["and", "if", "or", "else", "in", "to"];
    var wordreturned= "";

    if($.inArray(word, articles) > 0) {

        var arrayOfWord = word.split("");
        arrayOfWord[0]= arrayOfWord[0].toUpperCase();
        var wordCase= arrayOfWord.join("");

        wordreturned+= wordCase;
        wordreturned+=word;


    }
    else {

        wordreturned+=word;
    }

    return wordreturned;

};
