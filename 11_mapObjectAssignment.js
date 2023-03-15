class Bank{
    constructor(bankName, location, accountNo, ifsc, interestRate){
             this.bankName=bankName;
             this.location=location;
             this.accountNo=accountNo;
             this.ifsc=ifsc=ifsc;
             this.interestRate=interestRate;
    }
}
const axis_bank= new Bank("Axis Bank", "Mumbai", "55874521", "AXIS0078", "11");
const sbi_bank= new Bank("SBI Bank", "Sangola", "88746312", "SBI00023", "13");
const icic_bank= new Bank("ICIC Bank", "Dighanchi", "1479315", "ICIC00001", "13.5");
const kotak_bank= new Bank("KOTAK Bank", "Atpadi", "86748531", "KOTAK00020", "10.6");
const hdfc_bank= new Bank("HDFC Bank", "Pune", "36784512", "HDFC000012", "15");
const panjab_bank= new Bank("Panjab Bank", "Satara", "68475123", "PAN0015", "16");

const mapOfBanks= new Map();
mapOfBanks.set(axis_bank.accountNo, axis_bank);
mapOfBanks.set(sbi_bank.accountNo, sbi_bank);
mapOfBanks.set(icic_bank.accountNo, icic_bank);
mapOfBanks.set(kotak_bank.accountNo, kotak_bank);
mapOfBanks.set(hdfc_bank.accountNo, hdfc_bank);
mapOfBanks.set(panjab_bank.accountNo, panjab_bank);
 console.log(`--------------------------first---------------------`);
 console.log(axis_bank);
 console.log(sbi_bank);
 console.log(icic_bank);
 console.log(kotak_bank);
 console.log(hdfc_bank);
 console.log(panjab_bank);
 console.log(`------------------------second-----------------------`);
 console.log(mapOfBanks);
 console.log(`------------------------third-------------------------`);
const keysOfMapBank=mapOfBanks.keys();
 for (const key of keysOfMapBank) {
    const element=mapOfBanks.get(key);
    console.log(`Bank Name: ${element.bankName}, Account No: ${element.accountNo}, Interest Rate: ${element.interestRate}`);
 }
