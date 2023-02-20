function showfullName() {
  console.log("My full name is : Satyavan Vilas Lokhande");
}
showfullName();
function showAge(age) {
  console.log("My age is :", age);
}
showAge(22);
function fullName() {
  var name = "Satyavan Lokhande";
  return name;
}
var fName = fullName();
console.log(fName);

function sumOfNumber(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  return sum;
}
var sumResult = sumOfNumber(10, 20, 30);
console.log(sumResult);

var num1 = 100;
var num2 = 200;

var str1 = "Sweety"; // Cutey
var str2 = "Cutey"; // Sweety

var name1 = "Anirudh";
var name2 = "Rohit";

function swapVariables(value1, value2) {
  console.log("Before Swap: ", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After Swap: ", value1, value2);
  return "Swapping variables successfully completed";
}

var swapResult = swapVariables(num1, num2); // Function call or Function invoke
console.log(swapResult);

var swapResult2 = swapVariables(str1, str2);
console.log(swapResult2);
