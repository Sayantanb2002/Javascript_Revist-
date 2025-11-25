function createAccount(initialAmt = 0 , pin) {
    let balance = initialAmt;
    let _pin = pin;
    let locked = false;
    let history = [];
    return {
        unlock(inputPin) {
            locked = inputPin === _pin;
            return locked ? 'Account unlocked' : 'Incorrect PIN';
        },
        deposit(amount) {
            if (!locked) throw new Error('Account is locked.');
            if (amount > 0) {
                balance += amount;
                history.push({ type: 'deposit', amount: amount });
                console.log(`Deposited: ${amount}`);
                return balance;
            }else {
                return 'Deposit amount must be positive';
            }
        },
        withdraw(amount) {
            if (!locked) throw new Error('Account is locked.');
            if(amount > 0 && amount <= balance) {
                balance -= amount;
                history.push({ type: 'withdraw', amount: amount });
                console.log(`Withdrew: ${amount}`);
                return balance;
            }else {
                return 'Insufficient funds or invalid amount';
            }
        },
        getBalance() {
            if (!locked) throw new Error('Account is locked.');
            history.push({ type: 'getBalance', amount: balance });
            return balance;
        },
        getHistory() {
            return history;
        }
    }
}

const myAccount = createAccount(1000 , 1234);
myAccount.unlock(1234); // Account unlocked
console.log(myAccount.getBalance()); // 1000
myAccount.deposit(500); // Deposited: 500
console.log(myAccount.getBalance()); // 1500
myAccount.withdraw(200); // Withdrew: 200
console.log(myAccount.getBalance()); // 1300

const transactionHistory = myAccount.getHistory();
console.log(transactionHistory);

