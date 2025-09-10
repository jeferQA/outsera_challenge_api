Cypress.Commands.add('insertRegister', (name, phone, address) => {
    cy.request({
        method: 'POST',
        url: 'https://68c1452698c818a694014623.mockapi.io/api/v1/people',
        body: {
            "name": name,
            "phone": phone,
            "address": address
        }
    }).then((resp) =>{
        expect(resp.status).to.eq(201)
        expect(resp.body).property("name").to.eq(name)
        expect(resp.body).property('phone').to.eq(phone)
        expect(resp.body).property("address").to.eq(address)
    })
})

Cypress.Commands.add('alterRegisterName', (id, name) => {
    cy.request({
        method: 'PUT',
        url: 'https://68c1452698c818a694014623.mockapi.io/api/v1/people/'+ id,
        body: {
            "name": name,
        }
    }).then((resp) =>{
        expect(resp.status).to.eq(200)
        expect(resp.body).property("name").to.eq(name)
        expect(resp.body).property("id").to.eq(id)
    })
})

Cypress.Commands.add('alterRegisterPhone', (id, phone) => {
    cy.request({
        method: 'PUT',
        url: 'https://68c1452698c818a694014623.mockapi.io/api/v1/people/'+ id,
        body: {
            "phone": phone
        }
    }).then((resp) =>{
        expect(resp.status).to.eq(200)
        expect(resp.body).property("phone").to.eq(phone)
        expect(resp.body).property("id").to.eq(id)
    })
})

Cypress.Commands.add('alterRegisterAddress', (id, address) => {
    cy.request({
        method: 'PUT',
        url: 'https://68c1452698c818a694014623.mockapi.io/api/v1/people/'+ id,
        body: {
            "address": address
        }
    }).then((resp) =>{
        expect(resp.status).to.eq(200)
        expect(resp.body).property("address").to.eq(address)
        expect(resp.body).property("id").to.eq(id)
    })
})

Cypress.Commands.add('deleteLastRegister', () => {
    var listLength
    cy.request({
        method: 'GET',
        url: 'https://68c1452698c818a694014623.mockapi.io/api/v1/people',
    }).then((resp) =>{
        listLength = resp.body.length
        cy.request({
            method: 'DELETE',
            url: 'https://68c1452698c818a694014623.mockapi.io/api/v1/people/'+listLength,
        }).then((resp) =>{
            expect(resp.status).to.eq(200)
        })
    })
})

Cypress.Commands.add('deleteRegister', (id) => {
    cy.request({
        method: 'DELETE',
        url: 'https://68c1452698c818a694014623.mockapi.io/api/v1/people/'+id,
    }).then((resp) =>{
        expect(resp.status).to.eq(200)
    })
})
