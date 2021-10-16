"use strict";

const {p, bal} = required('./account');


function validatPin() {
    if (parseInt() === 1234) {
        return true;
    }
    else {
        return false("Try again");
    }
}

function getBalance() {
    return console.log(`Your current balance is ${bal}`);

}

function makeWithdrawal() {
    let atmRequest = parInt(prompt("How much would you like to withdraw?"));
    if (atmRequest <= bal) {
        bal = bal - atmRequest;
        console.log("You withdrew $" + atmRequest + "from your bank account");
        console.log("your new remaining balance is$" + bal);
    }
    else if (atmRequest > bal){
        console.log("You do nont have enough funds for this withdrawal amount")
        makeWithdrawal();
    }
    else {
        return makeWithdrawal();
    }

}

function depositFunds() {
    let makeDeposit = parInt(prompt("how much would you like to deposit"));
    if (makeDeposit > bal) {
        bal = bal + makeDeposit;
        console.log("your new new balance is$" + bal);
        return account
    }


}
// function makeDeposit() {
//     let atmRequest = prompt("How much do you want to deposit?");
//     if
// }


module.exports = {
    balance: getBalance,
    withdraw: makeWithdrawal,
    deposit: depositFunds,
    validate: validatPin
}