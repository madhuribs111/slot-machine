# Slot Machine Game 🎰

A JavaScript-based slot machine simulation that lets players deposit money, place bets, and spin the reels for a chance to win based on symbol combinations.

## Features

- **Deposit System**: Players can enter an initial deposit amount to start the game.
- **Line Betting**: Choose to bet on 1, 2, or 3 lines to increase your chances of winning.
- **Reels and Symbols**: The game features dynamic reels with symbols A, B, C, and D, each having a different payout multiplier.
- **Winnings Calculation**: Winnings are calculated based on matching symbols and their corresponding values. Players win by aligning symbols on the lines they've bet on.
- **Play Again Option**: After each spin, the player can choose to continue playing as long as they have sufficient balance.

## How it Works

1. **Deposit Money**: Enter the amount you wish to deposit as your starting balance.
2. **Select Lines**: Choose the number of lines to bet on (1-3).
3. **Place a Bet**: Enter the bet amount per line. The total bet will be calculated based on the number of lines.
4. **Spin**: The reels will spin and display random symbols.
5. **Win or Lose**: The game checks for matching symbols on the bet lines and calculates winnings based on the bet amount and the symbol's value.
6. **Repeat**: You can play as long as you have balance, or exit the game when you wish.

## Symbol Values

- **A**: Multiplier of 5x
- **B**: Multiplier of 4x
- **C**: Multiplier of 3x
- **D**: Multiplier of 2x

## Project Structure

- `SYMBOLS_COUNT`: Defines how many of each symbol appear on the reels.
- `SYMBOL_VALUES`: Sets the payout multipliers for each symbol.
- `deposit()`: Function to collect deposit from the player.
- `getNumberOfLines()`: Function to get the number of lines the player wishes to bet on.
- `getBet()`: Function to collect bet amount and check if the balance is sufficient.
- `spin()`: Spins the reels and randomly selects symbols.
- `transpose()`: Rearranges the symbols for row-wise display.
- `getWinnings()`: Calculates the player's winnings based on matching symbols.
- `game()`: Main function that handles the game loop.

## How to Run the Project

1. **Clone the Repository**:
    git clone <repository_url>
    cd slot-machine-js


2. **Install Dependencies**:
   Install `prompt-sync` to handle user input: npm install prompt-sync

3. **Run the Game**:
    node project.js

## View output on my LinkedIn post: https://www.linkedin.com/posts/madhuribs_i-fractured-my-foot-2-days-ago-this-was-activity-7243571067150082048-bJju?utm_source=share&utm_medium=member_desktop

## Future Enhancements

- Add sound effects for spinning and winning.
- Include graphical user interface (GUI) for a more interactive experience.
- Implement more symbols and bonus features like free spins.

### Personal Note:

I started this project during my recovery from a foot fracture, and it’s been a great way to stay positive and keep my coding journey on track. 🎉

