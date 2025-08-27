// Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

// Aplicação
const app = require('../../app');

// Testes
describe('Transfer Controller', () => {
    describe('POST /transfers', () => {
        it('QUANDO envio requisição sem campos obrigatórios, DEVE retornar 400', async () => {
            const resposta = await request(app)
                .post('/transfers')
                .send({
                        from: "julio", 
                        to:"priscila",
                        amount:100 
                });
                
            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'User not found.') 
        }); 
          
    }); 

 
    describe('GET /transfers', () => {
        // Its ficam aqui
    });
});