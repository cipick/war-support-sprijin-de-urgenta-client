import { Given } from 'cypress-cucumber-preprocessor/steps'

Given(/^I click donate general hygiene button$/, function() {
  cy.findAllByText('Adaugă').eq(1).click()
  cy.wait(1000)
});

Given(/^I fill the donate general hygiene form$/, function() {
  cy.get('#has_transportation_true').check()
  cy.selectMultiDropdown()
  cy.get('#town').type('test')
  cy.get('#name').type('test')
  cy.get('#quantity').type(100)
  cy.get('#unit_type').type('l')
  cy.get('#packaging_type').type('ambalaj plastic')
});

Given(/^I fill multiple donate general hygiene form$/, function (dataTable) {
  dataTable.hashes().forEach((elem) => {
    cy.findAllByText('Adaugă').eq(1).click()
    cy.wait(1000)

    if (elem.has_transportation === 'true') {
      cy.get('#has_transportation_true').check()
    } else {
      cy.get('#has_transportation_false').check()
    }
    cy.selectMultiDropdown()
    cy.get('#town').type(elem.town)
    cy.get('#name').type(elem.name)
    cy.get('#quantity').type(elem.quantity)
    cy.get('#unit_type').type(elem.unit_type)
    cy.get('#packaging_type').type(elem.packaging_type)
    cy.get('#expiration_date').type(elem.expiration_date)
    cy.get('form button[type="submit"]').click()
  })
})
