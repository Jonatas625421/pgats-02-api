const { users } = require('../model/userModel');
const { transfers } = require('../model/transferModel');

function transfer({ from, to, amount }) {
  if (!from || !to || typeof amount !== 'number') {
    throw new Error('Missing parameters.');
  }
  const sender = users.find(u => u.username === from);
  const recipient = users.find(u => u.username === to);

  if (!sender || !recipient) throw new Error('User not, TTTTTTT found.');
  if (sender.balance < amount) throw new Error('Insufficient funds.');
  if (!recipient.favorecido && amount >= 5000) {
    throw new Error('Transfer limit for non-favorecido is R$ 5.000,00.');
  }

  sender.balance -= amount;
  recipient.balance += amount;

  const transfer = { from, to, amount, date: new Date() };
  transfers.push(transfer);
  return transfer;
}

// Declaração da função getTransfers
function getTransfers() {
  return transfers;
}


module.exports = { transfer, getTransfers };
