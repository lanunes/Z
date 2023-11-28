/// <reference types="Cypress"/>

describe('API - Teste de criação de Board no Trello', () =>{

    it('Deve criar um board com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.trello.com/1/boards/?key=&token=',
            body: {
                "name": "Board Teste Zukk",
                "desc": "Criando board para teste da Zukk",
                "defaultLabels": true,
                "defaultLists": true,
                "keepFromSource": "all",
                "powerUps": "cards,checklists",
                "prefs_permissionLevel": "private",
                "prefs_voting": "members"

            }
        }).then((response)=>{
            expect(response.status).to.equal(200)
            })
    })
})