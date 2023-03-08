const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`*********1***************`);
console.log(`The total elements in array is :${arrayNumbers.length}`);
console.log(`**********2*************`);
console.log(`First elemet is:${arrayNumbers[0]}`);
console.log(`Last element is :${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`*************3*************`);
console.log(`The third last element is :${arrayNumbers[arrayNumbers.length-3]}`);
console.log(`************4***************`);
console.log(`Even element in given array`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if(element%2==0){
        console.log(element);
    }
}
console.log(`************5***************`);
console.log(`Odd element in array`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2!=0) {
        console.log(element);
    }
    
}
console.log(`**********6*****************`);

let sum=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    
    if (index%2==0) {
        sum=sum+arrayNumbers[index];
    }
    
}
console.log(`sum of even positioned elements is:${sum}`);
console.log(`**************7*****************`);

let add=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    
    if (index%2!=0) {
        add=add+arrayNumbers[index];  
    }
}
console.log(`sum of odd positioned elements is:${add}`);
console.log(`************8***********`);
let sum1=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sum1=sum1+element;
}
console.log(`sum of all elements in array is:${sum1}`);
console.log(`****************9************`);
console.log(`numbers which are multiple of 5`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%5==0) {
        console.log(element);
        
    }
}
console.log(`***************10*************`);
console.log(`is number 115 available in array :${arrayNumbers.includes(115)}`);
console.log(`**************11**************`);
console.log(`is number 23 available in array :${arrayNumbers.includes(23)}`);
console.log(`**************12**************`);
console.log(`insert numbers 55,66 before index3`);
let result=arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);
console.log(`**************13**************`);
console.log(`delete 3 elements starting from index 4`);
let result1=arrayNumbers.splice(4,3);
console.log(arrayNumbers);
