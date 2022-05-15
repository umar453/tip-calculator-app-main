var bill_amount, amount_with_tip;
document.getElementById('price').style.visibility = "hidden";
document.getElementById('tot_price').style.visibility = "hidden";
let bill = document.getElementById('bill').addEventListener("input", function (e) {
    const b = e.target.value;
    bill_amount = parseInt(b);
    console.log(bill_amount)
    return bill_amount;
})
var tip_amt;

function tipCalc(x) {
    console.log(x);
    tip_amt = x * bill_amount
    amount_with_tip = bill_amount + x * bill_amount;
    return amount_with_tip;

}

let custom = document.getElementById('custom').addEventListener("input", function (e) {
    const tip = (e.target.value) / 100;
    tipCalc(tip);
})

var people;
let NoOfPeoples = document.getElementById('people').addEventListener("input", function (e) {
    const n = e.target.value;
    people = n;
    return people;
})
let calculate = document.getElementById('calc').addEventListener("click", function () {
    document.getElementById('price').style.visibility = "visible";
    document.getElementById('tot_price').style.visibility = "visible";
    let tip_amt_per_person = tip_amt / people;
    document.getElementById('price').innerHTML = "$" + tip_amt_per_person.toFixed(2);
    let total_amount_per_person = amount_with_tip / people;
    document.getElementById('tot_price').innerHTML = "$" + total_amount_per_person.toFixed(2);
})

let reset = document.getElementById('res').addEventListener("click", function () {
    document.getElementById('price').innerHTML = "";
    document.getElementById('tot_price').innerHTML = "";
    document.getElementById('people').value="";
    document.getElementById('bill').value="";
    people=0;
    amount_with_tip=0;
    document.getElementById('custom').value="";
})