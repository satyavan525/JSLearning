function squareOfWorldLength(word) {
  console.log(`Given string is ${word}`);
  console.log(`Length of string is ${word.length}`);
  console.log(`Square of length is ${word.length ** 2}`);
}
console.log("*****************1**********************");
squareOfWorldLength("JavaSrcipt");
console.log("***************************************");
squareOfWorldLength("Google Chrome");
console.log("***************************************");
squareOfWorldLength("Developer Smart");
console.log("*****************2**********************");
function divisionMultiple() {
  var str = "I am Angular Developer";
  console.log(`Division result is ${str.length / str.split(" ").length}`);
  console.log(
    `Multiplication  result is ${str.length * str.split(" ").length}`
  );
}
divisionMultiple();
