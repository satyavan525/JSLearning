let professor ={
    firstName:"ABC",
    lastName:"XYZ",
    age:30,
    id:12345,
    city:"Pune",
    mobile:987456123,
    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing"
    },
     certificates:["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming"],
    totalDegrees:function(){
        return`engineering:${this.degrees.engineering} PHD:${this.degrees.PHD}`
    }
};
console.log(`***********first***********`);
console.log(professor);

console.log(`***********second***********`);
console.log(professor.degrees);

console.log(`**************third***********`);
console.log(professor.certificates);
console.log(`*************fourth*************`);
let result=professor.totalDegrees();
console.log(`Total degrees of professor are:${result}`);
console.log(`**************fifth*************`);
professor.totalExperience="14 years";
console.log(`Total experience is:${professor.totalExperience}`);
console.log(`***************sixth**********`);
professor.mobile=123456789;
console.log(`modified mobile no is:${professor.mobile}`);
console.log(`************seventh********`);
let certificates=["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming"];
certificates.push("Oracle Certificate");
console.log(certificates);
console.log(`*************Eighth**********`);
console.log(`last element of array is:${certificates[certificates.length-1]}`);


    
