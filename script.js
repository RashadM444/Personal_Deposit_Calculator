
let total = document.getElementById('total');

total.addEventListener('click', function(){
    let cv = +(document.getElementById ("cv").value);
    let salaryadd = +(document.getElementById ("salaryadd").value);
    let rate = +(document.getElementById ("rate").value);
    let tenor = +(document.getElementById ("tenor").value);
    let result = 0;
    if (cv > 0 && salaryadd >= 0 && rate > 0 && rate <= 100 && tenor > 0 && tenor % 1 == 0) {
        tenor = Math.floor(tenor/30);
        result = Math.floor(cv*(Math.pow(1+(rate/100)/12,tenor)) + salaryadd*findSalaryFormulaFactor(tenor,rate));
        alert (result);
    } else if(cv <= 0 || isNaN(cv)) {
        console.log (`Wrong entry has been made`);
        console.log (NaN);
        return document.getElementById ('error').innerHTML = 'You can only enter positive Initial Amount';
    } else if (salaryadd < 0 || isNaN(salaryadd)) {
        console.log (`Wrong entry has been made`);
        console.log (NaN);
        return document.getElementById ('error').innerHTML = 'Monthly added amount cannot be less than zero';
    } else if (rate <= 0 || rate > 100 || isNaN(rate)) {
        console.log (`Wrong entry has been made`);
        console.log (NaN);
        return document.getElementById ('error').innerHTML = 'Rate can only be a number between 0 and 100';
    } else if (tenor <= 0 || tenor %1 !== 0 || isNaN (tenor)) {
        console.log (`Wrong entry has been made`);
        console.log (NaN);
        return document.getElementById ('error').innerHTML = 'You can only enter positive time period with no decimals';
    } else {
        console.log (`Wrong entry has been made`);
        console.log (NaN);
        return document.getElementById ('error').innerHTML = 'Wrong entry format. Please try again.';
    }
})

function findSalaryFormulaFactor(time, percent) {
    let factor = 0;
    for (let t = time; t > 0; t--) {
        factor += Math.pow(1+(percent/100)/12, t);
    }
    return factor;
}








// * cv must be > 0
// Начальная сумма - положительно число
// * salaryadd !<0 
// Сумма пополнения - неотрицательное число
// * rate >0
// Процент - положительное число (до 100)
// * tenor >0 && tenor%1=0 
// Срок - положительное целое число.



