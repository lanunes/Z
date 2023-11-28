/// <reference types="Cypress"/>

describe('API - Teste de deleção de Card no Trello', () =>{

    it('Deve deletar um card com sucesso', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://api.trello.com/1/cards/{id}?key=&token=',
            
        }).then((response)=>{
            expect(response.status).to.equal(200)
        })
    })
})