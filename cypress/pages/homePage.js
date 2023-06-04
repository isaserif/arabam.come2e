class homePage{
   
    url(){
        return cy.visit('https://www.arabam.com')
    }
    //login locate
    girisyapLink(){
        return cy.get('#wrapper > header')
        }  
    usernameBox(){
        return cy.get('#emailOrPhone')
        }    
    passwordBox(){
        return cy.get('#password')
        }
    loginButon(){
        return cy.get('form[name="loginForm"] button[type="submit"]')
        }   
// trinksat locate
    topMenu(){
        return  cy.get('div[class="header__top-menu"]')
        }
    trinkSat(){
            return cy.get('div#wrapper li.list-item.active > span')
        }
    teklifAl(){
            return cy.get('a[data-layer="Trink sat!, Teklif Al"]')
        }
    arabamKacPara(){
            return cy.get('body > div:nth-child(3) > header:nth-child(4) > div:nth-child(6) > div:nth-child(1) > nav:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > ul:nth-child(3) > li:nth-child(1) > a:nth-child(1)')
        }
        
    aramaKutusu(){
        return cy.get('div[class="search-container"]')
        }
    aramaListesi(){
        return cy.get('div[class="items-container"]')
        }
    kmAramaKutusu(){
        return cy.get('#price-suggestion input')
        }
    devamEtBtn(){
        return cy.get('#price-suggestion button[type="submit"]')
        }
    opsiyonelSec(){
        return cy.get('#price-suggestion div.steps-container')
        }
   tramerSec(){
        return cy.get('select[required="required"]')
        }
   robotDegilim(){
    return cy.get('div[class="current-step"]')
        }
   fiyatiniOgren(){
       return cy.get('#price-suggestion section.intro-section > div > div')
        }
        }
    export default new homePage()