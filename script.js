
let total = document.getElementById('total');

/* * This is the main function and checks for all the conditions and puts in the formula
 if everything is in place*/
total.addEventListener('click', function(){
    let cv = +(document.getElementById ("cv").value);   // cv is the current value, the initial amount client wants to put in
    let salaryAdd = +(document.getElementById ("salaryAdd").value); // salaryadd is the portion of salary added every month
    let rate = +(document.getElementById ("rate").value); // rate is the annual percentage 
    let tenor = +(document.getElementById ("tenor").value); // tenor is the time value in days
    let result = 0;
    if (cv > 0 && salaryAdd >= 0 && rate > 0 && rate <= 100 && tenor > 0 && tenor % 1 === 0) {
        tenor = Math.floor(tenor/30);
        
        /*
        The formula for compound interest rate is for the amount A => A= A *(1+r)^t. In our case in the beginning of the 
        period there two amounts, one being CV, the other salaryadd(S). So both of their formulas are:
        t0 of t6
        CV= CV*(1+r)^t
        S = S*(1+r)^t;
        But in our case, next month comes a new S amount with period one month less than the previous,which by formula:
        t1 of t6
        CV= CV*(1+r)^t
        S = S*(1+r)^t;
        S= S*(1+r)^t-1;
        So what you see below is the CV formula added to all the S formulas for the period
        */
        
        result = Math.floor(cv*(Math.pow(1+(rate/100)/12,tenor)) + salaryAdd*findSalaryFormulaFactor(tenor,rate)); // this small function helps me to find the (1+r)^t parts for all other S formulas
        alert (result);
    } else if(cv <= 0 || isNaN(cv)) {
        console.log (`Wrong entry has been made`);
        console.log (NaN);
        return document.getElementById ('error').innerHTML = 'You can only enter positive Initial Amount';
    } else if (salaryAdd < 0 || isNaN(salaryAdd)) {
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
});

function findSalaryFormulaFactor(time, percent) {
    let factor = 0;
    for (let t = time; t > 0; t--) {
        factor += Math.pow(1+(percent/100)/12, t);
    }
    return factor;
}


// * cv must be > 0
// Начальная сумма - положительно число
// * salaryAdd !<0
// Сумма пополнения - неотрицательное число
// * rate >0
// Процент - положительное число (до 100)
// * tenor >0 && tenor%1=0 
// Срок - положительное целое число.



