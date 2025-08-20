# API de Transferências

Esta API permite registro, login, consulta de usuários e transferências de valores entre usuários. Utiliza banco de dados em memória e está documentada com Swagger.

## Instalação

1. Clone o repositório.
2. Instale as dependências:
   ```powershell
   npm install express swagger-ui-express
   ```

## Execução

Para iniciar o servidor:
```powershell
node server.js
```

Acesse a documentação Swagger em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Endpoints

- `POST /register`: Registra um novo usuário.
- `POST /login`: Realiza login.
- `GET /users`: Lista usuários.
- `POST /transfer`: Realiza transferência.
- `GET /transfers`: Lista transferências.
- `GET /api-docs`: Documentação Swagger.

## Regras de Negócio
- Login exige usuário e senha.
- Não é permitido registrar usuários duplicados.
- Transferências para não favorecidos só podem ser feitas se o valor for menor que R$ 5.000,00.

## Testes
Para testar a API, recomenda-se o uso do Supertest e Jest. O arquivo `app.js` pode ser importado diretamente nos testes.
