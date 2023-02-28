var check_leap_year=function (leap_year) {
    if((typeof leap_year!="number")){
        console.log(`Please provide valid data, you entered :${leap_year}`);
        return;
    }
    
    if((leap_year%4==0) && (leap_year%100!=0)){
        console.log(`${leap_year} is a leap year`);
    }
    else if(leap_year%400==0){
        console.log(`${leap_year} is a leap year`);
    }
        else{
            console.log(`${leap_year} is not a leap year`);
        }
    
}
console.log(`************************************Second Assignment***********************`);
check_leap_year(2020);
check_leap_year(1999);
check_leap_year(1600);
check_leap_year(2022);
check_leap_year(1945);
check_leap_year(null);
check_leap_year("Twenty Twenty");
check_leap_year(undefined);
check_leap_year(NaN);
check_leap_year(1750);