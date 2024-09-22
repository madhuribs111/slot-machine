// 1. deposit some money
// 2. determine number of lines to bet on
// 3. collect a bet amount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play agian

// collect a deposit:

// function deposit(){
//     //body
//     return 1
// }

//use prompt-sync to use the user's deposit money
const prompt = require("prompt-sync")();

//specify the number of reels, symbols in the reel, quantity and value of reel - defines payout structure
// size of the slot machine - global variable

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOL_VALUES = {
  // multiplier value by symbol
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

//es6 style function
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter the deposit amount: ");
    const numberDepAmt = parseFloat(depositAmount);

    if (isNaN(numberDepAmt) || numberDepAmt <= 0) {
      console.log("Invalid number. try again" + "❌");
    } else {
      return numberDepAmt;
    }
  }
};

// get number of lines:
const getNumberOfLines = () => {
  while (true) {
    const numberOfLines = parseInt(
      prompt("Enter the number of lines to bet on (1-3) 🎰 : ")
    );
    if (isNaN(numberOfLines) || numberOfLines>3 || numberOfLines<1) {
      console.log("Enter a valid number" + "❌");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (bal, lines) => {
  while (true) {
    const betAmount = parseFloat(prompt("Enter the bet amount per line 💱 : "));
    if (isNaN(betAmount) || betAmount <= 0) {
      console.log("Enter a valid bet, try again" + "❌");
    }
    if (betAmount > bal / lines) {
      console.log("Not enough balance to place bet, try again" + "❌");
    } else {
      console.log("Ok, bet placed" + "✅");
      return betAmount;
    }
  }
};

// determine spinning based on the SYMBOL_COUNT:
const spin = () => {
  // array of possible symbols, array= refe datatype
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    //loop through all keys in symbols_count
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }
  //console.log(symbols);

  const reels = [];

  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
};

const transpose = (reels) => {
  const rows = [];
  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
};

const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};
const getWinnings = (rows, bet, lines) => {
  let winnings = 0;
  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;

    for (const symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }
    if (allSame) {
      winnings += bet * SYMBOL_VALUES[symbols[0]];
    }
  }
  return winnings;
};

const game = () => {
  let balance = deposit();

  while (true) {
    console.log("You have a balance of $" +balance + "💰")
    let numberOfLinesToBet = getNumberOfLines();
    let bet = getBet(balance, numberOfLinesToBet);

    balance -= bet * numberOfLinesToBet
    const reels = spin();
    const rows = transpose(reels);
    printRows(rows);
    const winnings = getWinnings(rows, bet, numberOfLinesToBet);
    balance += winnings
    console.log("You won $" + winnings.toString() + " 🤑");

    if (balance<=0){
        console.log("You ran out of money!");
        break;
    }
    const playAgain = prompt("Do you want to play again (y/n)? ");
    if (playAgain!= "y"){
        break;
    }
  }
};
game();

// turn ths DATA: [[A B C], [D D D], [A A A]] ->into rows" [[A D A] [B D A] [C D A]] (transpose the matrix)
