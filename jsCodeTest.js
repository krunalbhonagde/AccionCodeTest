// You are given 3 coins of value 1, 3 and 5. You are also given a total which you have to arrive at. Find the minimum number of coins to arrive at it.
function getCoin(coinsArray, noOfCoins, arriveVal) {

	if(arriveVal == 0) {
		return 1;
	};
	if(arriveVal < 0) {
		return 0;
	};
	if(noOfCoins<=0 && arriveVal>=1) {
		return 0;
	};

	return getCoin(coinsArray, noOfCoins-1, arriveVal) + getCoin(coinsArray, noOfCoins, arriveVal-coinsArray[noOfCoins-1]);
};

//To test the above code
// var conArr = [1,3,5];
// var conNos = conArr.length;
// getCoin(conArr, conNos, 4);
//Output: 2


// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 
function LongestWord(sen) {

    var arrayofWords = sen.split(" ");
    var longest = 0;
    var word = null;
    for (i=0; i<arrayofWords.length; i++) {
        if (arrayofWords[i].length>longest) {
        var longest = arrayofWords[i].length;
        var word = arrayofWords[i];
        }
    }
    return word;     
};

//To test the above code
//LongestWord("parameter being passed")
//Output: "parameter"



// Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. Please don’t use any inbuilt function.
function FirstReverse(str){

    let reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }    
    return reversed;
};

//To test the above code
//FirstReverse("Hello World and Coders")
//Output: "sredoC dna dlroW olleH"