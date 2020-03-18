
let total = document.getElementById('total');

total.addEventListener('click', function(){
    let cv = +(document.getElementById ("cv").value);
    let salaryadd = +(document.getElementById ("salaryadd").value);
    let rate = +(document.getElementById ("rate").value);
    let tenor = +(document.getElementById ("tenor").value);
    let result = 0;
    tenor = Math.floor(tenor/30);
    result = cv*(Math.pow(1+(rate/100)/12,tenor)) + salaryadd*findSalaryFormulaFactor(tenor,rate);
    alert (result);
})

function findSalaryFormulaFactor(time, percent) {
    let factor = 0;
    for (let t = time; t > 0; t--) {
        factor += Math.pow(1+(percent/100)/12, t);
    }
    return factor;
}


