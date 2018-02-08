var EURO = prompt( "Input amount of EURO:");
var USD = prompt("Input amount of Dolar:");


if(Number.isNaN(EURO) || Number.isNaN(USD)) {
    console.warn('Incorrect data');
}

function convert(euro, usd) {
   let euroCourse = 10;
   let usdCourse = 8;
   let euroToUah = euro * euroCourse;
   let usdToUah = usd * usdCourse;
   let euroToUsd = euroCourse / usdCourse;
   usdToUah = Number.isInteger(usdToUah) ? usdToUah : usdToUah.toFixed(2);
   euroToUah = Number.isInteger(euroToUah) ? euroToUah : euroToUah.toFixed(2);
   euroToUsd = Number.isInteger(euroToUsd) ? euroToUsd : euroToUsd.toFixed(2);
   console.log(`${euro} euros are equal ${(euroToUah)} UAH,${usd} dollars are equal ${usdToUah} UAH, one euro is equal ${euroToUsd} dollar`);
}

convert(EURO, USD);