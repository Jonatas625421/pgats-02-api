// Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

// Aplicação
const app = require('../../app');

// Mocks
const transferService = require('../../service/transferService');

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

        it('Usando Mocks: QUANDO informo valores válidos eu tenho sucesso com  201 CREATED', async () => {
            // Mockar apenas a função Transfer do service
            const transferServiceMock = sinon.stub(transferService, 'transfer');
            transferServiceMock.returns({ 
                from: 'julio', 
                to: 'priscila', 
                amount: 100, 
                date: new Date().toISOString()
            
            });

            const resposta = await request(app)
                .post('/transfers')
                .send({
                        from: "julio", 
                        to:"priscila",
                        amount:100 
                });
        
            expect(resposta.status).to.equal(201);
            expect(resposta.body).to.have.property('from', 'julio');
            expect(resposta.body).to.have.property('to', 'priscila');
            expect(resposta.body).to.have.property('amount', 100);    
           

            // Reseto o mock
            sinon.restore();

        }); 

          
    }); 

 
    describe('GET /transfers', () => {
        // Its ficam aqui
    });
});