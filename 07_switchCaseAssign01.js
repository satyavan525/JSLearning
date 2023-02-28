function monthOfYear(monthNumber){
    switch (monthNumber) {
        case 1:
            console.log(`First month is January`);
            break;
        case 2:
            console.log(`Second month is February`);
            break;
        case 3:
            console.log(`First month is March`);
            break;
        case 4:
            console.log(`First month is April`);
            break;
        case 5:
            console.log(`First month is May`);
            break;
        case 6:
            console.log(`First month is June`);
            break;
        case 7:
            console.log(`First month is July`);
            break;
        case 8:
            console.log(`First month is August`);
            break;
        case 9:
            console.log(`First month is September`);
            break;
        case 10:
            console.log(`First month is October`);
            break;
        case 11:
            console.log(`First month is November`);
            break;
        case 12:
            console.log(`First month is December`);
            break;
    
        default:
            console.log(`Please provide valid data, you entered :${monthNumber}`);
            break;
    }
    console.log(`End of switch case for ${monthNumber}`);
}
console.log(`*******************************Assignment01************************************`);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);