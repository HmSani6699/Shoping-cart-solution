function getInputNumber(prodect, insrch, price) {
    const inputText = document.getElementById(prodect + '-input');
    var inputValue = inputText.value;
    if (insrch == true) {
        inputValue = parseInt(inputValue) + 1;
    }
    else if (inputValue > 0) {
        inputValue = parseInt(inputValue) - 1;
    }
    //set number
    inputText.value = inputValue;
    //update balance
    const totalBalance = document.getElementById(prodect + '-amount');
    totalBalance.innerText = inputValue * price;
    calculta()
};
function balance(prodect) {
    const totalBalanceInput = document.getElementById(prodect + '-input');
    const totalBalanceAmount = totalBalanceInput.value;
    const amount = parseInt(totalBalanceAmount);
    return amount;
}
function calculta() {
    const getphone = balance('phone') * 1219;
    const getcase = balance('case') * 59;
    const subTotal = getphone + getcase;
    const tex = subTotal / 10;
    const total = subTotal + tex;

    //update balance
    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('tex').innerText = tex;
    document.getElementById('total').innerText = total;
}

//get phone heandel
document.getElementById('phone-plus').addEventListener('click', function () {
    getInputNumber('phone', true, 1219);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    getInputNumber('phone', false, 1219);
});

//get case heandel
document.getElementById('case-plus').addEventListener('click', function () {
    getInputNumber('case', true, 59);
});
document.getElementById('case-minus').addEventListener('click', function () {
    getInputNumber('case', false, 59);
});