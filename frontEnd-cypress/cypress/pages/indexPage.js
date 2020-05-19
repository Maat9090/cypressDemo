/// <reference types="cypress" />

//Elements
const indexPageTitle='Acme Web Design | Welcome' 
//const about =' href="about.html'
const navAboutLink = '[test-id="nav-about"]'


//Actions /functions
function checkTitleOfIndexPage(cy){
    cy.title().should('eq', indexPageTitle)
}

function navigateToAboutPage(cy,contentToConfirm){
    cy.get(navAboutLink).click()
    cy,contains(contentToConfirm)
}


//Exports
module.exports ={
    checkTitleOfIndexPage,
    navigateToAboutPage
    
}