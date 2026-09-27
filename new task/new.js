//1. find first reccurssive character from the given pattern 
// pattern="ABEBAAD"

let pattern = "ABEBAAD";
function reccursion(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < i; j++) {
            if (a[i] === a[j]) {
                console.log(a[i]);
                return;
            }
        }
    }
}

reccursion(pattern);

//2. Display number count 
//   arr=[10,20,0,40,20,30,50,30,20,10,60,70,40,50,60,70,80,20]

let arr = [10, 20, 0, 40, 20, 30, 50, 30, 20, 10, 60, 70, 40, 50, 60, 70, 80, 20]
let counts = {};

for (let num of arr) {
    if (counts[num]) {
        counts[num]++;
    } else {
        counts[num] = 1;
    }
}

console.log(counts);

/* 3. accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
   
     },
     {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
   
     },
     {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
   
     },
     {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'n ef'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]}]
*/

let accounts = [
    {
        acno: 1000, ac_type: 'savings', balance: 45000, transaction: [
            {
                to: 1001, amount: 5000, msg: 'ebill', mode: 'gpay'
            },
            {
                to: 1002, amount: 2000, msg: 'emi', mode: 'neft'
            },
            {
                to: 1003, amount: 1000, msg: 'recharge', mode: 'phonePay'
            },
        ]

    },
    {
        acno: 1001, ac_type: 'current', balance: 30000, transaction: [
            {
                to: 1000, amount: 1000, msg: 'grossary', mode: 'gpay'
            },
            {
                to: 1002, amount: 7000, msg: 'gift', mode: 'phonePay'
            },
            {
                to: 1003, amount: 10000, msg: 'emi', mode: 'neft'
            },
        ]

    },
    {
        acno: 1002, ac_type: 'fixed', balance: 100000, transaction: [
            {
                to: 1000, amount: 5000, msg: 'ebill', mode: 'gpay'
            },
            {
                to: 1001, amount: 2000, msg: 'emi', mode: 'neft'
            },
            {
                to: 1003, amount: 1000, msg: 'recharge', mode: 'phonePay'
            },
        ]

    },
    {
        acno: 1003, ac_type: 'savings', balance: 30000, transaction: [
            {
                to: 1001, amount: 5000, msg: 'ebill', mode: 'gpay'
            },
            {
                to: 1002, amount: 2000, msg: 'emi', mode: 'neft'
            },
            {
                to: 1000, amount: 1000, msg: 'recharge', mode: 'phonePay'
            },
        ]
    }]


console.log("-------total number of accounts----------");

// 1.print total number of accounts
console.log(accounts.length);

console.log("-------account number whose account type is savings----------");
// 2.print acount number whose account type is savings

accounts.filter(acc => acc.ac_type == 'savings').forEach(acc => console.log(acc.acno, acc.ac_type))

console.log("-------balance of account number 1000----------");
// 3.print balance of account number 1000

console.log(accounts.find(acc => acc.acno == 1000).balance);

console.log("-------all gpay transactions----------");
// 4.print all gpay transactions
/*accounts.forEach(acc => { acc.transaction.filter(t => t.mode == "gpay").forEach(t => console.log(t))}); */
console.log(accounts.map(acc => acc.transaction).flat().filter(tnx => tnx.mode === 'gpay'));

console.log("-------all transactions whose amount>5000----------");
// 5.print all transactions whose amount>5000

console.log(accounts.map(acc => acc.transaction).flat().filter(tnx => tnx.amount > 5000));

console.log("-------credit transaction of account 1002----------");
// 6.print credit transaction of account 1002

console.log(accounts.map(acc => acc.transaction).flat().filter(tnx => tnx.to == 1002));

console.log("-------total credit amount to the account 1002----------");
// 7.print total credit amount to the account 1002

console.log(accounts.map(acc => acc.transaction).flat().filter(tnx => tnx.to == 1002).reduce((acc, tnx) => acc + tnx.amount, 0));

console.log("-------debit transaction of account 1002----------");
// 8.print debit transaction of account 1002

console.log(accounts.find(acc => acc.acno == 1002).transaction);

console.log("-------total debit amount from the account 1002----------");
// 9.print total debit amount from the account 1002

console.log(accounts.find(acc => acc.acno == 1002).transaction.reduce((acc, amt) => acc + amt.amount, 0));

console.log("-------transaction history of 1002----------");
// 10.print transaction history of 1002

let debit = accounts.find(acc => acc.acno == 1002).transaction;

let credit = accounts.map(acc => acc.transaction).flat().filter(tnx => tnx.to == 1002);

console.log("Debit transactions:", debit);
console.log("Credit transactions:", credit);

/* console.log(accounts.find(acc => acc.acno == 1002).transaction); */

