function maxOfThree(a, b, c) {
  if(a > b && a > c)
    return a
  else if
    (b > a && b > c)
    return b
  else
    return c
}
console.log(maxOfThree(103, 87, -3));


// solution 1
function isVowel(letter) {
  var vowels = ["a", "i", "o", "u", "e"];

  for(var i in vowels) {
    if( letter === vowels[i]) {
      return true;
  } else {

  }
}
return false;

};
console.log(isVowel("k"));

// solution 2
function isVowel(letter) {
  var vowels = ["a", "i", "o", "u", "e"];

    for(var i = 0; i < vowels.length; i ++) {
      if(letter === vowels[i]) {
        return true;
    } else {

    }
  }
  return false;
};
console.log(isVowel("b"));


//this solution adds 'o' between every letter
function translate(str) {
  var q = "";
  str.split("").map(function(p, c) {
    if(p != ' ') q += p + 'o' + p;
      else q += " ";
  })

  return q;

}

// var phrase = 'this is fun',
//   x = translate(phrase);

console.log(translate('this is fun!'))

// this solution will add it only between consenents.
var translate = function(text) {
  var string = text.toLowerCase();
  var vowels = ["a", "e", "i", "o", "u", " "];
  var y = ""; //always starting a string with zero and keep adding after each for loop iteration.
  for (i = 0; i < string.length; i++) {
     var current = string.charAt(i);
    if (vowels.indexOf(current) != -1) {
        y = (y + (current));
    } else {
        y = (y + (current + "o" + current));
    }
  }
  return y;
}

console.log(translate("this is fun"));

// 5. Define a function sum() and a function multiply()
// that sums and multiplies (respectively) all the numbers
// in an array of numbers. For example, sum([1,2,3,4]) should
// return 10, and multiply([1,2,3,4]) should return 24.


//solution 2 using .reduce() method in JS
//method applies a function against an accumulator
// and each element in the array (from left to right)
// to reduce it to a single value.
var sum = [1, 2, 3].reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(sum); // 6

//solution 3 using arrow function and doing it in one
var sum = [1, 2, 3].reduce((a, b) => a + b, 0);
console.log(sum); // 6


function multiply (numbers) {
  var sum = 1;
  for(var i = 0; i < numbers.length; i++) {
    sum = sum * numbers[i];
  }
  return sum;
}

console.log (multiply([1,2,3,4,5,6])); //720

//solution 2 for multiply function is to use .reduce like in sum
var multiply = ([1,2,3,4,5,6]).reduce((a, b) => a * b);
console.log(multiply); //720


// 6. Define a function reverse() that computes the reversal
// of a string. For example, reverse("jag testar") should
// return the string "ratset gaj".
function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("here is my string")); //gnirts ym si ereh

// 7. Represent a small bilingual lexicon as a Javascript
// object in the following fashion {"merry":"god", "christmas":"jul",
// "and":"och", "happy":gott", "new":"nytt", "year":"år"}
// and use it to translate your Christmas cards from English into Swedish.

var lexicon = {
  "merry":"god",
  "christmas":"jul",
  "and":"och",
  "happy":"gott",
  "new":"nytt",
  "year":"år"
};
var str = prompt("write the phrase here");

var result = str.split(" ");
var realResult = " ";
for(i = 0; i < str.length; i ++) {
  realResult += (lexicon[result[i]] || result[i]) + " ";
}

console.log(realResult);


//8.

function maxLength(words) {
  return words.length;
}

console.log(maxLength("The quick brown fox jumped over the lazy dog")); //should be a large number


function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

function biggest(str) {
  var strSplit = str.split(" ");
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++) {
    if(strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}
console.log(biggest("the brown fox is very beautiful"));

function filterLongWords(array, int) {
  var int = 8;
  var array = [];
  return array > int;

}

var filtered = ["sunny", "windy", "snowy", "rainy", "shitty in general"].filter(filterLongWords);


function filterLongWords(str, int) {
  var bigger = str.length;
  var longestWord = [];
  for(i = 0; i < bigger; i ++) {
    if(str[i].length > int) {
      longestWord[longestWord.length] = str[i];
    }
  }

  return longestWord;
}

console.log(filterLongWords("alabama", "newyork", "boston", "philadelphia"));


function charFreq(str) {
  var list = {};
  for(i = 0; i < str.lenght; i ++) {
    if(str.charAt(i) in list)
      list[str.charAt(i) += +1];
    else
      list[str.charAt(i) += 1];
  }
  return list;
}
console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));
