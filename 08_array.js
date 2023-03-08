var arrayOfNumbers=[4,5,9,8,6,7];
console.log(arrayOfNumbers);
console.table(arrayOfNumbers);
const totalNumberOfElement =arrayOfNumbers.length;
console.log(`Total numbers of elements in array is :${arrayOfNumbers}`);

arrayOfNumbers.push(9);//element add at last
console.log(arrayOfNumbers);

console.log(`*******************`);

arrayOfNumbers.unshift(2);//element add at first
console.log(arrayOfNumbers);

console.log(`*************************`);

arrayOfNumbers.pop();//remove element at last
console.log(arrayOfNumbers);

console.log(`********************`);

arrayOfNumbers.shift();//remove elenet at first
console.log(arrayOfNumbers);

const arrayFromIndex3=arrayOfNumbers.slice(3);
console.log(arrayFromIndex3);

//const subArray=arrayOfNumbers.slice(1,4);//making subarray
//

//console.log(subArray);

//const splicedArray=arrayOfNumbers.splice(2);
//console.log(splicedArray);
//console.log(arrayOfNumbers);

const removeSecond=arrayOfNumbers.splice(1,1);
console.log(removeSecond);
console.log(arrayOfNumbers);

var arrayNumbers=[1,2,4,5,6,7,8,9];
const insertNumber=arrayNumbers.splice(2,0,3);
console.log(arrayNumbers);

arrayNumbers.splice(4,0,11,12,13);
console.log(arrayNumbers);

arrayNumbers.splice(2,2,50,60);
console.log(arrayNumbers);

console.log("===== Traversing  ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
let sum = 0; // 10
for (let index = 0; index < arrayOfNumbers.length; index++) {//1
    const element = arrayOfNumbers[index];
   sum = sum + element;// sum = 0 + 20
    // console.log(element);
}
console.log(`Sum of an Array element is: ${sum}`);