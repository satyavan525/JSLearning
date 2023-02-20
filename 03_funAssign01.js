function welcome(){
    console.log("welcome to Java Script Programming");
}
function city(){
    console.log("My favorate city is Pune");
}
function personalDetails(firstName, lastName, collegeName){
    console.log("Satyavan", "Lokhande", "Sangola College Sangola");
}
function swapValuesDude(value1, value2){
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log(value1,value2);
}
function addThreeValues(num1, num2, num3){
    var addition=num1+num2+num3;
    return addition;
}
console.log(".........................1................................");
welcome();
city();
console.log(".........................2................................");
personalDetails();
console.log(".........................3................................");
swapValuesDude("Virat", "Anushka");
swapValuesDude("1000", "2000");
console.log(".........................4................................");
var result=addThreeValues(10.23, 600, 40);
console.log(result);
var result=addThreeValues("Hello ", "Good ", "Morning ");
console.log(result);