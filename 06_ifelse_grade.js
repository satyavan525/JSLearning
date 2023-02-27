function voteEligibility(age){
    if(age<=0 || age>=100 || age=="undefined" || age=="null"){
        console.log(`You have entered invalid age is ${age}`);
        return ;
    }
    if(age>=18){
        console.log(`Your age is ${age} and you are eligible for voting`);
    }
    else{
        console.log(`your age is ${age} and you are not eligible for voting`);
    }
}

console.log("***********************1***************************************");

voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility("undefined");
voteEligibility("null");

console.log("***********************2***************************************");

function gradeCalculation(marks){
    if(marks>=90 && marks<=100){
        console.log(`Funta!stic marks: ${marks}, Your grade is A+`);
        return;
    }
    if(marks>=75 && marks<90){
        console.log(`Excellent Marks: ${marks}, Your grade is A`);
        return;
    }
    if(marks>=50 && marks<75){
        console.log(`Good Marks: ${marks}, Your grade is B`);
        return;
    }
    if(marks>=35 && marks<50){
        console.log(`Marks is ${marks}, Your grade is C, Need improvement`);
        return;
    }
    if(marks<=0 || marks>=100 || typeof marks!="number"){
        console.log(`Please provide the valid marks, you entered :${marks} `);
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation("NaN");
gradeCalculation("null");