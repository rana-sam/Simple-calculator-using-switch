let num1=parseInt(prompt("Enter first number"))
let num2=parseInt(prompt("Enter second number"))
let oper=prompt("which operation you want to do(+,-,*,/)")
switch (true) {
    case (oper=='+'):
        console.log(num1+"+"+num2+"="+ (num1+num2));
        break;
    case (oper=='-'):
        console.log(num1+"-"+num2+"="+ (num1-num2));
        break;
    case (oper=='*'):
        console.log(num1+"*"+num2+"="+ (num1*num2));
        break;
    case (oper=='/'):
        console.log(num1+"/"+num2+"="+ (num1/num2));
        break;

    default:
        console.log("Enter valid operation.");
        break;
}