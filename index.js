const account = require('./account');
const {balance, withdraw, deposit, validate} = require('./atm');
const prompt = require('prompt-sync')();


function mainMenu() {
    let pin = prompt("Hello welcome to Eastside River bank, please enter your pin");
    if (validate(pin) === true){
        return subMenu
    }  
    else {
        console.log("Please try again and enter the correct pin.");
        return pin;
}
}




function subMenu(){
    console.log(`Welcome back, How can we help you today? \n 1) Check Account Balance \n 2) Withdrawal \n 3) Deposit \n 4) Exit`)
    let selection = prompt();
    switch(selection){
        case "1":
            balance();
        case "2":
            withdraw(requestWithdraw);
        case "3":
            deposit(requestDeposit);
        case "4":
            mainMenu();
        
    }   
}
mainMenu();