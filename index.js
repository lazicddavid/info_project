/*const player = {
  name: "David",
  score: 0,
  energy: 100,

  play() {
    this.score += 10;
    this.energy -= 5;
  },

  rest() {
    this.energy += 20;
  },
  getScore() {
    return this.score;
  },
};

player.play();
player.play();
player.rest();

console.log(player.getScore());
console.log(player.energy);
*/
/*
const bankAccount = {
  balance: 0,

  deposit(amount) {
    this.balance += amount;
  },

  withdraw(amount) {
    this.balance -= amount;
  },

  getBalance() {
    return this.balance;
  },
};

bankAccount.deposit(900);
bankAccount.deposit(200);
bankAccount.withdraw(100);

console.log(bankAccount.getBalance());
*/

const bankAccount = {
  balance: 0,

  deposit(amount) {
    this.balance += amount;
  },

  withdraw(amount) {
    this.balance -= amount;
  },

  getBalance() {
    return this.balance;
  },
};

bankAccount.deposit(9000);
bankAccount.deposit(200);
bankAccount.withdraw(100);

console.log(bankAccount.getBalance());
