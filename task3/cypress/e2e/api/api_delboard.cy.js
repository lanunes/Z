/// <reference types="Cypress"/>

describe('API - Teste de deleção de Board no Trello', () =>{

    it('Deve deletar um Board com sucesso', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://api.trello.com/1/boards/{idboard}?key=&token=',
            
        }).then((response)=>{
            expect(response.status).to.equal(200)
        })
    })
})