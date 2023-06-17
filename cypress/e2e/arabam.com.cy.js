import { slowCypressDown } from "cypress-slow-down";
import homePage from "../pages/homePage";


slowCypressDown(true)
describe('Login olmadan arabam.com gider ve satin almak istedigi arac özelliklerini filtreleyerek arama yapar', () => {
  beforeEach(() => {
   cy.on('uncaught:exception', (err, runnable) => false)
   
   cy.step('arabam.com sitesine gider')
   homePage.url();
   
   cy.step('giriş yap linkine tıklar')
   homePage.girisyapLink().contains('Giriş Yap').should('be.visible').click()
   
   cy.step('usename girer')
    homePage.usernameBox().type('gevinde44@gmail.com')

    cy.step('password girer')
    homePage.passwordBox().type('12qwaszxCVB')

    cy.step('login butona tiklar')
    homePage.loginButon().click()
  });
 
 it('url ve title dogrular', () => {

  cy.step('url dogrular')
  cy.url().should('eq','https://www.arabam.com/')
 
  cy.step('Title dogrular')
  cy.title().should('eq','arabam.com: 2. El ve 0 Km Satılık Araç İlanları Platformu')
 
});

  it.only('Hayalimdeki arabanin kaç para oldugunu ogrenmek istiyorum', () => {


  cy.step('Hizmetlerimiz başliğina gelir');
  homePage.topMenu().should('be.visible').contains('Hizmetlerimiz').click()
  
  cy.step('Arabam Kaç Para linkine tiklar')
  homePage.arabamKacPara().should('be.visible').click();
  
  cy.step('Aracimin fiyatini merak ediyorum secer ')
  homePage.fiyatiniOgren().contains('Aracımın fiyatını merak ediyorum').should('be.visible').click()

  cy.step('Arama kutusuna "Ford" yazar')
  homePage.aramaKutusu().should('be.visible').type('Ford')

  cy.step('Cikan listeden "Ford" secer')
  homePage.aramaListesi().contains('Ford').should('be.visible').click()

  cy.step('Cikan listeden "2016" secer')
  homePage.aramaListesi().contains('2016').should('be.visible').click()

  cy.step('Cikan listeden "Focus" secer')
  homePage.aramaListesi().contains('Focus').should('be.visible').click()

  cy.step('Cikan listeden "Hatchback/5" secer')
  homePage.aramaListesi().contains('Hatchback/5').should('be.visible').click()

  cy.step('Cikan listeden "Dizel" secer')
  homePage.aramaListesi().contains('Dizel').should('be.visible').click()

  cy.step('Cikan listeden "Düz" secer')
  homePage.aramaListesi().contains('Düz').should('be.visible').click()

  cy.step('Cikan listeden "Focus 1.6 TDCI Titanium Manuel" secer')
  homePage.aramaListesi().contains('Focus 1.6 TDCI Titanium Manuel').should('be.visible').click()

  cy.step('Cikan listeden "Beyaz" secer')
  homePage.aramaListesi().contains('Beyaz').should('be.visible').click()

  cy.step('Arama kutusuna "100000" yazar')
  homePage.kmAramaKutusu().should('be.visible').type('100000')

  cy.step('"Devam Et" tiklar')
  homePage.devamEtBtn().should('be.visible').click()

  cy.step('opsiyonel donanim olarak "Sunroof" tiklar')
  homePage.opsiyonelSec().contains('Sunroof').click()

  cy.step('"Devam Et" tiklar')
  homePage.opsiyonelSec().contains('Devam Et').click()

  cy.step('"Tramer Sec" "Yok" girer')
  homePage.tramerSec().select('Yok') 

 
  cy.step('Fiyat Ogren butonuna tiklar')
  homePage.fiyatiniOgren().should('be.visible').click()


  
  




});

})

