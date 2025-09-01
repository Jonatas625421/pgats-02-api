
// Bibliotecas
const request = require('supertest');
const { expect } = require('chai');

// Testes
describe('Transfer Controller', () => {
    describe('POST /transfers', () => {
        it('Quando informo remetente e destinatario nao encontrado recebe 400', async () => {
            const resposta = await request('http://localhost:3001')
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
    
});   