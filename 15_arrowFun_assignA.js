const greet=()=>{
    console.log(`Good Morning, Today is Monday`);
}
console.log(`-------------------------first-------------------`);
greet();

const multiplication=(arg1,arg2,arg3=1)=>{
        console.log(`Multiplication is: ${arg1*arg2*arg3}`);
}
console.log(`------------------------second--------------------`);
multiplication(5,5,2);
console.log(`------------------------third---------------------`);
multiplication(10,4);

const addition=(arg1,arg2,arg3,arg4,arg5)=>{
    console.log(`Result after addition is: ${arg1+arg2+arg3+arg4+arg5}`);
}
console.log(`-----------------------fourth------------------------`);
addition(100,100,200,349,756);
console.log(`------------------------sixth------------------------`);
addition("I am ", "learning ", "ES6 ", 'features ', "in depth");
