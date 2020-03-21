
let total = document.getElementById('total');

total.addEventListener('click', function(){
    let cv = +(document.getElementById ("cv").value);
    let salaryadd = +(document.getElementById ("salaryadd").value);
    let rate = +(document.getElementById ("rate").value);
    let tenor = +(document.getElementById ("tenor").value);
    let result = 0;
    if (cv > 0 && salaryadd >= 0 && rate > 0 && tenor > 0 && tenor % 1 == 0) {
        tenor = Math.floor(tenor/30);
        result = Math.floor(cv*(Math.pow(1+(rate/100)/12,tenor)) + salaryadd*findSalaryFormulaFactor(tenor,rate));
        alert (result);
    } else {
        console.log (`Wrong entry has been made`);
        console.log (NaN);
        return document.getElementById ('error').innerHTML = 'You can only enter positive numbers';
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



