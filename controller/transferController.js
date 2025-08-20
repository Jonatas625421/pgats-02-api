const transferService = require('../service/transferService');

exports.transfer = (req, res) => {
  const result = transferService.transfer(req.body);
  if (result.error) return res.status(400).json({ error: result.error });
  res.status(201).json(result.transfer);
};

exports.getTransfers = (req, res) => {
  res.json(transferService.getTransfers());
};
