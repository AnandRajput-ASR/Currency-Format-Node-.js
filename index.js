let number1 = 10;
let number2 = 100;
let number3 = 1000;
let number4 = 10000;
let number5 = 100000;
let number6 = 1000000;

console.log(`\nYou want to print number in Currency Format without 2 decimal\n`);
console.log(number1.toLocaleString("hi-IN"));
console.log(number2.toLocaleString("hi-IN"));
console.log(number3.toLocaleString("hi-IN"));
console.log(number4.toLocaleString("hi-IN"));
console.log(number5.toLocaleString("hi-IN"));
console.log(number6.toLocaleString("hi-IN"));

console.log(`\nYou want to print number in Currency Format with 2 decimal\n`);
console.log(number1.toLocaleString("hi-IN", { minimumFractionDigits: 2 }));
console.log(number2.toLocaleString("hi-IN", { minimumFractionDigits: 2 }));
console.log(number3.toLocaleString("hi-IN", { minimumFractionDigits: 2 })); // You can change the number how many decimal you want
console.log(number4.toLocaleString("hi-IN", { minimumFractionDigits: 2 }));
console.log(number5.toLocaleString("hi-IN", { minimumFractionDigits: 2 }));
console.log(number6.toLocaleString("hi-IN", { minimumFractionDigits: 2 }));

console.log(`\nYou want to print number in Currency Format with currency symbol of Country \n`);
console.log(number1.toLocaleString("hi-IN", { style:'currency', currency:'INR', minimumFractionDigits: 2 }));
console.log(number2.toLocaleString("hi-IN", { style:'currency', currency:'INR', minimumFractionDigits: 2 }));
console.log(number3.toLocaleString("hi-IN", { style:'currency', currency:'INR', minimumFractionDigits: 2 })); // You can change the currency of country
console.log(number4.toLocaleString("hi-IN", { style:'currency', currency:'INR', minimumFractionDigits: 2 }));
console.log(number5.toLocaleString("hi-IN", { style:'currency', currency:'INR', minimumFractionDigits: 2 }));
console.log(number6.toLocaleString("hi-IN", { style:'currency', currency:'INR', minimumFractionDigits: 2 }));

