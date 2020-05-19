
/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage' // gå upp i nivå


//Test suite
describe('Test suite - with PO',function(){

   this.beforeEach (() => {                                            //köra för varje test fall
       cy.visit('http://127.0.0.1:5500/acme_website/acme/index.html') //Öpnar och kollar adressen 
       indexFuncs.checkTitleOfIndexPage(cy)   // om tittel stämmer,instans av cypres (cy)

   })

    it('Navigate through pages',function(){
   
       indexFuncs.navigateToAboutPage(cy,'About Us')         //Funktion från indexPage

    })

})