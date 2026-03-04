describe("Seção de banners da home", () => {
  beforeEach(() => {
    //Acess o site a ser testado
    cy.visit("https://qualidade.apprbs.com.br/site");
  });

  it("Deve validar se o carrossel do banner rotativo funciona (O teste deve Passar)", () => {
    //Garantimos que o primeiro slide (posição 0) está visível na tela
    cy.get(".mySlides")
      .eq(0)
      .should("have.attr", "style")
      .and("include", "display: block");

    //Clicamos na seta para avançar
    cy.get(".next").should("be.visible").click();

    //O slide 1 tem que ter sumido e o slide 2 (posição 1) tem que ter aparecido
    cy.get(".mySlides")
      .eq(0)
      .should("have.attr", "style")
      .and("include", "display: none");

    cy.get(".mySlides")
      .eq(1)
      .should("have.attr", "style")
      .and("include", "display: block");

    //Clicamos na seta para avançar
    cy.get(".next").should("be.visible").click();

    //O slide 2 tem que ter sumido e o slide 3 (posição 1) tem que ter aparecido
    cy.get(".mySlides")
      .eq(1)
      .should("have.attr", "style")
      .and("include", "display: none");

    cy.get(".mySlides")
      .eq(2)
      .should("have.attr", "style")
      .and("include", "display: block");
  });

  it("Deve permitir o clique no banner rotativo para inscrição (O teste deve quebrar - Bug Esperado)", () => {
    // Buscamos o slide que está visível no momento e tentamos encontrar um link (tag 'a') dentro dele
    cy.get('.slideshow-container .mySlides[style*="display: block;"]')
      .find("a") // O Cypress vai falhar na linha do .find('a'), já que o link não existe
      .should("exist")
      .and("have.attr", "href");
  });
});
