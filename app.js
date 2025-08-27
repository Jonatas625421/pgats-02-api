const express = require("express");
const userController = require("./controller/userController");
const transferController = require("./controller/transferController");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");


const app = express();
app.use(express.json());

// User routes
app.post('/register', userController.register);
app.post('/login', userController.login);
app.get('/users', userController.getUsers);

// rota base
app.use("/transfers", transferController);

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
