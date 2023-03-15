class Bank {
  constructor(bank_name, location, account_no, ifsc, interest_rate) {
    this.bank_name = bank_name;
    this.location = location;
    this.account_no = account_no;
    this.ifsc = ifsc = ifsc;
    this.interest_rate = interest_rate;
  }
}
const axis_bank = new Bank(
  "Axis Bank",
  "Delhi",
  "456123789",
  "AXIS0012",
  "12.5"
);
const sbi_bank = new Bank("SBI Bank", "Kolkata", "741258", "SBI00147", "15");
const icic_bank = new Bank(
  "ICIC Bank",
  "Banglore",
  "7898745",
  "ICIC0096",
  "12"
);
const kotak_bank = new Bank(
  "KOTAK Bank",
  "Chennai",
  "9874586",
  "KOTAK0089",
  "10"
);
const hdfc_bank = new Bank(
  "HDFC Bank",
  "Kerala",
  "6586133",
  "HDFC0078",
  "15.5"
);
const panjab_bank = new Bank(
  "Panjab Bank",
  "Tamilnadu",
  "58745316",
  "PAN0057",
  "17"
);

const setOfBank = new Set();
setOfBank.add(axis_bank);
setOfBank.add(sbi_bank);
setOfBank.add(icic_bank);
setOfBank.add(kotak_bank);
setOfBank.add(hdfc_bank);
setOfBank.add(panjab_bank);
console.log(`--------------------first-----------------------------------`);
console.log(axis_bank);
console.log(sbi_bank);
console.log(icic_bank);
console.log(kotak_bank);
console.log(hdfc_bank);
console.log(panjab_bank);
console.log(`-------------------------second------------------------------`);
console.log(setOfBank);
console.log(`--------------------------third--------------------------------`);
for (const element of setOfBank) {
  console.log(`Bank Name: ${element.bank_name}, Location: ${element.location}`);
}
