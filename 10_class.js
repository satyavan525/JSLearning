class Bank {
    constructor(bankName, location, account, ifsc, interestRate ){
            this.bankName = bankName;
                    this.location = location;
                            this.account = account;
                                    this.ifsc = ifsc;
                                            this.interestRate = interestRate;
                                                }
}
const sbiBank = new Bank("SBI Bank", "Wakad", "62514897564", "SBIN0004598",10.75 );
console.log(sbiBank);

const axisBank = new Bank("Axis Bank", "Bajirao Road, Pune", "4597863258", "AXIS4567893", 10.50);
console.log(axisBank);

for (const element of arrayOfBanks) {
    console.log(`${element.bankName}, ${element.location}, ${element.account}, ${element.interestRate}`);
}
//const array = [1, 2, 3, 4, 8, 9];
// for (const value of array) {
//    console.log(value); 
// }