console.log("-------current balance of 1002----------");
// 11.current balance of 1002
//Current Balance = Initial Balance - Total Debits + Total Credits

let acc = accounts.find(acc => acc.acno == 1002);

let totalDebit = acc.transaction.reduce((acc, tnx) => acc + tnx.amount, 0);

let totalCredit = accounts.map(acc => acc.transaction).flat().filter(tnx => tnx.to == 1002).reduce((acc, tnx) => acc + tnx.amount, 0);

let currentBalance = acc.balance - totalDebit + totalCredit;

console.log(currentBalance);

/* console.log(accounts.find(acc=>acc.acno == 1002).balance); */

console.log("-------highest  balance account details----------");
// 12.print highest  balance account details 
console.log(accounts.reduce((acc1, acc2) => acc1.balance > acc2.balance ? acc1 : acc2));

/* 4. Raju's Instagram Giveaway! Win an iPhone!
     Raju is hosting a giveaway on the instagram to give away brand nw iPhone!
     To select the winner, he needs help identifying the first unique commenter
     on his giveaway post - the first user who commented only once without repeating.
     The challenge: 
    Given a list of Instagram usernames representing the order of comments,
        write a function that returns the username of the first commenter who didn't
        comment again. If every user commented multiple times, the function should
        return "No unique commenter".
        Examples:
        comments1 = ['nisha', "arjun', 'nisha', 'vicky', 'arjun', 'meera']
        Output: "vicky"
        comments2 = ['alex', "alex','sam', 'sam' ]
        Output: "No unique commenter" */


let comments1 = ['nisha', 'arjun', 'nisha', 'vicky', 'arjun', 'meera'];
let comments2 = ['alex', 'alex', 'sam', 'sam']

function firstUnique(arr) {

    let count = {};

    arr.forEach(name => {
        if (count.hasOwnProperty(name)) {
            count[name]++;
        }
        else {
            count[name] = 1;
        }
    });

    for (let name of arr) {
        if (count[name] == 1) {
            return name;
        }
    }

    return "No Unique Comment";
}

console.log(firstUnique(comments1));
console.log(firstUnique(comments2));

/* 5. Ramu's Card Stack Game!
      Ramu is playing a card game where he places cards on top of a pile and 
      sometimes removes the top card.
      You are given a list of moves:
        â€¢ "place â€¹cardâ€º" means Ramu places a card (like "Ace", "King", "Queen") on 
           top of the pile.
        â€¢ "remove" means Ramu removes the top card from the pile.
        â€¢ If the pile is empty and a "remove" move happens, ignore it.
      Your task:
        After all moves, return the name of the card currently on top of the pile.
        If the pile is empty, return "No cards left".
           Examples:
             moves1 = ["pLace Ace", "place King", "remove", "place Queen"]
             Pile flow: ["Ace"] -> ["Ace", "King"] -> remove top ("King") -> ["Ace","Queen"]
             Output: "Queen"
            
             moves2 = ["remove","place Jack", "remove", "remove"]
             Pile flow: [] -> ["Jack"] -> remove top ("Jack") -> remove ignored (empty)
             Output:"No cards left" 
*/




function cardGame(moves) {
    let pile = [];

    moves.forEach(move => {
        if (move.startsWith("place ")) {
            let card = move.slice(6);
            pile.push(card);
        }
        else if (move === "remove") {
            if (pile.length > 0) {
                pile.pop();
            }
        }
    });

    if (pile.length === 0) {
        return "No cards left";
    }

    return pile[pile.length - 1];
}

let moves = ["place Ace", "place King", "remove", "place Queen"];
let move1 = ["remove", "place Jack", "remove", "remove"]
console.log(cardGame(moves));
console.log(cardGame(move1));

//6.Remove duplicates from a number array using reduce() function.



let array = [10, 25, 50, 25, 10, 35, 60, 45, 60, 50];

let result = array.reduce((acc, num) => {

    if (!acc.includes(num)) {
        acc.push(num);
    }

    return acc;

}, []);

console.log(result);

//7.Convert [apple,orange,apple,banana,orange] to {apple:2,orange:2,banana:2 } using reduce


let ar = ['apple', 'orange', 'apple', 'banana', 'orange'];

let results = ar.reduce((acc, fruit) => {

    if (acc.hasOwnProperty(fruit)) {
        acc[fruit]++;
    }
    else {
        acc[fruit] = 1;
    }

    return acc;

}, {});

console.log(results);

/* 8. Write a fuction that return the number of times its called using closure

     Eg:
     counter(); // 1
     counter(); // 2
     counter(); // 3
 */

function counterFunction() {

    let count = 0;

    function closurerFunction() {
        count++;
        console.log(count);
    }
    return closurerFunction
}

let counter = counterFunction();

counter();
counter();
counter();