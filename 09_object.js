let student={
    firstName:"Satyavan",
    lastName:"Lokhande",
    collegeName:"ABC",
    isWorking:true,
    age:22,
    id:1234,
    address: {
        pin:41315,
        city: "pune",
     
      },
      
      show: function(){
        console.log(`i am show function`);
      },
      addressDetails: function(){
        return `Address is: Street ${this.address.street}, City ${this.address.city}, PIN ${this.address.PIN}`
     }
     
    };
    student.show();
    let resultAddress = student.addressDetails();
console.log(resultAddress);
      
console.log(typeof student);

console.log(student);
console.log(typeof student);
// . Dot Notation
console.log(student.firstName);

// [] Notation
console.log(student["lastName"]);

let collegeName="COEP PUNE";
console.log(student.age);
student.city="Mumbai";
console.table(student);
student.country="India";
delete student.isWorking;
console.table(student);
let pin=431205;
console.log(student.address);
student.marks = {
    math: 80,
    physics: 60,
    drawing: 70
}
console.table(student);