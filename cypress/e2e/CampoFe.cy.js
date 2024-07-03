import 'cypress-file-upload'; //Importacion de la libreria para carga de archivos
// Metodo para generar un texto que se autocomplete 
function generateRandomString(length) { 
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateRandomCod(length) {
  let result = '';
  const characters = '0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
context('campofe', () => {
  beforeEach(() => 
    cy.visit('https://axiomcloud.test.delfosti.site/autenticar/iniciar-sesion'))

  })
  it('campofe', () => {
    cy.visit('https://axiomcloud.test.delfosti.site/autenticar/iniciar-sesion', {
      timeout: 100000, 
  
    })
    // Login Campo fe
    cy.get(':nth-child(1) > fe-input > .fe-input > .ng-untouched').type("admin.delfosti")
    cy.get(':nth-child(2) > fe-input > .fe-input > .ng-untouched').type("admin1234")
    cy.get('.fe-button').click()

    // Camposanto crear
    cy.get('[title="Gestión de espacios"] > .nav-link > fe-icon > .mat-icon').click()
    cy.visit('https://axiomcloud.test.delfosti.site/mapas/camposanto/listar')
    cy.wait(5000)
    cy.visit('https://axiomcloud.test.delfosti.site/mapas/camposanto/crear')
    cy.wait(5000)
    cy.get(':nth-child(1) > fe-input > .fe-input > .ng-untouched').type('Camposanto aut '+ generateRandomString(5))
    cy.get('fe-input > .fe-input > .ng-pristine').type('cod '+ generateRandomString(2))
    cy.get('.ng-pristine').type(generateRandomCod(8))
    cy.get(':nth-child(1) > fe-button-file > :nth-child(1) > .file-button').click({ force: true })
    
    cy.get("input[type='file']").attachFile("Coordenadas nuevo formato.xlsx")
    cy.contains('Subir archivo').click({ force: true }).attachFile("Coordenadas nuevo formato.xlsx")
    cy.wait(5000)

    //cy.get('.image__container > :nth-child(2) > :nth-child(1)').click()
    //cy.get("input[type='file']").attachFile("arbol.jpg")
    //cy.contains('Agregar').click()
    //cy.get('fe-button.ng-star-inserted > .fe-button > fe-icon.ng-star-inserted > .mat-icon').click()
    //cy.get('span.ng-star-inserted').click() PIPIPI
    //cy.get('fe-button.ng-star-inserted > .fe-button').click() esto deberia ser el boton pipipi ( USAR ID AL DESARROLLAR O.O )
    // Pruebas de buscador
    //cy.get('input.ng-star-inserted').type("adm{enter}")
    // Crear usuario
    //cy.get('fe-button.ng-star-inserted > .fe-button').click()
    //cy.get('.col-2 > fe-select-search > .ng-select > .ng-select-container > .ng-arrow-wrapper').click()
    //cy.contains('DNI').click()
    //cy.get('.col-4 > fe-input > .fe-input > .ng-untouched').click()
    //cy.get('.col-4 > fe-input > .fe-input > .ng-untouched').type("99999990")
    //cy.get('.my-3 > .col-6 > fe-input > .fe-input > .ng-pristine').type("prueba")
    //cy.get(':nth-child(3) > :nth-child(1) > fe-input > .fe-input > .ng-untouched').type("Automatizada")
    //cy.get(':nth-child(3) > :nth-child(2) > fe-input > .fe-input > .ng-untouched').type("uno")
    //cy.get(':nth-child(4) > :nth-child(1) > fe-input > .fe-input > .ng-untouched').type("00001")
    //cy.get(':nth-child(4) > :nth-child(2) > fe-input > .fe-input > .ng-untouched').type("autom0001")
    //cy.get(':nth-child(5) > :nth-child(1) > fe-input > .fe-input > .ng-untouched').type("campofeautomatiza1@test.com")
    //cy.get(':nth-child(5) > :nth-child(2) > fe-input > .fe-input > .ng-untouched').type("998877665")
    //cy.get(':nth-child(6) > .col-6 > fe-input > .fe-input > .ng-untouched').type("calle falsa 123")
    //cy.get(':nth-child(1) > fe-select-search > .ng-select-searchable > .ng-select-container > .ng-arrow-wrapper').click()
    //cy.contains('GERENCIA GENERAL').click()
    //cy.get(':nth-child(2) > fe-select-search > .ng-select-searchable > .ng-select-container > .ng-arrow-wrapper').click()
    //cy.contains('ABOGADO').click()
    //cy.get('.link__container > span').click()
    //cy.get('.modals__roles--main > :nth-child(1) > img').click()
    //cy.get('.modals__roles--main > :nth-child(2) > img').click()
    //cy.get(':nth-child(3) > img').click()
    //cy.get(':nth-child(4) > img').click()
    //cy.get(':nth-child(5) > img').click()
    //cy.get(':nth-child(6) > img').click()
    //cy.get('[text="Confirmar"] > .fe-button').click()
    //cy.get(':nth-child(2) > fe-button > .fe-button').click()
    //cy.get('.w-100 > :nth-child(2) > fe-button > .fe-button').click()
    // Filtros
    //cy.get('[icon="filter_list"] > .fe-button').click()
    //cy.get('input[type="checkbox"]').check()
    //cy.get('input[type="checkbox"]').uncheck()
  })