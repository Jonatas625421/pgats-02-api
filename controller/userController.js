const userService = require('../service/userService');

exports.register = (req, res) => {
  const result = userService.registerUser(req.body);
  if (result.error) return res.status(400).json({ error: result.error });
  res.status(201).json(result.user);
};

exports.login = (req, res) => {
  const result = userService.loginUser(req.body);
  if (result.error) return res.status(401).json({ error: result.error });
  res.json(result.user);
};

exports.getUsers = (req, res) => {
  res.json(userService.getUsers());
};
