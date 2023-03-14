const arrayNums = [20, 3, 4, 56, 90, 400, 49];
const clonedArray = arrayNums;
clonedArray.push(55, 66);
console.log(`-------------------------first---------------------------`);
console.log(`Original Array: ${arrayNums}`);
console.log(`Cloned Array: ${clonedArray}`);

const newArray = [...arrayNums];
arrayNums.push(10, 25);
console.log(`-----------------------------second-----------------------`);
console.log(newArray);
console.log(arrayNums);

const arrayEven = [2, 30, 14, 8];
const mergedArray = [...arrayNums, ...arrayEven];
console.log(`-------------------------------Third-------------------------`);
console.log(`After merging array:${mergedArray}`);

const employee_info = {
  emp_id: 27,
  emp_name: "John Doe",
  salary: {
    july_month: "40,000 INR",
    aug_month: "50,000 INR",
    jun_month: "65,000 INR",
  },
  address: {
    locality: {
      colony: "OM Vrindavan Society",
      street: "Kanch Pokli, 431202",
    },
    city: "Mumbai",
    state: "Maharastra",
    country: "India",
  },
  mobiles: ["+91 8600 3456 88", "1800 32", "+91 9096 5678 77"],
};
console.log(`------------------------------------fourth---------------------`);
console.log(
  `Locality: ${employee_info.address.locality.colony}, City: ${employee_info.address.city}, State: ${employee_info.address.state}, Country: ${employee_info.address.country}`
);
console.log(
  `------------------------------------fifth--------------------------`
);
console.log(`Mobile Numbers: ${employee_info.mobiles}`);

const newEmp = JSON.parse(JSON.stringify(employee_info));

newEmp.salary.july_month = "80,000 INR";

newEmp.address.country = "United Kingdom";

console.log(`-------------------------------sixth------------------`);

console.log(`Original Object: ${employee_info.salary.july_month}`);
console.log(`Cloned Object: ${newEmp.salary.july_month}`);
console.log(`--------------------------------------------------------`);
console.log(`Original Object: ${employee_info.address.country}`);
console.log(`Cloned Object: ${newEmp.address.country}`);
