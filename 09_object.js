let student={
    firstName:"Satyavan",
    lastName:"Lokhande",
    collegeName:"ABC",
    isWorking:true,
    age:22,
    id:1234
}
console.log(student);
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
teacher.firstName="ABC";