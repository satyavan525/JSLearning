let employee ={
    id: 12314,
    name: "Satyavan",
    city: "Pune",
    pin: 415315

};

for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key, element);
    }
}
const keysOfEmployee = Object.keys(employee);
console.log(keysOfEmployee);

const valuesOfEmployee = Object.values(employee);
console.log(valuesOfEmployee);

const entriesOfEmployee = Object.entries(employee);
console.log(entriesOfEmployee);

console.log("==== in operator =====");
 const isIdAvailable = "id" in employee;
 console.log(isIdAvailable);


 const player = {
    fullName: "Virat Kohli",
    totalCenturies : 46,
    isMarries: true
}
Object.freeze(player);
player.totalVicket = 120; //Adding new property - Not allowed as object is freezed
delete player.totalCenturies;// deleting property - Not allowed as object is freezed
player.fullName = "King Kohli"; // Updating existing property - Not allowed as object is freezed

console.table(player);


const student = {
    firstName: "Elon",
        lastName: "Musk",
            age: 54
            } 
            const address = {
                country : "US",
                    city : "Silicon Valley",
                        PIN: "QA2345"
                        }
// First way 
const mergedObject = Object.assign({}, student, address);
console.table(mergedObject);

// Second way 
const newObject = {};
Object.assign(newObject, student, address);
console.table(newObject);

//  Third way
Object.assign(student, address);
console.table(student);

//  Fourth way
Object.assign(address, student);
console.table(address);


let sbiBank = {
    bankName : "sbiBank",
        location: "Narhe",
            account: 62514897564,
                ifsc: "SBIN0004598",
                    interestRate: 10.75
                    }
let axisBank = {
    bankName: "Axis",
        location: "Bajirao Road, Pune",
            account: 4597863258,
                ifsc: "AXIS4567893",
                    interestRate: 12.5
                    }
let hdfcBank = {
    bankName: "hdfc",
        location: "Sinhgad road",
            account: 4593587569,
                ifsc: "HDFC000489",
                    interestRate: 11.79
                    }
let yesBank = {
    bankName: "YesBank",
        location: "Kothrud Pune",
            account: 4568792581,
                ifsc: "YESB0214597",
                    interestRate: 14.5,
                    }
const arrayOfBanks = [sbiBank, axisBank, hdfcBank, yesBank ];

for (let index = 0; index < arrayOfBanks.length; index++) {
    const element = arrayOfBanks[index];
        console.log(`${element.bankName}, ${element.location}, ${element.account}, ${element.interestRate}`);
        }
