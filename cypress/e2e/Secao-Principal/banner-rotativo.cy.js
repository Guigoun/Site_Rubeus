describe("Seção de banners da home", () => {
  beforeEach(() => {
    //Acess o site a ser testado
    cy.visit("https://qualidade.apprbs.com.br/site");
  });

  it("Deve validar se o carrossel do banner rotativo funciona (O teste deve Passar)", () => {
    //Valida se a seta do carrossel que muda a imagem do banner está visível e funcional
    cy.get(".next")
    .should("be.visible")
    .click()
    .click();
  });

  it("Deve permitir o clique no banner rotativo para inscrição (O teste deve quebrar - Bug Esperado)", () => {
    // Buscamos o slide que está visível no momento e tentamos encontrar um link (tag 'a') dentro dele
    cy.get('.slideshow-container .mySlides[style*="display: block;"]')
      .find("a") // O Cypress vai falhar na linha do .find('a'), já que o link não existe
      .should("exist")
      .and("have.attr", "href");
  });
});
