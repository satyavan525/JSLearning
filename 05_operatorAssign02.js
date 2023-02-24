function greaterNumber(num1,num2){
    var result=num1>num2 ? num1 : num2;
    console.log(`Greater number is ${result}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

function isEvenOrOddNum(num3){
    var result1=num3%2==0 ? "True" : "False";
    return result1;
}

var res=isEvenOrOddNum(29);
console.log(`Is 29 is Even ${res}`);
var res=isEvenOrOddNum(44);
console.log(`Is 44 is Even ${res}`);
var res=isEvenOrOddNum(0);
console.log(`Is 0 is Even ${res}`);
var res=isEvenOrOddNum(101);
console.log(`Is 101 is Even ${res}`);

function wordLength(word){
    var result2=word.length;
    var result3=result2%2==0 ? "Even" : "Odd";
    return result3;
}
var result4=wordLength("JavaScript");
console.log(`Length of JavaScript is :${result4}`);
var result4=wordLength("Developer");
console.log(`Length of Developer is :${result4}`);
var result4=wordLength("Google");
console.log(`Length of Google is :${result4}`);