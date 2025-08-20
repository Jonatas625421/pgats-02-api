const { users } = require('../model/userModel');
const { transfers } = require('../model/transferModel');

function transfer({ from, to, amount }) {
  if (!from || !to || typeof amount !== 'number') return { error: 'Missing parameters.' };
  const sender = users.find(u => u.username === from);
  const recipient = users.find(u => u.username === to);
  if (!sender || !recipient) return { error: 'User not found.' };
  if (sender.balance < amount) return { error: 'Insufficient funds.' };
  if (!recipient.favorecido && amount >= 5000) return { error: 'Transfer limit for non-favorecido is R$ 5.000,00.' };
  sender.balance -= amount;
  recipient.balance += amount;
  const transfer = { from, to, amount, date: new Date() };
  transfers.push(transfer);
  return { transfer };
}

function getTransfers() {
  return transfers;
}

module.exports = { transfer, getTransfers };
