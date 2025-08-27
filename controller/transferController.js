const express = require('express');
const router = express.Router();
const transferService = require('../service/transferService');


router.post('/', (req, res) => {
  const { from, to, amount } = req.body;
if (!from || !to || !amount) return res.status(404).json({ error: "Not Found - Usuário não encontrado"});
try {
    const transfer = transferService.transfer({ from, to, amount });
    res.status(201).json(transfer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get('/', (req, res) => {
  res.json(transferService.listTransfers());
});

module.exports = router;