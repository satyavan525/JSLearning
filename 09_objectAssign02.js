let sbiBank = {
    bankName : "SBI Bank",
    location: "Pune",
    account: 84769412572,
    ifsc: "SBIN0000123",
    interestRate: 8.7,
    showDetails: function() {
        console.log(`Bank Name:${sbiBank.bankName}, Location:${sbiBank.location}, Account No:${sbiBank.account},IFSC Code:${sbiBank.ifsc}, Intrest Rate:${sbiBank.interestRate}`);
    }
}
let axisBank = {
    bankName: "Axis Bank",
    location: "Sangli",
    account: 9874565121575,
    ifsc: "AXIS0000789",
    interestRate: 7.9,
    showDetails: function() {
        console.log(`Bank Name:${axisBank.bankName}, Location:${axisBank.location}, Account No:${axisBank.account},IFSC Code:${axisBank.ifsc}, Intrest Rate:${axisBank.interestRate}`);
    }
 }
let hdfcBank = {
    bankName: "HDFC Bank",
    location: "Solapur",
    account: 68457912377,
    ifsc: "HDFC00078654",
    interestRate: 11.08,
    showDetails: function() {
        console.log(`Bank Name:${hdfcBank.bankName}, Location:${hdfcBank.location}, Account No:${hdfcBank.account},IFSC Code:${hdfcBank.ifsc}, Intrest Rate:${hdfcBank.interestRate}`);
    }
 }
let yesBank = {
    bankName: "Yes Bank",
    location: "Mumbai",
    account: 784561238,
    ifsc: "YESB0000147",
    interestRate: 15.7,
    showDetails: function() {
        console.log(`Bank Name:${yesBank.bankName}, Location:${yesBank.location}, Account No:${yesBank.account},IFSC Code:${yesBank.ifsc}, Intrest Rate:${yesBank.interestRate}`);
    }
 }
sbiBank.showDetails();
axisBank.showDetails(); 
hdfcBank.showDetails();
yesBank.showDetails();                