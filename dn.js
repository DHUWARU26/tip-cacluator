// let bill1 = document.getElementById("bill");
// let tipper = document.getElementById("tipper");
// let tipamt = document.getElementById("tipamt");
// let total1 = document.getElementById("total1");
// let btton = document.getElementById("button1");


// btton.onclick = function dd() {
//     alert("hi")
//     let bill2 = parseInt(bill1.value);
//     let tipper2 = parseInt(tipper.value);
//     let tipamt2 = parseInt(tipamt.value);


//     tipamt2=(tipper/100)*bill2;
//     tipamt.value=tipamt2;
//     total1.value=(bill1+timpamt2);

//     // tipamt1 = (tipper1 / 100) * bill2;
//     // tipamt.value = tipamt1;
//     // total1.value =( bill2 + tipamt1);
// }

function add(){
let BILL = document.getElementById('BILL');
let billvalue = parseInt( BILL.value);
let gstper = document.getElementById('tipper');
let gstpervalue = parseInt( gstper.value);


let gstamt = document.getElementById('tipamt');
gstamt.value = (billvalue/100)*gstpervalue;

let total1 = document.getElementById('total1');
 total1.value = gstpervalue+billvalue;

}