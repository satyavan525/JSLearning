const bankSbi = {
  bankName: "SBI Bank",
  accountNo: 1789451334,
  ifscCode: "SBI000012",
  branch: "Hadapsar",
};
const bankLocation = {
  street: "R.G Road",
  city: "Pune",
  pinCode: 147256,
};

const newBank = Object.assign(bankSbi, bankLocation);
console.table(newBank);

const rateOfInterest = {
  homeLoneInterest: 14,
  personalLoanInterest: 12,
  dueInterest: 10,
};

console.log(`-------------------second task------------------------`);

const sbiDetails = Object.assign(newBank, rateOfInterest);
console.table(sbiDetails);

console.log(`--------------------third task---------------------------`);
for (const key in sbiDetails) {
  if (Object.hasOwnProperty.call(sbiDetails, key)) {
    const element = sbiDetails[key];
    console.log(key, element);
  }
}
