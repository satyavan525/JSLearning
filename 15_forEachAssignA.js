console.log(`----------------------------first------------------`);
const arrayNumbers=[1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
arrayNumbers.forEach((element, index) => {
    console.log(`Index: ${index}, Element: ${element}`);
});
console.log(`----------------------------second------------------`);
arrayNumbers.forEach(element => {
      if (element>0) {
        console.log(element);
      }
});
console.log(`----------------------------third--------------------`);
const negativeNumberArray=[];
arrayNumbers.forEach(element => {
    if (element<0) {
        negativeNumberArray.push(element);
    }
});
console.log(negativeNumberArray);
console.log(`-------------------------fourth-----------------------`);
arrayNumbers.forEach(element => {
          if (element%2==0) {
            console.log(element);
          }
});
console.log(`--------------------------fifth-------------------------`);
let sum=0;
arrayNumbers.forEach(element => {
    sum=sum+element;
});
console.log(sum);
console.log(`----------------------------sixth---------------------------`);
const evenIndexedElement=[];
arrayNumbers.forEach((element,index) => {
    if (index%2==0) {
        element =arrayNumbers[index];
        evenIndexedElement.push(element);
    }
});
console.log(evenIndexedElement);