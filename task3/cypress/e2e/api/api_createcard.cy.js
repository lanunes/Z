/// <reference types="Cypress"/>

describe('API - Teste de criação de Card no Trello', () =>{

    it('Deve criar um card com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.trello.com/1/cards?idList={idList}&key=&token=',
            body: {
                "name": "Segundo Card",
                "desc": "Esse é o segundo card",
                "idList": ""
            }
        }).then((response)=>{
            expect(response.status).to.equal(200)
        })
    })
})