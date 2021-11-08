const resetBtn = document.getElementById('reset'),
calcBtn = document.getElementById('calc'),
bill = document.getElementById('bill-input'),
people = document.getElementById('people-input'),
tips = document.getElementById('tip-div').querySelectorAll('span'),
tipAmt = document.getElementById('tip-amount'),
tipPerPerson = document.getElementById('total-per-person'),
custom = document.getElementById('C'),
error = document.getElementById('error')
;

for(let i=0; i < tips.length - 1;i++){ // 1 for custom
    tips[i].setAttribute('onclick', 'clicked(this)');
}

let tip_percent = -1, bill_amt = -1, numOfPeople = -1, shouldCalc=false, editTip = false;

function clicked(element){
    for(let i=0; i < tips.length;i++){
        tips[i].style.backgroundColor = "hsl(183, 100%, 15%)";
    }
    element.style.backgroundColor = "hsl(172, 67%, 45%)";
    if(element.id != 'C'){
        let text = element.innerText;
        tip_percent = text.slice(0, text.length - 1);
        // console.log(tip_percent)
    }
    else{
        console.log("Custom");
    }
}

calcBtn.addEventListener('click', ()=>{
    bill_amt = bill.value;
    peopleCtr = people.value;
    if(peopleCtr == 0){
        // can't have 0 value
        showMess();
        shouldCalc = false;
    }
    else{
        hideMess();
        shouldCalc = true;
    }
    if(shouldCalc){
        showRes(Number(bill_amt), Number(peopleCtr), Number(tip_percent));
    }
})

// if(tip_percent != -1 && bill_amt != -1 && numOfPeople != -1){

// }
resetBtn.addEventListener('click', ()=>{
    bill.value="";
    people.value="";
    hideMess();
})

custom.addEventListener('click', ()=>{
    if(custom.innerText === "Custom"){
        custom.innerText="";
    }
    let text = custom.innerText;
    tip_percent = text.slice(0, text.length - 1);
})

function showMess(){
    people.style.border="1px solid red";
    error.classList.remove('hide');
    error.classList.add('show');
}

function hideMess(){
    people.style.border = "none";
    error.classList.add('hide');
    error.classList.remove('show');
}

function showRes(amt, ppl, percent){
    let billPerPerson = Number((amt / ppl).toFixed(2));
    let totalTip = (amt * percent) / 100;
    let tipPerson = Number((totalTip / ppl).toFixed(2));
    let totalPay = Number((tipPerson + billPerPerson).toFixed(2));
    tipAmt.innerText = `$${tipPerson}`;
    tipPerPerson.innerText = `$${totalPay}`;

}