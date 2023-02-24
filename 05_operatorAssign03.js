function maleMarriageEligibility(gender, age, boyName){
    var result=gender=="Male" && age>=21 ? `Hey ${boyName} you are eligible for Marriage`
    :`${boyName} you are not eligible for Marriage`;
    return result;
}
var result=maleMarriageEligibility("Male", 25, "Billgates");
console.log(result);
var result=maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(result);

console.log("*********************************************************");

function femaleMarriageEligibility(gender, age, girlName){
    var res=gender=="Feamle" && age>=18 ? `Hey ${girlName} you are eligible for Marriage `
    :`${girlName} you are not eligibleb for Marriage`;
    return res;

}
var res=femaleMarriageEligibility("Feamle", 16, "Jenifer");
console.log(res);
var res=femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(res);
