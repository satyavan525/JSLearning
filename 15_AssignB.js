class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}

const emp_anil=new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha=new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi=new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali=new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika=new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny=new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi=new Employee(99, "Mahesh", "HR", 85000, "Infy");

console.log(`-------------------object created-------------------------------------`);
console.log(emp_anil);
console.log(emp_radha);
console.log(emp_rishi);
console.log(emp_sonali);
console.log(emp_monika);
console.log(emp_viny);
console.log(emp_mahi);
console.log(`----------------------array created------------------------------------`);
const array_emloyees=[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(array_emloyees);
console.log(`-----------------------first-----------------------------------------`);
for (let index = 0; index < array_emloyees.length; index++) {
    const element = array_emloyees[index];
    if(element.emp_company=="TCS"){
        console.log(`Employee Name:${element.emp_name}, Company Name: ${element.emp_company}`);
    }
    
}
console.log(`-----------------------second-------------------------------------------`);
for (let index = 0; index < array_emloyees.length; index++) {
    const element = array_emloyees[index];
    if(element.emp_dept=="Finance"){
        console.log(`Employee Name working in finance department: ${element.emp_name}`);
    }
}
console.log(`-----------------------third-------------------------------------------`);
for (let index = 0; index < array_emloyees.length; index++) {
    const element = array_emloyees[index];
    if(element.emp_name.startsWith("R"))
    console.log(`Employee Name start with R: ${element.emp_name}`);
    
}
console.log(`-----------------------fourth-------------------------------------------`);
for (let index = 0; index < array_emloyees.length; index++) {
    const element = array_emloyees[index];
    if (element.emp_salary>75000) {
        console.log(`Employee Name: ${element.emp_name}, Company Name: ${element.emp_company}, Salary: ${element.emp_salary}`);
    } 
}
console.log(`-----------------------fifth-------------------------------------------`);
for (let index = 0; index < array_emloyees.length; index++) {
    const element = array_emloyees[index];
    if(element.emp_salary>=50000 && element.emp_dept=="IT")
    console.log(element);
}
console.log(`-----------------------sixth-------------------------------------------`);
for (let index = 0; index < array_emloyees.length; index++) {
    const element = array_emloyees[index];
    if (element.emp_company=="Infy") {
        console.log(element);
    }
}