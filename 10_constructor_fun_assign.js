function Bank(bankName, location, ifscCode, branchCode){
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;
    this.show=function(){
        console.log(`Bank Details:- Bank Name: ${bankName}, Location: ${location}, IFSC Code: ${ifscCode}, Branch Code: ${branchCode}`);
    }

}
const yesBank= new Bank("Yes Bank", "Pune", "YES0000123", "0000008");
const sbiBank= new Bank("STATE BANK OF INDIA", "Mumbai", "SBI000475", "0000042");
const mahBank= new Bank("Maharastra Bank", "Atpadi", "MAH000945", "000037");
const axisBank= new Bank("Axis Bank", "Dighanchi", "AXIS00012", "000745");

yesBank.show();
sbiBank.show();
mahBank.show();
axisBank.show();

console.log(``);

Bank.prototype.openTime="9 AM IST";
Bank.prototype.closeTime="6 PM IST";

console.log(`####################################################################################`);
console.log(``);
console.log(`STATE BANK OF INDIA Opens On: ${sbiBank.openTime} and Closes On:${sbiBank.closeTime}`);
console.log(``);
console.log(`----------------------------------------------------`);
console.log(`AXIS Bank Opens On: ${axisBank.openTime} and Closes On:${axisBank.closeTime}`);
console.log(``);
console.log(`######################################################################################`);
console.log(``);
console.log(`Bank Name: ${yesBank.bankName} Branch Code: ${yesBank.branchCode} Opening Time: ${yesBank.openTime}`);