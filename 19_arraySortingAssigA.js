const arrayRollNumbers= [113,45,56,11,32,45,109,799,56,45];
console.log(`----------------------first----------------------------------`);
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);
console.log(`----------------------second-----------------------------------`);
const sortArray= arrayRollNumbers.sort();
console.log(sortArray);
console.log(`-----------------------third-------------------------------------`);
arrayRollNumbers.sort((a,b) =>{
    return a>b ? 1 :-1;
});
console.log(arrayRollNumbers);
console.log(`---------------------fourth---------------------------------------`);
console.log(`Greatest Element : ${arrayRollNumbers[arrayRollNumbers.length-1]}`);
console.log(`-----------------------fifth-------------------------------------`);
console.log(`Smallest Element : ${arrayRollNumbers[0]}`);
console.log(`-----------------------sixth--------------------------------------`);
const removed=[... new Set(arrayRollNumbers)]
console.log(removed);
