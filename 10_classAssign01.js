class Vehicle{
    constructor(carName, price, colour, type, mileage){
              this.carName=carName;
              this.price=price;
              this.colour=colour;
              this.type=type;
              this.mileage=mileage;
    }
}
const tata=new Vehicle("Nexon", "7.79 Lakh", "Blue", "SUV", "24 kmpl");

const mahindra=new Vehicle("Scorpio Classic", "12.64 Lakh", "Black", "SUV", "15 kmpl");

const maruti=new Vehicle("Swift", "8.98 Lakh", "Red", "Sedan", "23.76 kmpl");

const hundai=new Vehicle("Creta", "10.8 Lakh", "White", "SUV", "16.8 Kmpl");

const honda=new Vehicle("Amaze", "6.89 Lakh", "Silver", "Sedan", "18.6 kmpl");
console.log(`***************first**************`);
console.log(tata);
console.log(mahindra);
console.log(maruti);
console.log(hundai);
console.log(honda);
console.log(`-------------------Traversing arrayOfVehicles-----------------`);
let arrayOfVehicle=[tata, mahindra, maruti, hundai, honda];
for (const element of arrayOfVehicle) {
    console.log(`Car Name:${element.carName}, Price:${element.price}, Colour:${element.colour}, Type:${element.type}, Mileage:${element.mileage}`);
}

class College{
       constructor(collegeName, city, faculty, fees, student){
                  this.collegeName=collegeName;
                  this.city=city;
                  this.faculty=faculty;
                  this.fees=fees;
                  this.student=student;
       }
}
const sangola=new College("Sangola College Sangola", "Sangola", "Computer Science", "20000", 5000);
const atpadi=new College("Atpadi College", "Atpadi", "Arts", "10000","1000");
const sangli=new College("S.M. College", "Sangli", "Science", "15000","500");
const solapur=new College("Solapur University", "Solapur", "Commerce", "10000","1500");

console.log(`************second**************`);
console.log(sangola);
console.log(atpadi);
console.log(sangli);
console.log(solapur);
function traverseObject(object){
   for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(`${key}: ${element}`);
        
    }
    
   }
   console.log(`-------------------------`);
}
console.log(`***********third***************`);
traverseObject(sangola);
traverseObject(sangli);
traverseObject(atpadi);
traverseObject(solapur);

console.log(`***********fourth**************`);

let num=11;
let isPrime=false;
let i=2;


    if(num%i==0&&i<num){
        isPrime=false;
    
    }
    if(isPrime=true){
        console.log(`${num} is prime number`);
    }
    else{
        console.log(`${num} is not a prime number`);
    }


