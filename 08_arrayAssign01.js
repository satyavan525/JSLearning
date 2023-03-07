const arraySeasonalFruits=["Banana", "Orange", "Apple", "Mango","Water Melon"];
console.log(`******Log first and last element************`);
console.log(`first element :${arraySeasonalFruits[0]}`);
console.log(`last element :${arraySeasonalFruits[arraySeasonalFruits.length-1]}`);


console.log(`*******Add element-> Papaya before banana*******`);
arraySeasonalFruits.unshift("Papaya");
console.log(arraySeasonalFruits);


console.log((`**********remove Mango from array`));
arraySeasonalFruits.splice(4,1);
console.log(arraySeasonalFruits);


console.log(`**********add pineapple at last position*******`);
arraySeasonalFruits.push("Pineapple");
console.log(arraySeasonalFruits);


console.log(`**********insert dragon fruit before water melon******`);
arraySeasonalFruits.splice(4,0,"Dragon Fruit");
console.log(arraySeasonalFruits);


console.log(`***********replace Orange with Kiwi********`);
arraySeasonalFruits.splice(2,1,"Kiwi");
console.log(arraySeasonalFruits);

console.log(`********log element from index 1 to 4********`);
var result=arraySeasonalFruits.slice(1,4);
console.log(result);


console.log(`********select only last three element using length property**************`);
var result1=arraySeasonalFruits.slice(arraySeasonalFruits.length-3);
console.log(result1);